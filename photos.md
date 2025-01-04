---
layout: home
title: Photos
navbar: false
---


<script setup>


import { useData } from 'vitepress'
const { theme, page, frontmatter } = useData()

import Portfolio from './portfolio/Portfolio.vue'

</script>

<Portfolio :info="theme.info" :config="config"/>