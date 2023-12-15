---
# https://vitepress.dev/reference/default-theme-home-page
layout: doc
aside: false
sidebar: true
title: Weekly
---

<script setup>

import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()

</script>

<VPTeamPage style="padding-bottom: unset !important;">
  <VPTeamPageTitle>
    <template #title>
      Weekly
    </template>
    <template #lead>
      人生流水账
    </template>
  </VPTeamPageTitle>
</VPTeamPage>

<div class="yearList" v-for="item in theme.weekly">

## {{ item.title }}({{ item.items.length }})

<WeeklyList :items ="item.items" />

</div>

<style scoped lang="less">

.yearList {
  max-width: 750px;
    padding: 0 40px;
    margin: 0 auto;
        @media (max-width: 419px) {
            padding: 0 5px;
        }
}
</style>