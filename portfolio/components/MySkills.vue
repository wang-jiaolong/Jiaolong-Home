<template>
  <section v-for="item in items" class="skill">

    <h3 class="h3 skills-title">{{ item.title }}</h3>

    <ul class="skills-list content-card">

      <li v-for="cell in item.items" class="skills-item">

        <div class="title-wrapper">
          <div class="leader">
            <h5 class="h5">{{ cell.title }}</h5>
            <data :value="cell.value">{{ cell.value }}%</data>
          </div>
          <div class="trailing">{{ cell.date }}</div>

        </div>
        <div class="skill-progress-bg">
          <div class="skill-progress-fill" :style="{ width: cell.value + '%' }"></div>
        </div>

        <!-- <div class="subSkill">
          <div v-for="subItem in cell.subItems" class="subSkill-item">
            <h5 class="h5">{{ subItem.title }}</h5>
            <div class="skill-progress-bg">
              <div class="skill-progress-fill" :style="{ width: subItem.value + '%' }"></div>
            </div>
          </div>

        </div> -->
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
.skill {
  margin-bottom: 40px;
}

.skills-title { margin-bottom: 20px; }

.skills-list { padding: 20px; }


.skills-item:not(:last-child) { margin-bottom: 15px; }

.skill .title-wrapper {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 8px;
}

.skill .title-wrapper data {
  color: var(--light-gray);
  font-size: var(--fs-7);
  font-weight: var(--fw-300);
}

.skill-progress-bg {
  background: var(--jet);
  width: 100%;
  height: 8px;
  border-radius: 10px;
}

.skill-progress-fill {
  background: var(--text-gradient-yellow);
  height: 100%;
  border-radius: inherit;
}



.title-wrapper {
  .leader {
    display: flex;
    gap: 5px;

  }

  .trailing {
    font-size: var(--fs-7);
  }

  justify-content: space-between;
}

.subSkill-item {
  display: flex;
}
</style>