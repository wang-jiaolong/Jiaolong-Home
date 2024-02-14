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
    skills:[
      {title:"编程", value:33.3},
      {title:"摄影", value:10},
      {title:"剪辑", value:10},
    ]
  }

}

</script>

<Portfolio :info="theme.info" :config="config"/>
