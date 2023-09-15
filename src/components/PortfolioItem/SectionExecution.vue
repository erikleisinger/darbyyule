<template>
  <section class="section__wrap--execution column justify-center" ref="section">
    <div class="grid-container" ref="container">
      <div class="image--wrap justify-center full-width">
        <div
          class="image"
          ref="image"
          :style="{ background: `url(${img})` }"
          v-for="(img, index) in imgs"
          :key="index"
        ></div>
      </div>
      <header class="column header">
        <h3 class="section-title" ref="title">{{ SECTION_SUBTITLES.execution }}</h3>
        <div>
          {{ SECTION_DESCRIPTIONS[sectionName].execution }}
        </div>
      </header>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.section__wrap--execution {
  min-height: calc(100vh - var(--space-md) * 2);
  width: 100%;
  box-sizing: border-box;
  scroll-snap-align: start;
  padding: var(--space-md) 0px;
  padding-top: 10vh;
  background-color: $background;
  margin: auto;
  max-width: 1500px;
  height: 100%;

  .grid-container {
    display: grid;
    grid-template-rows: fit-content auto;

    height: 100%;

    .header {
      margin-top: var(--space-lg);
      @include md {
        padding-top: unset;
      }
    }
  }
  .image--wrap {
    display: flex;
    justify-content: center;
  }
  .image {
    &:nth-child(2) {
      margin: 0px var(--space-xs);
    }
    height: 100%;
    min-height: 75px;
    @include sm {
      min-height: 200px;
    }
    @include md {
      min-height: 300px;
    }
    aspect-ratio: v-bind(aspectRatio);
    box-sizing: border-box;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    background: url('@/assets/images/ccc_computer.png') no-repeat;
    -webkit-background-size: contain !important;
    -moz-background-size: contain !important;
    -o-background-size: contain !important;
    background-size: contain !important;
    background-position-y: center !important;
    background-position-x: center !important;
    background-repeat: no-repeat !important;
    // margin-bottom: var(--space-md);
    @include md {
      margin-bottom: unset;
    }
  }
  .section-title {
    font-size: 6vh;
    font-weight: bold;
    color: $green;
  }
}
</style>
<script setup>
import { SECTION_IMAGES, SECTION_SUBTITLES, SECTION_DESCRIPTIONS } from '@/constants/content'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
import { defineProps, onMounted, ref, computed } from 'vue'
import { useParentElement } from '@vueuse/core'

const props = defineProps({
  sectionName: String
})

const imgs = ref([])

const setImages = () => {
  const newImgs = []
  SECTION_IMAGES[props.sectionName].execution.forEach((img) => {
    newImgs.push(new URL('/images/' + img, import.meta.url).href)
  })
  imgs.value = newImgs
}

const aspectRatio = computed(() => (props.sectionName === 'darkhorse' ? '1/1' : '2/3.7'))

const parent = useParentElement()

const section = ref(null)
const image = ref(null)
const title = ref(null)
const container = ref(null)





onMounted(async () => {
  setImages()
 
  setTimeout(() => {
 
    // gsap.from(title.value, {
    //   scrollTrigger: {
    //     trigger: container.value,
    //     scroller: `#${parent.value.id}`
    //   },
    //   opacity: 0.2,
    //   x: 300,
    //   ease: 'expo',
    //   duration: 2
    // })
    // gsap.from(section.value, {
    //   scrollTrigger: {
    //     trigger: container.value,
    //     scroller: `#${parent.value.id}`
    //   },
    //   opacity: 0,
    //   ease: 'linear',
    //   duration: 0.8
    // })
  }, 500)
})
</script>
