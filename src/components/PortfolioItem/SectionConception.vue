<template>
  <section class="section__wrap column justify-center" ref="section">
    <div class="grid-container" ref="container">
      <div class="row items-center image--wrap justify-center">
      <div class="image" ref="image" :style="{background: `url(${img})`}"></div>
      </div>
      <header class="column header ">
        <h3 class="section-title" ref="title">{{SECTION_SUBTITLES[sectionType]}}</h3>
        <p>
          {{SECTION_DESCRIPTIONS[sectionName][sectionType]}}
        </p>
      </header>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.section__wrap {
  margin-bottom: 32px;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  scroll-snap-align: start;
  padding: var(--space-md) 0px;
  padding-top: 10vh;
  background-color: $background;
  margin: auto;
  max-width: 1500px;

  .grid-container {
    display: flex;
    flex-direction: column;
    // grid-template-rows: min-content min-content;

    height: 100%;
    max-height: 100%;
    box-sizing: border-box;
    @include md {
      display: grid;
            height: min-content;
      grid-template-columns: 60% 40%;
      grid-template-rows: unset !important;
    }
    .header {
      flex-grow: 1;
          padding-top: var(--space-lg);
         
        @include md {
           justify-content: center;
          padding-top: unset;
        }
    }
  }
  .image--wrap {
    height: 100%;
    max-height: 400px;
    flex-grow: 1;
    order: 0;
    @include md{
      height: auto;
      width: 100%;
      order: 2;
    }

  }
  .image {
   height: 100%;
    // max-width: 400px;
  
    aspect-ratio: 1/1;
    box-sizing: border-box;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    background: url('@/assets/images/ccc_computer.png') no-repeat;
    -webkit-background-size: cover!important;
    -moz-background-size: cover!important;
    -o-background-size: cover!important;
    background-size:cover!important;
    background-position-y: center!important;
    background-position-x: center!important;
    margin-bottom: var(--space-md);
    @include md {
      height: auto;
      width: 100%;
        margin-bottom: unset;
    }
    
  }
  .section-title {
    font-size: 6vh;
    font-weight: bold;
    color: $green;
    @include md {
      margin-top: 1em;
    }
  }
}
</style>

<script setup>
import {SECTION_IMAGES, SECTION_SUBTITLES, SECTION_DESCRIPTIONS} from '@/constants/content'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import { defineProps, nextTick, onMounted, ref } from 'vue'
import { useParentElement, useElementBounding } from '@vueuse/core'

const props = defineProps({
    sectionType: String,
    sectionName: String
})

const img = new URL('/images/' + SECTION_IMAGES[props.sectionName][props.sectionType], import.meta.url).href

const parent = useParentElement()

const section = ref(null)
const image = ref(null)
const title =ref(null)
const container = ref(null)

const { y, height } = useElementBounding(section)

// onMounted(async () => {
//   setTimeout(() => {
//     gsap.from(title.value, {
//       scrollTrigger: {
//         trigger: container.value,
//         scroller: `#${parent.value.id}`
//       },
//       opacity: 0.2,
//       x: 300,
//       ease: 'expo',
//       duration: 2,
//     })
//     gsap.from(section.value, {
//       scrollTrigger: {
//         trigger: container.value,
//         scroller: `#${parent.value.id}`
//       },
//       opacity: 0,
//       ease: 'linear',
//       duration: 0.8,
//     })
//   }, 500)
// })
</script>
