<template>
    <!--
    - testimonials
  -->

    <section class="testimonials">

        <h3 class="h3 testimonials-title">Projects</h3>

        <ul class="testimonials-list has-scrollbar">

            <li v-for="item in items" class="testimonials-item">
                <div class="content-card" data-testimonials-item>

                    <!-- <figure class="testimonials-avatar-box">
                
            </figure> -->



                    <div class="firstLine">
                        <img :src="item.icon" alt="Daniel lewis" data-testimonials-avatar />

                        <div class="label">
                            <span class="light">
                                <span class="bigDot"></span>
                                <span class="lightDot"></span>
                            </span>
                            <span class="text">{{ item.label }}</span>
                        </div>

                    </div>

                    <p class="testimonials-item-title" data-testimonials-title>{{ item.title }}
                        <Badge type="tip" :text="item.badge" />
                    </p>

                    <div class="testimonials-text" data-testimonials-text>
                        <p>{{ item.description }}</p>
                    </div>

                </div>
            </li>

        </ul>

    </section>


    <!--
    - testimonials modal
  -->

    <div class="modal-container" data-modal-container>

        <div class="overlay" data-overlay></div>

        <!-- <section class="testimonials-modal">

    <button class="modal-close-btn" data-modal-close-btn>
        <ion-icon name="close-outline"></ion-icon>
    </button>

    <div class="modal-img-wrapper">
        <figure class="modal-avatar-box">
            <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="80" data-modal-img>
        </figure>

        <img src="./assets/images/icon-quote.svg" alt="quote icon">
    </div>

    <div class="modal-content">

        <h4 class="h3 modal-title" data-modal-title>Daniel lewis</h4>

        <time datetime="2021-06-14">14 June, 2021</time>

        <div data-modal-text>
            <p>
                Richard was hired to create a corporate identity. We were very pleased with the work done. She
                has a
                lot of experience
                and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                consectetur adipiscing
                elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
            </p>
        </div>

    </div>

</section> -->

    </div>
</template>

<script setup>

const props = defineProps({
    items: Object
})
</script>


<style lang="less">

.testimonials {
    margin-bottom: 40px;
}

.testimonials-title {
    margin-bottom: 20px;
}

.testimonials-list {
    display: grid;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    // margin: 0 -15px;
    // padding: 25px 15px;
    // padding-bottom: 35px;
    overflow-x: auto;
    scroll-behavior: smooth;
    overscroll-behavior-inline: contain;
    scroll-snap-type: inline mandatory;
    grid-template-columns: 1fr 1fr;

    @media(max-width: 600px) {
        grid-template-columns: 1fr;
    }
}


.testimonials-item {
    min-width: 100%;
    scroll-snap-align: center;
}

.testimonials-avatar-box {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(20px, -15px);
    background: var(--bg-gradient-onyx);
    border-radius: 14px;
    box-shadow: var(--shadow-1);
}



.testimonials-text {
    color: var(--light-gray);
    font-size: var(--fs-6);
    font-weight: var(--fw-400);
    line-height: 1.6;
    display: -webkit-box;
    line-clamp: 4;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
}


.content-card {
    position: relative;
    background: var(--border-gradient-onyx);
    padding: 20px;
    border-radius: 14px;
    box-shadow: var(--shadow-2);
    cursor: pointer;
    z-index: 1;

    .testimonials-item-title {
        margin-bottom: 7px;
        font-weight: var(--fw-600);
    }

}

.content-card::before {
    content: "";
    position: absolute;
    inset: 1px;
    background: var(--bg-gradient-jet);
    border-radius: inherit;
    z-index: -1;
}

.content-card {
    .lightDot {
        height: 0.65rem;
        width: 0.65rem;
        background-color: rgb(34 197 94 / 1);
        border-radius: 99px;
        display: inline-flex;
    }

    .label {
        display: flex;
        align-items: center;
        gap: 8px;


        .light {
            position: relative;
            display: flex;
            height: 0.7rem;
            width: 0.7rem;
            align-items: center;
            justify-content: center;

            .bigDot {
                height: 100%;
                width: 100%;
                opacity: .75;
                background-color: rgb(34 197 94 / 0.8);
                border-radius: 99px;
                animation: ping 1.5s cubic-bezier(0, 0, .2, 1) infinite;
                position: absolute;
            }
        }

        .text {
            color: rgb(34 197 94 / 0.7);
            font-size: var(--fs-7);
            font-weight: bold;
        }
    }
}

.content-card img {
    width: 50px;
    border-radius: 10px;
    // margin: auto;
}

.firstLine {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 15px;
}

@keyframes ping {
    0% {
        transform: scale(1);
        opacity: 1
    }

    75%,
    to {
        transform: scale(2);
        opacity: 0
    }
}
</style>