<template>
    <div class="product">
        <section class="clients">
            <h3 class="h3 clients-title">Favorite Products</h3>
            <ul class="clients-list has-scrollbar">
                <div v-for="group in items" class="content-card">
                    <h4 class="h4" data-testimonials-title>{{ group.title }}</h4>
                    <div class="testimonials-text" data-testimonials-text>
                        <ul class="clients-list has-scrollbar">

                            <li v-for="item in group.items" class="apps-item">
                                <a :href="item.url">
                                    <img :src="item.icon" :alt="item.title">
                                </a>
                            </li>
                        </ul>

                    </div>

                </div>
            </ul>
        </section>
    </div>
</template>


<script setup>

const props = defineProps({
    items: Object
})

</script>


<style lang="less">
.apps-item img {
    width: 50px;
    border-radius: 10px;
}

.product .clients-list {
    margin: unset;
    padding: unset;
}

.testimonials-text {
    .clients-list {
        gap: 15px;
        scroll-padding-inline: 45px;
    }
}


.clients-title {
    margin-bottom: 20px;
}

.content-card {
    padding-top: 20px;

    h4 {
        margin-top: -5px;
        padding-bottom: 10px;
    }
}

.h4 {
    font-weight: 600 !important;
    font-size: var(--fs-6) !important;
}
</style>