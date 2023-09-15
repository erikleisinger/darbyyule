<template>
  <div
    class="portfolio-teaser__wrap"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
    ref="portfolioItem"
    :class="{ hoverable: animationDone }"
  >
    <h3
      class="teaser-header"
      ref="titleRef"
      data-flip-id="header"
      :id="`teaser-header-${identifier}`"
    >
      <span class="title--wrap">{{ title }}</span>
    </h3>
    <div
      class="background"
      :style="{ filter: hovered ? '' : 'grayscale(100%)', background: `url(${img})` }"
      data-flip-id="image"
      :id="`teaser-image-${identifier}`"
    ></div>
  </div>
</template>
<style lang="scss" scoped>
.portfolio-teaser__wrap {
  width: 100%;
  aspect-ratio: 16/9;
  box-sizing: border-box;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  .title--wrap {
    transform: all 2s;
    opacity: 1;
  }
  &.hoverable {
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.05) !important;

      .title--wrap {
        visibility: hidden;
      }
    }
  }

  .teaser-header {
    text-transform: uppercase;
    font-weight: bold;
    color: $pink;
    background-color: transparent;
    z-index: 2;
    // padding: var(--space-sm);
    font-size: calcDimensionXs(50.455px);
    line-height: calcDimensionXs(50.455px);
    padding: calcDimensionXs(14.09px);
    @include sm {
      padding: calcDimension(14.09px);
    font-size: calcDimension(72.804px);
    $font-family: $font-title!important;
    line-height:calcDimension(72.804px);
    }
  }

  .background {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-repeat: no-repeat;
    background-position-y: center !important;
    background-position-x: center !important;
    background-size: 100% !important;
  }
}
</style>
<script setup>
import { SECTION_TILE_IMAGES } from '@/constants/content'
import image from '@/assets/images/ccc_computer.png'
import { defineProps, nextTick, onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  identifier: String,
  name: String,
  odd: Boolean,
  title: String
})

const img = new URL('/images/' + SECTION_TILE_IMAGES[props.name], import.meta.url).href

const hovered = ref(false)

const portfolioItem = ref(null)
const titleRef = ref(null)

const animationDone = ref(false)

onMounted(() => {
  gsap.from(portfolioItem.value, {
    x: (props.odd ? -1 : 1) * (window.innerWidth / 6),
    opacity: 0,
    duration: 0.6,
    ease: 'sine',
    scrollTrigger: {
      trigger: portfolioItem.value,
      scroller: '#main',
      start: 'center bottom'
    },
    onComplete: () => {
      animationDone.value = true
    }
  })
  gsap.from(titleRef.value, {
    x: (-1 * window.innerWidth) / 6,
    opacity: 0.5,
    delay: 0,
    duration: 0.6,
    ease: 'sine',
    scrollTrigger: {
      trigger: portfolioItem.value,
      scroller: '#main',
      start: 'center bottom'
    }
  })
})
</script>
