---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
navbar: false
---

<script setup>


import { useData } from 'vitepress'
const { theme, page, frontmatter } = useData()

import Portfolio from './portfolio/Portfolio.vue'

const imagePath = '/images/'
const iconPath = '/images/icon/'

const config = {
  active:"about",
  content: {
    about: `🥳 Hello, 很高兴你能看到这，下面来简单的介绍下我自己。<br><br>

    我是Jiaolong，一个普通学校的普通计算机专业学生，在我应付了诸多课题设计之后就在想，为什么不能真正开发一款产品呢？由于是后端出身，所以愈发觉得拳脚无处施展，于是在我读研前的空隙自学了iOS开发，步入大前端的行列。<br><br>

    目前为止由我自己独立开发了两款iOS App，物品指南/事线，欢迎你去下载体验。在不断维护的过程中，也不断让我朝着创业的目标靠拢，也认识了很多朋友。<br><br>
    
    但不是所有想法都能立刻落地实现并且有收获的，所以我也像大多毕业生一样找到了一份还算满意的工作，也在不断提高自己的技术，而app则作为我的副业，下班之余会抽空来更新，当有一天睡后收入能差不多cover收入后，可能会选择all in，也许几年？也许没这个机会，但总要有点念想。<br><br>

    除了写代码外我还喜欢摄影，虽然还只停留在入门阶段。

    `,
    doings: [
      {icon: imagePath + "icon-app.svg", title: "iOS Developer", description: "一个正在成长的iOS独立开发者。"},
      {icon: imagePath + "icon-photo.svg", title: "Photography", description: "正在尝试着拍摄一些有趣的东西。"}
    ],
    okrs: [
          {title:"🎓 顺利毕业", date:"2024.06" , value:50 , subItems: [
              {title:"小论文", value:15},
               {title:"大论文", value:15},
          ]},
          {title:"📱 事线App端重构优化", date:"2024 - 2025" , value:15},
          {title:"🧑🏻‍💻 Full-Stack Developer", date:"< 2030" , value:10},
          {title:"🚗 数字游民计划", date:"< 2035" , value:1.1}
    ],
    progress: [
      {
        title: "OKRs",
        items: [
          {title:"🎓 顺利毕业", date:"2024.06" , value:99},
          {title:"📱 事线App端重构优化", date:"2024 - 2025" , value:20},
          {title:"🧑🏻‍💻 Full-Stack Developer", date:"< 2030" , value:15},
          {title:"🚗 数字游民计划", date:"< 2035" , value:1.1}
        ]
      },
      {
        title: "Area",
        items: [
          {title:"🧑🏻‍💻 编程", value:33.3},
          {title:"📷 摄影", value:10},
          {title:"🎬 剪辑", value:10}
        ]
      },
      {
        title: "Skills",
        items: [
          {title:"🥳 Swift", value:50},
          {title:"🤨 Objective-C", value:30},
          {title:"🤯 Java", value:30},
          {title:"😶‍🌫️ Vue + HTML + CSS", value:20},
          {title:"😵 Python", value:10},
          {title:"🥶 Kotlin", value:1},
        ]
      }

    ],
    projects: [
      {title: "事线 - 串事成线",description: "多项目时间线记录工具", icon:iconPath + "eventline.jpg", url: "", badge:"iOS", label: "已上架"},
      {title: "物品指南 - 你的生活数据库",description: "打造你的生活数据库", icon:iconPath + "mythings.jpg", url: "", badge:"iOS",label: "已上架"},
      {title: "ReceiptEase",description: "小票风账单", icon:iconPath + "receipt.png", url: "", badge:"iOS",label: "已上架"},

    ],
    apps:[
      {
        title: "",
        items: [
          {title: "notion", icon:iconPath + "notion.png", url: ""},
          {title: "Craft", icon:iconPath + "craft.png", url: ""},
          {title: "linear", icon:iconPath + "linear.png", url: ""},
          // {title: "Vision", icon:iconPath + "vision.png", url: ""},
        ]
      },
    ],
    books: [
      {title: "解密Instagram", img: "/images/books/instagram.jpg", value:35},
      {title: "Steve Jobs", img: "/images/books/steve.jpg", value:25},
      {title: "Refactoring UI", img: "/images/books/refactoringUI.jpeg", value:33},
      {title: "Clean Code", img: "/images/books/cleanCode.jpg", value:5},
      {title: "facebook", img: "/images/books/facebook.jpg", value:0},
      {title: "小米传", img: "/images/books/xiaomi.jpg", value:100},

    ]
  }

}

      // {
      //   title: "Others",
      //   items: [
      //     {title: "Percento", icon:iconPath + "percento.png", url: ""},
      //   ]
      // },

</script>

<Portfolio :info="theme.info" :config="config"/>
