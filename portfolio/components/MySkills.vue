<template>
<section v-for="item in items" class="skill">
  
  <h3 class="h3 skills-title">{{ item.title }}</h3>

  <ul class="skills-list content-card">

    <li v-for="cell in item.items" class="skills-item">

      <div class="title-wrapper">
        <h5 class="h5">{{ cell.title }}</h5>
        <data :value="cell.value">{{ cell.value }}%</data>
      </div>

      <div class="skill-progress-bg">
        <div class="skill-progress-fill" :style="{ width: cell.value + '%' }"></div>
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

