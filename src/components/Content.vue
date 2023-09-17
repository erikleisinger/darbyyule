<template>
  <section class="content__section full-width">
    <header class="header">
      <h1 class="splash--h1" id="content-h1">Content</h1>
      <h2 class="splash--h2" id="content-h2">These are my case studies.</h2>
    </header>
    <main class="full-width main">
      <div class="teaser-wrap" id="portfolio1">
        <portfolio-item :name="SECTION_NAMES.COUNSELLING" odd />
      </div>
      <div class="teaser-wrap" id="portfolio2">
        <portfolio-item :name="SECTION_NAMES.DARKHORSE" />
      </div>
      <div class="teaser-wrap" id="portfolio3">
        <portfolio-item :name="SECTION_NAMES.FOODHUB" odd />
      </div>
      <div class="teaser-wrap" id="portfolio4">
        <portfolio-item :name="SECTION_NAMES.CONTENT" />
      </div>
    </main>
    <content-footer v-if="!isXs"/>
    <div v-else class="hero-arrow__container">
      <hero-arrow-up class="arrow-up" @click="emit('scrollUp')"/>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.content__section {
  margin: auto;
  margin-top: calcDimensionXs(109px);
  @include sm {
    width: calcDimension(1274px);
    margin-top: unset;
  }
  box-sizing: border-box;
}
.main {
  display: grid;

  @include md {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
  column-gap: calcDimension(31.2px);
  row-gap: var(--space-md);
}
.teaser-wrap {
  width: 100%;
  box-sizing: border-box;
}
.header {

  @include xs {
  margin-left: calcDimensionXs(16px);
  }
  .splash--h1 {
    font-size: calcDimensionXs(50.558px);
    font-family: $font-title;
    @include sm {
      font-size: calcDimension(166.205px);
    }
  }
  .splash--h2 {
    font-family: $font-subtitle;
     color: #9E5170;

    margin-top: calcDimensionXs(-7px);
    font-size: calcDimensionXs(24.405px);
    margin-bottom: calcDimensionXs(24px);
   
     @include sm {
      font-size: calcDimension(71.744px);
          margin-bottom: calcDimension(75px);
    }
  }

}
  .hero-arrow__container {
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-top: calcDimensionXs(60px);
    .arrow-up {
      cursor: pointer;
      height: calcDimensionXs(28px);
      width: calcDimensionXs(48px);

    }

  }
</style>
<script setup>
import { SECTION_NAMES } from '../constants/content'
import {useScreen} from '@/composables/screen'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import ContentFooter from './ContentFooter.vue'
import PortfolioItem from './PortfolioItem/index.vue'
import HeroArrowUp from './icons/HeroArrowUp.vue'
import { onMounted } from 'vue'

const {isXs} = useScreen();

const emit = defineEmits(['scrollUp'])

onMounted(() => {
  gsap.from('#content-h1', {
    x: -50,
    opacity: 0,
    duration: 1,
    ease: 'sine',
    scrollTrigger: {
      trigger: '#content-h1',
      scroller: '.main-content',
      start: 'bottom bottom'
    }
  })

  gsap.from('#content-h2', {
    x: 50,
    opacity: 0,
    transformOrigin: 'top',
    ease: 'sine',
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
      trigger: '#content-h2',
      scroller: '.main-content',
      start: 'bottom bottom'
    }
  })
})
</script>
