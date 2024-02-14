import { defineConfig } from 'vitepress'
const imagePath = '/images/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    info: {
      avatar: imagePath + "avatar.png",
      name: "Jiaolong",
      content: "Solo Developer",
      email: "jiaolong_wang@foxmail.com",
      phone: "",
      birthday: "",
      location: "北京",
      socials: [{
        title: "Github",
        url: "https://github.com/wang-jiaolong",
        icon: imagePath + "icon/github.png"
      },
      {
        title: "即刻",
        url: "https://web.okjike.com/u/DB74F1FC-514A-44A6-B8BE-D09E27C873E6",
        icon: imagePath + "icon/jike.png"
      },
      {
        title: "小红书",
        url: "https://www.xiaohongshu.com/user/profile/61921a4e000000002102b5b4?xhsshare=CopyLink&appuid=61921a4e000000002102b5b4&apptime=1662621464",
        icon: imagePath + "icon/redBook.png"
      },
      {
        title: "Bilibili",
        url: "https://space.bilibili.com/239811731",
        icon: imagePath + "icon/bilibili.png"
      }]
    },
  }
})
