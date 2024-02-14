<template>
    <!--
      - #PORTFOLIO
    -->
    <article :class="config.active == 'weekly' ? 'portfolio active' : 'about'" data-page="portfolio">
        <header>
            <h2 class="h2 article-title">Weekly</h2>
        </header>

        <section class="projects">

            <ul class="filter-list">

                <li v-for=" (year, index) in theme.weekly" class="filter-item">
                    <button @click="changeIndex(index)" :class="{active: currentYear === index}" data-filter-btn>{{ year.title + "(" + year.items.length + ")" }}</button>
                </li>

            </ul>

        
            <div class="filter-select-box">

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

            </div>

            <ul class="project-list">

                <li v-for="item in  theme.weekly[currentYear].items" class="project-item  active" data-filter-item data-category="web development">
                    <a :href="item.link">

                        <figure class="project-img">
                            <div class="project-item-icon-box">
                                <!-- <ion-icon name="eye-outline"></ion-icon> -->
                                {{ item.week.toUpperCase() }}
                            </div>
                            <img :src="'/weekly/' + new Date(item.date).getFullYear() + '/' + item.week.toLowerCase() + '.jpg' " loading="lazy" />
                        </figure>

                        
                        <h3 class="project-title">{{ item.title }}</h3>

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

const props = defineProps({
    config: Object,
    weekly: Object
})
</script>