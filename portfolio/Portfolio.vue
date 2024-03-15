<template>

  <div class="portfolio">
  
      <main>
  
  <!--
    - #SIDEBAR
  -->

  
  <Sidebar :info="info"></Sidebar>
  
  
  <!--
    - #main-content
  -->
  
  <div class="main-content">
  
    <!--
      - #NAVBAR
    -->
  
    <nav class="navbar">
  
      <ul class="navbar-list">
  
        <li class="navbar-item">
          <a href="./index" :class="config.active == 'about' ? 'navbar-link active' : 'navbar-link'" class="" data-nav-link>About</a>
        </li>
  
        <li class="navbar-item">
          <a href="./weekly" :class="config.active == 'weekly' ? 'navbar-link active' : 'navbar-link'" class="" data-nav-link>Weekly</a>
        </li>
<!-- 
        <li class="navbar-item">
          <a href="./timeline" :class="config.active == 'timeline' ? 'navbar-link active' : 'navbar-link'" class="" data-nav-link>Timeline</a>
        </li>
   -->
  
        <!-- <li class="navbar-item">
          <a href="./photos" :class="config.active == 'photos' ? 'navbar-link active' : 'navbar-link'" class="" data-nav-link>Photos</a>
        </li>
   -->
        <!-- <li class="navbar-item">
          <button class="navbar-link" data-nav-link>Portfolio</button>
        </li>
  
        <li class="navbar-item">
          <button class="navbar-link" data-nav-link>Blog</button>
        </li>
  
        <li class="navbar-item">
          <button class="navbar-link" data-nav-link>Contact</button>
        </li> -->
  
      </ul>
  
    </nav>
  
  
 
  
    <!--
      - #RESUME
    -->
  
    <article class="resume" data-page="resume">
  
      <header>
        <h2 class="h2 article-title">Resume</h2>
      </header>
  
      <section class="timeline">
  
        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
  
          <h3 class="h3">Education</h3>
        </div>
  
        <ol class="timeline-list">
  
          <li class="timeline-item">
  
            <h4 class="h4 timeline-item-title">University school of the arts</h4>
  
            <span>2007 — 2008</span>
  
            <p class="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
              quas molestias
              exceptur.
            </p>
  
          </li>
  
          <li class="timeline-item">
  
            <h4 class="h4 timeline-item-title">New york academy of art</h4>
  
            <span>2006 — 2007</span>
  
            <p class="timeline-text">
              Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est
              omnis..
            </p>
  
          </li>
  
          <li class="timeline-item">
  
            <h4 class="h4 timeline-item-title">High school of art and design</h4>
  
            <span>2002 — 2004</span>
  
            <p class="timeline-text">
              Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur
              magni dolores
              eos.
            </p>
  
          </li>
  
        </ol>
  
      </section>
  
      <section class="timeline">
  
        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
  
          <h3 class="h3">Experience</h3>
        </div>
  
        <ol class="timeline-list">
  
          <li class="timeline-item">
  
            <h4 class="h4 timeline-item-title">Creative director</h4>
  
            <span>2015 — Present</span>
  
            <p class="timeline-text">
              Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas
              molestias
              exceptur.
            </p>
  
          </li>
  
          <li class="timeline-item">
  
            <h4 class="h4 timeline-item-title">Art director</h4>
  
            <span>2013 — 2015</span>
  
            <p class="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
              quas molestias
              exceptur.
            </p>
  
          </li>
  
          <li class="timeline-item">
  
            <h4 class="h4 timeline-item-title">Web designer</h4>
  
            <span>2010 — 2013</span>
  
            <p class="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
              quas molestias
              exceptur.
            </p>
  
          </li>
  
        </ol>
  
      </section>
  

  
    </article>
  
    <About :config="config"></About>

    <Weekly :config="config"></Weekly>

    <Photos :config="config"></Photos>

    <Timeline :config="config"></Timeline>

    <!--
      - #BLOG
    -->
  
    <article class="blog" data-page="blog">
  
      <header>
        <h2 class="h2 article-title">Blog</h2>
      </header>
  
      <!-- <section class="blog-posts">
  
        <ul class="blog-posts-list">
  
          <li class="blog-post-item">
            <a href="#">
  
              <figure class="blog-banner-box">
                <img src="./images/blog-1.jpg" alt="Design conferences in 2022" loading="lazy">
              </figure>
  
              <div class="blog-content">
  
                <div class="blog-meta">
                  <p class="blog-category">Design</p>
  
                  <span class="dot"></span>
  
                  <time datetime="2022-02-23">Fab 23, 2022</time>
                </div>
  
                <h3 class="h3 blog-item-title">Design conferences in 2022</h3>
  
                <p class="blog-text">
                  Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                </p>
  
              </div>
  
            </a>
          </li>
  
          <li class="blog-post-item">
            <a href="#">
  
              <figure class="blog-banner-box">
                <img src="./assets/images/blog-2.jpg" alt="Best fonts every designer" loading="lazy">
              </figure>
  
              <div class="blog-content">
  
                <div class="blog-meta">
                  <p class="blog-category">Design</p>
  
                  <span class="dot"></span>
  
                  <time datetime="2022-02-23">Fab 23, 2022</time>
                </div>
  
                <h3 class="h3 blog-item-title">Best fonts every designer</h3>
  
                <p class="blog-text">
                  Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.
                </p>
  
              </div>
  
            </a>
          </li>
  
          <li class="blog-post-item">
            <a href="#">
  
              <figure class="blog-banner-box">
                <img src="./assets/images/blog-3.jpg" alt="Design digest #80" loading="lazy">
              </figure>
  
              <div class="blog-content">
  
                <div class="blog-meta">
                  <p class="blog-category">Design</p>
  
                  <span class="dot"></span>
  
                  <time datetime="2022-02-23">Fab 23, 2022</time>
                </div>
  
                <h3 class="h3 blog-item-title">Design digest #80</h3>
  
                <p class="blog-text">
                  Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.
                </p>
  
              </div>
  
            </a>
          </li>
  
          <li class="blog-post-item">
            <a href="#">
  
              <figure class="blog-banner-box">
                <img src="./assets/images/blog-4.jpg" alt="UI interactions of the week" loading="lazy">
              </figure>
  
              <div class="blog-content">
  
                <div class="blog-meta">
                  <p class="blog-category">Design</p>
  
                  <span class="dot"></span>
  
                  <time datetime="2022-02-23">Fab 23, 2022</time>
                </div>
  
                <h3 class="h3 blog-item-title">UI interactions of the week</h3>
  
                <p class="blog-text">
                  Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.
                </p>
  
              </div>
  
            </a>
          </li>
  
          <li class="blog-post-item">
            <a href="#">
  
              <figure class="blog-banner-box">
                <img src="./assets/images/blog-5.jpg" alt="The forgotten art of spacing" loading="lazy">
              </figure>
  
              <div class="blog-content">
  
                <div class="blog-meta">
                  <p class="blog-category">Design</p>
  
                  <span class="dot"></span>
  
                  <time datetime="2022-02-23">Fab 23, 2022</time>
                </div>
  
                <h3 class="h3 blog-item-title">The forgotten art of spacing</h3>
  
                <p class="blog-text">
                  Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
  
              </div>
  
            </a>
          </li>
  
          <li class="blog-post-item">
            <a href="#">
  
              <figure class="blog-banner-box">
                <img src="./assets/images/blog-6.jpg" alt="Design digest #79" loading="lazy">
              </figure>
  
              <div class="blog-content">
  
                <div class="blog-meta">
                  <p class="blog-category">Design</p>
  
                  <span class="dot"></span>
  
                  <time datetime="2022-02-23">Fab 23, 2022</time>
                </div>
  
                <h3 class="h3 blog-item-title">Design digest #79</h3>
  
                <p class="blog-text">
                  Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.
                </p>
  
              </div>
  
            </a>
          </li>
  
        </ul>
  
      </section> -->
  
    </article>
  
  
  
  
  
    <!--
      - #CONTACT
    -->
  
  </div>
  
  </main>
  </div>
  
  
  </template>
  
  <style>
  /* 导入并使用外部的 CSS 文件 */
  @import './assets/css/style.less';
</style>

<script setup>

import Weekly from "./view/WeeklyView.vue"
import About from "./view/AboutView.vue"
import Photos from "./view/PhotosView.vue"
import Timeline from "./view/TimelineView.vue"
import Sidebar from "./view/SidebarView.vue"

// import * as ioniconsESM from './assets/js/ioniicons.js';

const props = defineProps({
  info: Object,
  config: Object
})

</script>

