---
layout: home
title: Photos
navbar: false
---


<script setup>


import { useData } from 'vitepress'
const { theme, page, frontmatter } = useData()

import Portfolio from './portfolio/Portfolio.vue'

const imagePath = '/images/'

const config = {
    active: "photos",
  content: {
  }

}

</script>

<Portfolio :info="theme.info" :config="config"/>