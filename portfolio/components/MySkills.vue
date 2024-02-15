<template>
<section class="skill">
  
  <h3 class="h3 skills-title">My skills</h3>

  <ul class="skills-list content-card">

    <li v-for="item in items" class="skills-item">

      <div class="title-wrapper">
        <h5 class="h5">{{ item.title }}</h5>
        <data :value="item.value">{{ item.value }}%</data>
      </div>

      <div class="skill-progress-bg">
        <div class="skill-progress-fill" :style="{ width: item.value + '%' }"></div>
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

