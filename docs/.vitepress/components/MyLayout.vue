<template>
    
    <div v-if="frontmatter.layout === 'doc'">
        <Layout />

    </div>

    <div v-else>
        <Layout>
            <template #doc-before>
                <div class="weekly-title">
                    <div class="title">
                        <div class="text">{{ page.title }}</div>
                    </div>
                    <div class="info">
                        <Badge type="tip" :text="new Date(frontmatter.date).toLocaleDateString()" />
                        <Badge v-if="frontmatter.week" type="tip" :text="frontmatter.week" />
                        <!-- <div id="word-count">字数统计：Loading...</div> -->
                    </div>
                </div>
                
            </template>
        </Layout>

    </div>
</template>

<script setup>
import DefaultTheme from "vitepress/theme";
import { useData } from 'vitepress'
import { onMounted } from 'vue';

const { Layout } = DefaultTheme;
const { page, frontmatter } = useData()

defineProps(["frontmatter"]);

const countWords = () => {
    const content = document.querySelector(".vp-doc");
    if (content) {
        // 去除 HTML 标签后再进行字数统计
        const textWithoutHtml = content.textContent.replace(/<[^>]*>/g, "");
        const wordCount = textWithoutHtml.split(/\s+/).filter(word => word.length > 0).length;

        const wordCountContainer = document.getElementById("word-count");
        if (wordCountContainer) {
          wordCountContainer.textContent = `字数统计：${wordCount} 字`;
        } else {
          console.error("Word count container not found!");
        }
      } else {
        console.error("Content element not found!");
      }
};
// onMounted(() => {
//     countWords();
// });



</script>



<style scoped lang="less">
.weekly-title {


    .title {
        display: flex;
        align-items: flex-start;
        .text{
            letter-spacing: -0.02em;
        line-height: 40px;
        font-size: 32px;
        font-weight: bold;
        }
        
    }


    .info {
        margin-top: 8px;
    }

}
</style>