<template>
    <!--
      - #PORTFOLIO
    -->
    <article :class="config.active == 'photos' ? 'photos active' : 'photos'" data-page="photos">
 
  
  <header>
    <h2 class="h2 article-title">Contact</h2>
  </header>

  <section class="mapbox" data-mapbox>
    <figure>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
        width="400" height="300" loading="lazy"></iframe>
    </figure>
  </section>

  <section class="contact-form">

    <h3 class="h3 form-title">Contact Form</h3>

    <form action="#" class="form" data-form>

      <div class="input-wrapper">
        <input type="text" name="fullname" class="form-input" placeholder="Full name" required data-form-input>

        <input type="email" name="email" class="form-input" placeholder="Email address" required data-form-input>
      </div>

      <textarea name="message" class="form-input" placeholder="Your Message" required data-form-input></textarea>

      <button class="form-btn" type="submit" disabled data-form-btn>
        <ion-icon name="paper-plane"></ion-icon>
        <span>Send Message</span>
      </button>

    </form>

  </section>

</article>

</template>

<script setup>

import { useData } from 'vitepress'
const { theme, page, frontmatter } = useData()
import { ref } from 'vue';

var currentYear = ref(0)

function changeIndex(index) {
    currentYear.value = index
}


function getWeekNumber() {
    // Copy date so don't modify original
    var date = new Date();
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
    return weekNo;
  }

var heatMap = ref([])


// initHeatMap()

const props = defineProps({
    config: Object,
    weekly: Object
})
</script>

<style lang="less">
.heatmap {
    .cell-list {
        display: flex;
        gap:5px;
        padding-bottom: 15px;
        align-items: center;

        .cell {
            width: 15px;
            height: 15px;
            background: linear-gradient(to right, hsl(45, 100%, 72%), hsl(35, 100%, 68%));
            border-radius: 3px;
        }
    }
}
</style>