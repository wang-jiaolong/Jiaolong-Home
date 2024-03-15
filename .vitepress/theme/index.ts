// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './custom.css'

import MyLayout from "../components/MyLayout.vue";
import LinkCard from "../components/LinkCard.vue";

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  // Layout: () => {
  //   return h(DefaultTheme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  enhanceApp(ctx) {
    ctx.app.component('LinkCard', LinkCard)
  }
  
} satisfies Theme
