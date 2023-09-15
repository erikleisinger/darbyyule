<template>
  <div class="scrollsection" ref="scrollsection">
    <div class="scroll-content--buffer" />
    <div class="scroll-section--invis" :style="{ height: bufferHeight }">
      <!-- {{ index }} -->
    </div>
    <div
      class="row section-container"
      :id="`image-container-${id}`"
      v-for="(section, index) in SECTIONS[name].slice(1)"
      :key="index"
    >
      <div
        :class="{ active: currentSection === index, horizontal: !!section.horizontal }"
        class="image-big"
        :id="`image-big-${index}-${id}`"
      >
        <div class="image-inner" :style="{ background: `url(${getImageUrl(section.img)})` }" />
      </div>
    </div>

    <div class="column text--area justify-center" :class="{ big: currentSection === 0 }">
      <div style="width: fit-content; height: 100%" class="column">
        <div
          class="title--wrap"
          v-for="(section, index) in SECTIONS[name]"
          :key="index"
          data-flip-id="title-wrap"
        >
          <span v-if="currentSection === index" class="title--inner" data-flip-id="title">{{
            section?.title
          }}</span>
        </div>

        <div class="text--wrap" v-for="(section, index) in SECTIONS[name]" :key="index">
          <span v-if="currentSection === index" class="text--inner" data-flip-id="text">
            {{ SECTIONS[name][currentSection]?.text }}</span
          >
        </div>
        <div v-if="currentSection >= 3" class="about-container">
          <color-button class="about-button" @click="$router.push({name: 'about'})">About</color-button>
        </div>
      </div>
      <div v-if="currentSection === 0" class="header-images--wrap">
        <div
          class="header-image"
          :style="{ background: `url(${getImageUrl(SECTIONS[name][0].img)})` }"
        />
        <div
          class="header-image"
          :style="{ background: `url(${getImageUrl(SECTIONS[name][0].img)})` }"
        />
        <div
          class="header-image"
          :style="{ background: `url(${getImageUrl(SECTIONS[name][0].img)})` }"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.scrollsection {
  height: 100vh;
  width: 100vw;
  position: fixed;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .text--area {
    position: fixed;
    height: calc(100vh - min(100vw, 40vh));
    width: 100vw;
    left: 0;

    pointer-events: none;
    padding: 0px calcDimensionXs(20px);
    box-sizing: border-box;
    &:not(.big) {
      bottom: 0;
      padding-top: calcDimensionXs(15px);
    }
    &.big {
      min-height: 100vh;
      padding: 0px calcDimensionXs(10px);
      padding-top: calcDimensionXs(106px);
      top: 0;
      display: grid;
      grid-template-rows: 1fr auto;
      .title--wrap {
        font-style: italic;
        top: 0;
        font-weight: bold;
        font-family: $font-subtitle;
        text-transform: uppercase;
        font-size: calcDimensionXs(48.254px);
        text-align: center;
      }
      width: 100%;
    }
  }

  .section__title {
    font-size: 90px;
  }

  .title--wrap {
    width: 100%;
    position: relative;
    color: $green;
    font-size: 9vh;
    line-height: 9.06vh;
    font-family: $font-title;
    font-size: calcDimensionXs(50px);
    font-weight: 600;
  }
  .text--wrap {
    font-size: 2.3vh;
    line-height: 2.44vh;
    color: $green;
    font-family: $font-title;
    font-size: calcDimensionXs(14px);
    line-height: calcDimensionsXs(13px);
  }

  .about-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .about-button {
      width: calcDimensionXs(184px);
      height: calcDimensionXs(59.52px);
      font-size: calcDimensionXs(34.105px);
      font-family: $font-title;
      font-weight: 600;
      border-radius: calcDimensionXs(12.4px) 0px calcDimensionXs(12.4px) 0px;
      padding-top: calcDimensionXs(4px);
      pointer-events:all;
    }
    flex-grow:1;
  }

  .header-images--wrap {
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    row-gap: 5vw;
    margin-top: 6.6vh;
    .header-image {
      width: calcDimensionXs(254px);
      box-sizing: border-box;
      aspect-ratio: 1/1;
      border-radius: 16px;
      background-size: contain !important;
      margin: auto;
    }
  }

  .scroll-content--buffer {
    height: 100vh;
  }
  .scroll-section--invis {
    height: 500vh;
  }

  .section-container {
    position: fixed;
    top: 0;
    left: -100vw;
    pointer-events: none;
  }
  .image-big {
    position: fixed;
    top: 0;
    height: min(100vw, 40vh);
    width: 100vw;

    .image-inner {
      background-repeat: no-repeat !important;
      background-size: contain !important;
      background-position: center center !important;
      position: absolute;
      height: min(100vw, 40vh);
      margin: auto;
      top: 0;
      left: 0;
      right: 0;

      background-color: $background !important;
      background-size: contain !important;
    }
  }
}
</style>
<script setup>
import ColorButton from '../Buttons/ColorButton.vue'
import { SECTIONS } from '@/constants/content'
import { useScroll, toRefs, useThrottleFn, useEventListener } from '@vueuse/core'
import { getImageUrl } from '@/utils/url'
import { ref, nextTick, watch, computed } from 'vue'
import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger, Flip)

const props = defineProps({
  name: String
})

const id = `id${Math.round(Math.random() * 1000000000)}`

const scrollsection = ref(null)

const duration = 0.4

const currentSection = ref(0)

const sectionsLength = SECTIONS[props.name].slice(1)?.length

const { isScrolling, directions, y } = useScroll(scrollsection)

const bufferHeight = computed(() => {
  return `${window.innerHeight * y.value + 10}px`
})

watch(y, (v) => {
  if (v === 0) {
    scrollsection.value.scrollTop = 1
  }
})

const { top: scrollingUp, bottom: scrollingDown } = toRefs(directions)

const onScrollUp = useThrottleFn(() => {
  const i = currentSection.value
  console.log('scrollup: ', i)
  if (i === 0) return
  const state = Flip.getState('.title--wrap,.title--inner,.text--wrap,.text--inner')
  currentSection.value = i - 1

  nextTick(() => {
    console.log('hide: ', i)
    gsap.to(`#image-big-${i - 1}-${id}`, { xPercent: -100, duration, ease: 'sine' })
  })
  if (i > 3) return
  nextTick(() => {
    Flip.from(state, {
      targets: '.title--inner,.text--inner',
      fade: true,
      nested: true,
      duration: 1
    })
  })
}, 100)

const onScrollDown = useThrottleFn(() => {
  const i = currentSection.value
  if (i === sectionsLength) return
  console.log('scroll down: ', i)
  const state = Flip.getState('.title--wrap,.title--inner,.text--wrap,.text--inner')
  currentSection.value = i + 1
  {
    nextTick(() => {
      gsap.to(`#image-big-${i}-${id}`, { xPercent: 100, duration, ease: 'sine', zIndex: 1 })
    })
  }
  if (i > 2) return
  nextTick(() => {
    Flip.from(state, {
      targets: '.title--inner,.text--inner',
      fade: true,
      nested: true,
      duration: 1
    })
  })
}, 100)

watch(isScrolling, () => {
  if (scrollingUp.value) {
    onScrollUp()
  } else if (scrollingDown.value) {
    onScrollDown()
  }
})
</script>
