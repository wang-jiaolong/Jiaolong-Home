
<template>
 

 <a :href="url" target="_blank">
    <div class="card">
        <div class="info">
            <div class="left">
                <p class="title">{{ title }}</p>
                <p class="url">{{ url }}</p>

            </div>
            <div class="right">
                <img class="icon" :src="'/images/icon/' + icon + '.png'" />
            </div>
           
           
        </div>
    </div>
</a>


</template>

<script setup>

const props = defineProps({
    title:Object,
    url:Object,
    icon:Object
})

</script>


<style scoped lang="less">

a {
    text-decoration: none;
    color: inherit;
}

.card {

    p {
        margin: 0px;
        line-height: unset;
    }

    margin: 30px 0px;
    padding: 12px 15px;
    border: 1px solid var(--vp-c-divider);
    transition: 0.15s; /* 添加过渡效果 */
    border-radius: 8px;



    @media(max-width: 600px) {
        margin: 20px 0px;
        padding: 10px 15px;

                }
    .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 2; /* 让文本内容自动占据剩余空间 */

        .left {

            .title {
                color: var(--vp-c-brand-1);

                @media(max-width: 600px) {
                    font-size: 15px;
                }
            }

            .url {
                width: 300px;
                flex: 1;
                overflow: hidden; /* 当文本溢出时隐藏 */
                white-space: nowrap; /* 防止文本换行 */
                text-overflow: ellipsis; /* 显示省略号 */
                color: var(--vp-c-text-2);
                font-size: 12px;

                @media(max-width: 600px) {
                    width: 180px;
                }
            }
        }
        .right {
            // flex: 1; /* 让文本内容自动占据剩余空间 */
        }
        .icon {
            width: 40px;
            height: 40px;
            border-radius: 5px;
        }
    }
}

.card:hover {
    border: 1px solid var(--vp-c-text-2); /* 2 像素宽的黑色实线边框 */
    transition: 0.15s; /* 添加过渡效果 */
}

</style>