<template>
        <article :class="config.active == 'timeline' ? 'about active' : 'timeline'" data-page="timeline">

<header>
    <h2 class="h2 article-title">About me</h2>
</header>

<Timeline></Timeline>


</article>
</template>

<script setup>

import Timeline from "../components/Timeline.vue"


const props = defineProps({
    config: Object
})

</script>
