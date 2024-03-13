<template>
      <section class="timeline">
  
  <div class="title-wrapper">
    <div class="icon-box">
      <ion-icon name="book-outline"></ion-icon>
    </div>

    <h3 class="h3">OKRs</h3>
  </div>

  <ol class="timeline-list">

    <li v-for="item in items" class="timeline-item">

      <h4 class="h4 timeline-item-title">{{ item.title }}</h4>

      <span>{{ item.date }}</span>


      <div class="skill-progress-bg">
          <div class="skill-progress-fill" :style="{ width: item.value + '%' }"></div>
        </div>
      <p class="timeline-text">
        Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
        quas molestias
        exceptur.
      </p>

    </li>

  </ol>

</section>

</template>
  
  <script setup>
  
  const props = defineProps({
    items: Object
  })
  
  </script>
  
  
  <style lang="less">

  </style>