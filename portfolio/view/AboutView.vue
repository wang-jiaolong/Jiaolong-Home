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

        <Testimonials :items="config.content.projects"></Testimonials>


        <!-- <OKRs :items="config.content.okrs"></OKRs> -->

        <MySkills :items="config.content.progress"></MySkills>

        <Products :items="config.content.apps"></Products>



        <!-- <Clients :items="config.content.books"></Clients> -->

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
import Clients from "../components/Clients.vue"
import OKRs from "../components/OKRs.vue"


const props = defineProps({
    config: Object
})
</script>

<style lang="less">

.about-text {
    margin-bottom: 40px;
    color: var(--light-gray);
    font-size: var(--fs-6);
    font-weight: var(--fw-400);
    padding-top: 10px;
}

.about-text p {
    margin-bottom: 15px;
    line-height: 2;
}

</style>