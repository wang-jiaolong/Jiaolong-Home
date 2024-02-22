
<template>
    <section class="service">

        <h3 class="h3 service-title">What i'm doing</h3>

        <ul class="service-list">

            <li v-for="item in items" class="service-item">

                <div class="service-icon-box">
                    <img :src="item.icon" :alt="item.title" width="40">
                </div>

                <div class="service-content-box">
                    <h4 class="service-item-title">{{ item.title }}</h4>

                    <p class="service-item-text">{{ item.description }}</p>
                </div>

            </li>

        </ul>

    </section>
</template>

<script setup>

const props = defineProps({
    items: Object
})

</script>


<style lang="less">
.service-item-title {
    font-weight: var(--fw-600);
}

</style>