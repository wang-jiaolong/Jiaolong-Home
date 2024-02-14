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
  sidebar: {
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
  content: {
    about: `🧑🏻‍💻 白天社畜打工人 晚上独立开发者
    📱 App Store搜索: 事线｜物品指南
    📷 摄影小白 也想拍点有意思的照片
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

<Portfolio :config="config"/>
