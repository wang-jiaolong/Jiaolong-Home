<template>

  <aside class="sidebar" :class="{active: infoActive}" data-sidebar>
  
  <div class="sidebar-info">

    <figure class="avatar-box">
      <img :src="info.avatar" :alt="info.name" width="80">
    </figure>

    <div class="info-content">
      <h1 class="name" title="Richard hanrick">{{ info.name }}</h1>

      <p class="title">{{ info.content }}</p>
    </div>

    <button @click="changeActive()" class="info_more-btn" data-sidebar-btn>
      <span>Show Contacts</span>
      <img src="/svg/arrow_down.svg" width="18">
    </button>

  </div>

  <div class="sidebar-info_more">

    <div class="separator"></div>

    <ul class="contacts-list">

      <li class="contact-item">

        <div class="icon-box">
          <ion-icon name="mail-outline"></ion-icon>
          <img src="/svg/email.svg" width="18">

        </div>

        <div class="contact-info">
          <p class="contact-title">Email</p>

          <a :href="info.content" class="contact-link">{{ info.email }}</a>
        </div>

      </li>

      <li v-if="info.phone" class="contact-item">

        <div class="icon-box">
          <img src="/svg/location.svg" width="18">
        </div>

        <div class="contact-info">
          <p class="contact-title">Phone</p>

          <a class="contact-link">{{ info.phone }}</a>
        </div>

      </li>

      <li v-if="info.birthday" class="contact-item">

        <div class="icon-box">
          <ion-icon name="calendar-outline"></ion-icon>
        </div>

        <div class="contact-info">
          <p class="contact-title">Birthday</p>

          <time :datetime="info.birthday">{{ info.birthday }}</time>
        </div>

      </li>

      <li v-if="info.location" class="contact-item">

        <div class="icon-box">
          <img src="/svg/location.svg" width="18">
        </div>

        <div class="contact-info">
          <p class="contact-title">Location</p>

          <address>{{ info.location }}</address>
        </div>

      </li>

    </ul>

    <div class="separator"></div>

    <ul class="social-list">

      <li v-for="item in info.socials" class="social-item">
        <a target="_blank" :href="item.url" class="social-link">
                              <img class="mediaIcon" :title="item.title" :src="item.icon" />
                  </a>
      </li>


    </ul>

  </div>

</aside>

</template>

<script setup>
import { ref } from 'vue';

var infoActive = ref(false)

const props = defineProps({
  info: Object,
})

function changeActive() {
  infoActive.value = !infoActive.value
}

</script>


<style lang="less">
.contact-info {
  font-weight: var(--fw-600);
  font-size: var(--fs-8);
}

</style>