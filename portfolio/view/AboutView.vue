<template>
    <!--
      - #ABOUT
    -->

    <article :class="config.active == 'about' ? 'about active' : 'about'" data-page="about">

        <header>
            <h2 class="h2 article-title">About me</h2>
        </header>

        <section class="about-text">
            <p v-html="config.content.about"></p>
        </section>

        <!--
    - service
  -->

        <Doing :items="config.content.doings"></Doing>

        <Testimonials :items = "config.content.projects"></Testimonials>

        <MySkills :items="config.content.progress"></MySkills>

        <!-- <Products :items = "config.content.apps"></Products> -->

        <!--
    - clients
  -->



    </article>
</template>

<script setup>

import MySkills from "../components/MySkills.vue"
import Doing from "../components/Doing.vue"
import Testimonials from "../components/Testimonials.vue"
import Products from "../components/Products.vue"


const props = defineProps({
    config: Object
})
</script>