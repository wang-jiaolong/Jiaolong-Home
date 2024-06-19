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
    about: `🥳 Hello, 很高兴你能找到这里，下面来简单的介绍下我自己。

    <p>我是 <b><u>Jiaolong</u></b>，一所普通学校的普通计算机专业学生，在我应付了诸多课设后就在想，为什么不能真正开发一款产品呢？由于是后端出身，所以愈发觉得拳脚无处施展，于是在我读研前的间隙自学了iOS开发，步入大前端的行列。当然除了写移动端的代码外，我也正努力正向全栈靠拢，不只是代码上的全栈，还有技能上的全栈，希望有一天能够一人即团队。</p>

    <p>目前为止由我自己独立开发了两款iOS App，物品指南/事线，欢迎你去下载体验。在不断维护的过程中，也不断让我朝着创业的目标靠拢，也认识了诸多朋友。</p>
    
    <p>但不是所有想法都能立刻落地实现并且有效的，所以我也像大多毕业生一样找了份谋生的工作，幸运的是这是一家我很喜欢的公司。同时我也在不断提高自己的技术，而开发app则作为我的副业，下班之余会抽空来更新，当有一天睡后收入能差不多cover收入后，可能会选择all in，也许几年？也许没这个机会，但总要有点念想。</p>

    <p>不知是什么时候起有些羡慕那些旅居的自由职业者，幸运的是我的技能恰好完全依赖于网络，所以未来有一天可能我也会去尝试下旅居，穿梭于不同城市甚至是国家，可能等出来创业的时候能够实现。</p>

    <p>除了写代码外我还喜欢摄影📷，虽然还只停留在入门阶段，希望未来能出一本自己的影集。</p>

    <p>希望以后能有更多故事可以讲</p>

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
