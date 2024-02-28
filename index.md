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
          {title:"🥳 Swift", value:45},
          {title:"🤨 Objective-C", value:30},
          {title:"🤯 Java", value:20},
          {title:"😶‍🌫️ Vue + HTML + CSS", value:20},
          {title:"🥶 Python", value:20},
        ]
      },
      {
        title: "OKRs",
        items: [
          {title:"🎓 顺利毕业", date:"2024.06" , value:50 , subItems: [
              {title:"小论文", value:15},
               {title:"大论文", value:15},
          ]},
          {title:"📱 事线App端重构优化", date:"2024 - 2025" , value:15},
          {title:"🧑🏻‍💻 Full-Stack Developer", date:"< 2030" , value:10},
          {title:"🚗 数字游民计划", date:"< 2035" , value:1.1}
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
          {title: "linear", icon:iconPath + "linear.png", url: ""},
          // {title: "Craft", icon:iconPath + "craft.png", url: ""},
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
