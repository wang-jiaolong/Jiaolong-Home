<template>
    <section class="clients has-scrollbar">

        <h3 class="h3 clients-title">Reading List</h3>

        <ul class="clients-list">

            <li v-for="item in items" class="clients-item">
                <a href="#">
                    <img :src="item.img" alt="client logo">
                </a>
                <!-- <h5 class="book-title">解密Instagram</h5> -->

                <div class="progress">
                    <div class="skill-progress-bg">
                        <div class="skill-progress-fill" :style="{ width: item.value + '%' }"></div>
                    </div>
                    <data value="cell.value">{{ 10 }}%</data>
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
.book-title {
    font-size: var(--fs-8);
    font-weight: var(--fw-600);
    padding: 5px 0px;
}

.clients {
    .skill-progress-bg {
        margin: 10px 0px;
        height: 6px;
    }

    .progress {
        display: flex;
        justify-content: center;
    }

    data {
        display: none;
        font-size: var(--fs-8);
        font-weight: var(--fw-600);
        padding-left: 5px;
    }
}


</style>