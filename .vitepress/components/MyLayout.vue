<template>
    
    <div v-if="frontmatter.layout === 'doc'">
        <Layout />

    </div>

    <div v-else>
        <Layout>
            <template #doc-before>
                <div class="weekly-title">
                    <div class="title">
                        <div class="text">{{  getFileNameWithoutExtension(page.filePath).toUpperCase() + '｜' + page.title }}</div>
                    </div>
                    <div class="info">
                        <Badge type="tip" :text="new Date(frontmatter.date).toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '/')" />
                        <Badge v-if="frontmatter.week" type="tip" :text="frontmatter.week" />
                        <!-- <div id="word-count">字数统计：Loading...</div> -->
                    </div>
                    <!-- <img :src=" '../../../../weekly/' + new Date(frontmatter.date).getFullYear() + '/' + getFileNameWithoutExtension(page.filePath) + '.jpg'" /> -->

                </div>

            </template>

            <template #doc-after>
                <div v-if="frontmatter.vxUrl">
                    <p style="font-weight: bold;">本文同步发布于：</p>
                    <LinkCard 
                        :title="getFileNameWithoutExtension(page.filePath).toUpperCase() + '｜' + page.title" 
                        :url="frontmatter.vxUrl" 
                        icon="gzh"/>
                </div>
                <br>

                🪧 广告时间
                <LinkCard title="事线 - 串事成线"  url="https://apps.apple.com/cn/app/eventline-threads-of-events/id1662454742?l=en-GB" icon="eventline" />

            </template>

        </Layout>

    </div>
</template>

<script setup>
import DefaultTheme from "vitepress/theme";
import { useData } from 'vitepress'
import { onMounted } from 'vue';
import path from 'path'
import LinkCard from "./LinkCard.vue";

const { Layout } = DefaultTheme;
const { page, frontmatter } = useData()

defineProps(["frontmatter"]);

</script>


<script>
export default {
  methods: {
    getFileNameWithoutExtension(filePath) {
      // 使用 split() 方法根据斜杠或反斜杠分割路径，选择数组中的最后一个元素作为文件名
      let fileNameWithExtension = filePath.split('/').pop();

      // 使用 split() 方法根据点号分割文件名，选择数组中的第一个元素作为没有后缀的文件名
      let fileNameWithoutExtension = fileNameWithExtension.split('.')[0];

      // 返回文件名（不包含后缀）
      return fileNameWithoutExtension;
    }
  }
};
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

        @media (max-width: 768px) {
            font-size: 24px;
        }
        }
        
    }


    .info {
        margin-top: 10px;
    }

    img {
        margin-top: 10px;
        border-radius: 10px;
    }

}

</style>