---
layout: home
title: Weekly
navbar: false
---


<script setup>


import { useData } from 'vitepress'
const { theme, page, frontmatter } = useData()

import Portfolio from './portfolio/Portfolio.vue'

const imagePath = '/images/'

const config = {
    active: "weekly",
  content: {
  }

}

</script>

<Portfolio :info="theme.info" :config="config"/>
