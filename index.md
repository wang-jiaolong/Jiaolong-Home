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
    about: `🧑🏻‍💻 白天社畜打工人 晚上独立开发者<br>
    📱 App Store搜索: 事线｜物品指南<br>
    📷 摄影小白 也想拍点有意思的照片<br>
    🚗 数字游民策划中1%`,
    doings: [
      {icon: imagePath + "icon-app.svg", title: "iOS Developer", description: "一个正在成长的iOS独立开发者。"},
      {icon: imagePath + "icon-photo.svg", title: "Photography", description: "正在尝试着拍摄一些有趣的东西。"},
    ],
    progress: [
      {
        title: "Skills",
        items: [
          {title:"编程", value:33.3},
          {title:"摄影", value:10},
          {title:"剪辑", value:10}
        ]
      },
      {
        title: "OKRs",
        items: [
          {title:"📱 事线App端优化", description:"2024-2025" , value:15},
          {title:"🧑🏻‍💻 Full-Stack Developer", description:"2030年" , value:10},
          {title:"🚗 数字游民", description:"2035年" , value:1.1}
        ]
      }
    ],
    projects: [
      {title: "事线 - 串事成线",description: "多项目时间线记录工具", icon:imagePath + "eventline.jpg", url: ""},
      {title: "物品指南 - 你的生活数据库",description: "打造你的生活数据库", icon:imagePath + "mythings.jpg", url: ""},
    ],
    apps:[
      {
        title: "Productivity",
        items: [
          {title: "notion", icon:iconPath + "notion.png", url: ""},
          {title: "linear", icon:iconPath + "linear.png", url: ""},
          {title: "Craft", icon:iconPath + "craft.png", url: ""},
          {title: "Vision", icon:iconPath + "vision.png", url: ""},
        ]
      },



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
