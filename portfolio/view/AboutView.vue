<template>
    <!--
      - #ABOUT
    -->

    <article :class="config.active == 'about' ? 'about active' : 'about'" data-page="about">

        <header>
            <h2 class="h2 article-title">About me</h2>
        </header>

        <section class="about-text">
            <div :class="['about-content', { 'collapsed': !isExpanded }]">
                <p v-html="config.content.about"></p>
            </div>
            <button :class="['toggle-btn', { 'expanded': isExpanded }]" @click="toggleExpand">
                {{ isExpanded ? '收起' : '展开' }}
            </button>
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
import { ref } from 'vue'
import MySkills from "../components/MySkills.vue"
import Doing from "../components/Doing.vue"
import Testimonials from "../components/Testimonials.vue"
import Products from "../components/Products.vue"
import Clients from "../components/Clients.vue"
import OKRs from "../components/OKRs.vue"

const isExpanded = ref(false)

const toggleExpand = () => {
    isExpanded.value = !isExpanded.value
}

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

.about-content {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    position: relative;
    
    &.collapsed {
        max-height: 200px;
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100px;
            background: linear-gradient(to bottom, transparent, var(--eerie-black-1));
            pointer-events: none;
        }
    }
}

.toggle-btn {
    background: var(--border-gradient-onyx);
    border: 1px solid var(--onyx);
    border-radius: 14px;
    padding: 8px 16px;
    color: var(--light-gray);
    font-size: var(--fs-6);
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 15px 0 0 auto;
    min-width: 100px;
    justify-content: center;

    &::after {
        content: '';
        width: 8px;
        height: 8px;
        border-right: 2px solid currentColor;
        border-bottom: 2px solid currentColor;
        transform: rotate(45deg);
        transition: transform 0.3s ease;
    }

    &:hover {
        background: var(--orange-sienna);
        color: var(--white-2);
    }

    &.expanded::after {
        transform: rotate(-135deg);
    }
}

</style>