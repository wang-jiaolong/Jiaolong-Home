
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

.service {
    margin-bottom: 40px;
}

.service-title {
    margin-bottom: 20px;
}

.service-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

.service-item {
    position: relative;
    background: var(--border-gradient-onyx);
    padding: 20px;
    border-radius: 14px;
    box-shadow: var(--shadow-2);
    z-index: 1;
}

.service-item::before {
    content: "";
    position: absolute;
    inset: 1px;
    background: var(--bg-gradient-jet);
    border-radius: inherit;
    z-index: -1;
}

.service-icon-box {
    margin-bottom: 10px;
}

.service-icon-box img {
    margin: auto;
}

.service-content-box {
    text-align: center;
}

.service-item-title {
    margin-bottom: 7px;
}

.service-item-text {
    color: var(--light-gray);
    font-size: var(--fs-6);
    font-weight: var(--fw-3);
    line-height: 1.6;
}

</style>
