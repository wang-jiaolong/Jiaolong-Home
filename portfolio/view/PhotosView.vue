<template>
    <!--
      - #PORTFOLIO
    -->
    <!-- <article :class="config.active == 'photos' ? 'photos active' : 'photos'" data-page="photos"> -->
      
      <div id="gallery" class="zoomwall">
        <img src="../assets/images/shanghai.jpeg" />
</div>
    <!-- </article> -->

</template>

<script setup >

import { useData } from 'vitepress'
import{ onMounted } from 'vue'
import '../assets/zoomwall/zoomwall.css'
import * as zoomwall from '../assets/zoomwall/zoomwall.ts'
const { theme, page, frontmatter } = useData()


// initHeatMap()

const props = defineProps({
    config: Object,
    weekly: Object
})

onMounted(() => {
  zoomwall.create(document.getElementById("gallery"), true)
})

</script>

<style lang="less">
.heatmap {
    .cell-list {
        display: flex;
        gap:5px;
        padding-bottom: 15px;
        align-items: center;

        .cell {
            width: 15px;
            height: 15px;
            background: linear-gradient(to right, hsl(45, 100%, 72%), hsl(35, 100%, 68%));
            border-radius: 3px;
        }
    }
}
</style>