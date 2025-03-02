<template>
    <!--
      - #PORTFOLIO
    -->
    <article :class="config.active == 'weekly' ? 'portfolio active' : 'about'" data-page="portfolio">
        <header>
            <h2 class="h2 article-title">Weekly</h2>
        </header>

        <section class="projects">

            <!-- <div class="heatmap">
                <div class="cell-list">
                    <template v-for="i in getWeekNumber()">
                        <a v-if="i != 3" class="cell" alt="i"></a>
                        <a v-else>🐦</a>
                    </template>
                    
                </div>
            </div> -->

            <ul class="filter-list">
                <li v-for=" (year, index) in theme.weekly" class="filter-item">
                    <button @click="changeIndex(index)" :class="{ active: currentYear === index }" data-filter-btn>{{
                        year.title + "(" + year.items.length + ")" }}</button>
                </li>
            </ul>


            <!-- <div class="filter-select-box">

                <button class="filter-select" data-select>

                    <div class="select-value" data-selecct-value>Select category</div>

                    <div class="select-icon">
                        <ion-icon name="chevron-down"></ion-icon>
                    </div>

                </button>

                <ul class="select-list">

                    <li class="select-item">
                        <button data-select-item>All</button>
                    </li>

                    <li class="select-item">
                        <button data-select-item>Web design</button>
                    </li>

                    <li class="select-item">
                        <button data-select-item>Applications</button>
                    </li>

                    <li class="select-item">
                        <button data-select-item>Web development</button>
                    </li>

                </ul>

            </div> -->

            <ul class="project-list">

                <li v-for="item in theme.weekly[currentYear].items" class="project-item  active" data-filter-item
                    data-category="web development">
                    <a :href="item.link">

                        <figure class="project-img">
                            <div class="project-item-icon-box">
                                <!-- <ion-icon name="eye-outline"></ion-icon> -->
                                {{ item.week.toUpperCase() }}
                            </div>
                            <img :src="'/weekly/' + new Date(item.date).getFullYear() + '/' + item.week.toLowerCase() + '.jpg'"
                                loading="lazy" />
                        </figure>


                        <h3 class="project-title">{{ item.week.toUpperCase() + ': ' + item.title }}</h3>

                        <p class="project-category">{{ new Date(item.date).toLocaleDateString() }}</p>

                    </a>
                </li>
            </ul>

        </section>

    </article>
</template>

<script setup>

import { useData } from 'vitepress'
const { theme, page, frontmatter } = useData()
import { ref } from 'vue';

var currentYear = ref(0)

function changeIndex(index) {
    currentYear.value = index
}


function getWeekNumber() {
    // Copy date so don't modify original
    var date = new Date();
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
    return weekNo;
  }

var heatMap = ref([])


// initHeatMap()

const props = defineProps({
    config: Object,
    weekly: Object
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
hr {
    display: none;
}
</style>