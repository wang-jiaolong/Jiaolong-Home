<template>
    <!--
      - #ABOUT
    -->

    <article :class="config.active == 'about' ? 'about active' : 'about'" data-page="about">

        <header>
            <h2 class="h2 article-title">About me</h2>
        </header>

        <section class="about-text">
            {{ config.content.about }}
        </section>


        <!--
    - service
  -->


        <Doing :doings="config.content.doings"></Doing>

        <MySkills :skills="config.content.skills"></MySkills>


        <!--
    - clients
  -->



    </article>
</template>

<script setup>

import MySkills from "../components/MySkills.vue"
import Doing from "../components/Doing.vue"

const props = defineProps({
    config: Object
})
</script>