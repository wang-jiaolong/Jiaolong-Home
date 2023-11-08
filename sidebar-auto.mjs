import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function traverseFolder(folderPath) {
  const sidebar = {};

  function traverseDirectory(directory, parentPath) {

    const files = fs.readdirSync(directory);

    for (const file of files) {
      const filePath = path.join(directory, file);
      const stats = fs.statSync(filePath);
      if (stats.isDirectory() && file != "assets") {
        const directoryPath = path.join(directory, file);
        const subFolderPath = parentPath ? path.join(parentPath, file) : `/${file}`;
        traverseDirectory(directoryPath, subFolderPath);
      } else if (stats.isFile() && path.extname(file) === '.md') {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);
        if (data.hidden){
          continue
        }
        const fileName = data.title || path.basename(file, '.md');
        const pathName = path.basename(file, '.md');
        var fileLink = "/pages" + path.join(parentPath, pathName).replace(/\\/g, '/');

        // 如果frontmatter里有permalink数据的话 就用直接代替
        // if (data.permalink != null) {
        //   fileLink = "pages" + data.permalink
        // }
        const fileObject = { text: fileName, link: `${fileLink}`, date:data.date, week:data.week };
        const key = `/pages${parentPath}/`.replace(/\\/g, '/')

        if (sidebar[key]) {
          sidebar[key][0].items.unshift(fileObject);
          sidebar[key][0].items.sort(compareTime)
        } else {
          var folderText = String(parentPath.replace(/\\/g, '/'))
          sidebar[key] = [{ text: folderText.split('/')[folderText.split('/').length - 1].toUpperCase(), items: [fileObject] }];
        }
      }
    }
  }

  traverseDirectory(folderPath, '');

  return sidebar;
}

// 示例用法
const folderPath = './docs/pages'; // 替换为实际的文件夹路径
const sidebar = traverseFolder(folderPath);

// 输出生成的JSON对象
console.log(JSON.stringify(sidebar, null, 2));
const prepend = `export const sidebar = `
fs.writeFileSync("./docs/.vitepress/sidebar.js", prepend + JSON.stringify(sidebar, null, 2))



function compareTime(a, b) {
  return new Date(b.date) - new Date(a.date);
}