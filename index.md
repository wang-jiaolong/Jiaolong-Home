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
    about: `🥳 Hello, 很高兴你能找到这里，下面来简单的介绍下我自己。 <br><br>

    我叫 <b><u>Jiaolong</u></b>，一所普通学校的普通计算机专业学生，在我应付了诸多课设后就在想，为什么不能真正做一款产品呢？由于是后端出身，所以愈发觉得拳脚无处施展，于是在我读研前的间隙开始接触iOS开发，开始开发自己的App，正式步入大前端的行列。当然除了写移动端的代码外，我也正努力正向全栈靠拢，不只是代码上的全栈，还有技能上的全栈，希望有一天能够一人即团队。<br><br>

    目前由我自己独立开发的有两款iOS App，物品指南 / 事线，均在上线后获得App Strore编辑推荐，欢迎你去下载体验。在这条路上也认识了到了很多前辈，给了我很多的帮助。<br><br>
    
    虽然有些创业的念头，但不管是技术还是阅历上我还很稚嫩，所以毕业后按部就班的成为了一名合格的螺丝钉。幸运的拿到了我每日必刷App的公司Offer，同时所在部门的氛围也非常好，老板也很nice，所以打工其实也很愉快。刚刚步入社会，也正是快速成长的时候，预计这两年都会很充实。等成长空间没那么大的时候，可能才是正式沦为牛马的时候。<br><br>

    不知是什么时候起有些羡慕那些旅居的自由职业者，幸运的是我的技能恰好可以完全仅依靠网络，所以可能未来有一天等到时机成熟的时候，我也会去尝试下旅居，买辆SU7，奔向不同城市甚至国家，边旅居变创业。不知道会不会有这样的机会。也许几年？也许没这个机会，但总要有点念想。<br><br>

    除了写代码外我还喜欢摄影📷，虽然还只停留在入门阶段，希望未来能出一本自己的影集。<br><br>

    希望以后能有更多故事可以讲<br><br>

    `,
    doings: [
      {icon: imagePath + "icon-app.svg", title: "iOS Developer", description: "一个正在成长的iOS独立开发者"},
      {icon: imagePath + "icon-photo.svg", title: "Photography", description: "正在尝试着拍摄一些有趣的东西"},
      {icon: imagePath + "coffee.svg", title: "Coffee", description: "学着做些简单的咖啡"}
    ],
    progress: [
      {
        title: "OKRs",
        items: [
          {title:"📱 事线App端重构优化", date:"2024 - 2025" , value:20},
          {title:"📚 看5本书", date:"2025 - 2026" , value:0},
          {title:"💰 攒够 * W", date:"2025 - 2026" , current:3000, target:200000, value:0},
          {title:"🧑🏻‍💻 Full-Stack Developer", date:"< 2030" , value:15},
          {title:"🚗 数字游民计划", date:"< 2030" , value:1.1}
        ]
      },
      // {
      //   title: "Area",
      //   items: [
      //     {title:"🧑🏻‍💻 编程", value:33.3},
      //     {title:"📷 摄影", value:10},
      //     {title:"🎬 剪辑", value:10}
      //   ]
      // },
      {
        title: "Skills",
        items: [
          {title:"🥳 Swift", value:60},
          {title:"🤨 Objective-C", value:40},
          {title:"🤯 Java", value:30},
          {title:"😶‍🌫️ Vue + HTML + CSS + JS", value:20},
          {title:"😵 Python", value:10},
          {title:"🥶 Kotlin", value:1},
        ]
      }

    ],
    projects: [
      {
        title: "事线 - 串事成线",
        description: "多项目时间线记录工具",
        icon:iconPath + "eventline.png",
        url: "", 
        badge:"iOS App", 
        label: "努力更新中",
        status: "fast"
      },
      {
        title: "物品指南 - 你的生活数据库",
        description: "打造你的生活数据库",
        icon:iconPath + "mythings.jpg",
        url: "",
        badge:"iOS App",
        label: "缓慢更新",
        status: "suspended"
      },
      {
        title: "ReceiptEase",
        description: "小票风账单",
        icon:iconPath + "receipt.png",
        url: "", badge:"iOS App",
        label: "缓慢更新",
        status: "suspended"
      },
    ],
    apps:[
      {
        title: "",
        items: [
          {title: "notion", icon:iconPath + "notion.png", url: ""},
          {title: "Craft", icon:iconPath + "craft.png", url: ""},
          {title: "linear", icon:iconPath + "linear.png", url: ""},
          {title: "Flomo", icon:iconPath + "flomo.png", url: ""},
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
