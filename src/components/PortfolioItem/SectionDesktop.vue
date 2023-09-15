<template>
  <div class="scrollsection" ref="scrollsection">
    <div class="scroll-content--buffer" />
    <!-- v-for="(section, index) in SECTIONS[name].slice(1)"
      :key="index" -->
    <div
      class="scroll-section--invis"
      
      :style="{height:bufferHeight}"
    >
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
        :style="{ background: `url(${getImageUrl(section.img)})` }"
      />
    </div>

    <div
      class="column justify-center items-center text--area"
      :class="{ big: currentSection === 0 }"
    >
      <div style="width: fit-content; height: fit-content; ">
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
        <div v-if="currentSection > 2" class="about-container">
          <color-button class="button--color about-button" @click="$router.push({name: 'about'})">About</color-button>
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
    height: 100vh;
    width: 50vw;
    left: 0;
    top: 0;
    background-color: $background;
    pointer-events: none;
    padding: 0px calcDimension(128px);
    box-sizing: border-box;
    &.big {
        padding: 0px calcDimension(108px);
      .title--wrap {
        font-style: italic;
        top: 0;
        font-weight: bold;
        font-family: $font-subtitle;
        text-transform: uppercase;
        font-size: calcDimension(97.02px);
       
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
    margin-bottom: 1.7vh;
    color: $green;
    font-size: 9vh;
    line-height: 9.06vh;
    font-family: $font-title;
    font-size: calcDimension(79.435px);
    font-weight: 600;
    
  }
  .text--wrap {
    font-size: calcDimension(20px);
    line-height: calcDimension(24px);
    color: $green;
    font-family: $font-title;
    font-size: calcDimension(20px);
  }
  .about-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left:0;
    box-sizing:border-box;
    margin-top: calcDimension(70px);
    margin-bottom: calcDimension(40.03px);
    .about-button {
      border-radius: calcDimension(18.6px) 0px calcDimension(18.6px) 0px;
      height: calcDimension(89.294px);
      width: calcDimension(276px);
      font-size: calcDimension(51.158px);
      font-family: $font-title;
      font-weight: 600;
      padding-top: calcDimension(8px);
      pointer-events: all;
    }
  }

  .header-images--wrap {
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 5vw;
    margin-top: 6.6vh;
    .header-image {
      width: 100%;
      box-sizing: border-box;
      aspect-ratio: 1/1;
      border-radius: 16px;
      background-size: contain !important;
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
    right: 0;
    pointer-events: none;
    height: 100vh;
    width: 50vw;
  }
  .image-big {
    position: fixed;
    top: 0;
    &:not(.horizontal) {
      top: 100vh;
    }
    &.horizontal {
      right: -50vw;
    }
    height: 100vh;
    width: 50vw;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center center !important;
    &.horizontal {
      background-color: $background !important;
      background-size: contain !important;
    }
  }
  .content-half__container {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: flex-end;
    .content-half {
      height: 100vh;
      width: 50vw;
    }
  }
  .content-container {
    position: fixed;
    height: 100vh;
    width: 50vw;
    right: 0;
    top: 0;
    background-color: red;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
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

useEventListener(scrollsection, 'scroll', () => {
  console.log('SCROLLING')
})

const { isScrolling, directions, y } = useScroll(scrollsection)

const bufferHeight = computed(() => {
  return `${window.innerHeight * y.value + 10}px`
})

watch(y, (v) => {
  if (v === 0) {
    scrollsection.value.scrollTop = 1;
  }
})

const { top: scrollingUp, bottom: scrollingDown } = toRefs(directions)

const onScrollUp = useThrottleFn(() => {
  const i = currentSection.value
  console.log('scrollup: ', i)
  if (i === 0 ) return;
  const state = Flip.getState('.title--wrap,.title--inner,.text--wrap,.text--inner')
  const { horizontal: isHorizontal } = SECTIONS[props.name][i]
  currentSection.value = i - 1

  if (isHorizontal) {
    nextTick(() => {
      gsap.to(`#image-big-${i - 1}-${id}`, { xPercent: 100, duration, ease: 'sine' })
    })
  } else {
    nextTick(() => {
      console.log('hide: ', i)
      gsap.to(`#image-big-${i - 1}-${id}`, { yPercent: 100, duration, ease: 'sine' })
    })
  }
  if (i  > 3) return
  nextTick(() => {
    Flip.from(state, {
      targets: '.title--inner,.text--inner',
      fade: true,
      nested: true,
      duration: 1,
    })
  })
}, 100)

const onScrollDown = useThrottleFn(() => {
  const i = currentSection.value
  console.log('scrolldown: ', i)
  if (i === sectionsLength) return;
  const state = Flip.getState('.title--wrap,.title--inner,.text--wrap,.text--inner')
  const { horizontal: isHorizontal } = SECTIONS[props.name][i + 1]
  currentSection.value = i + 1
  if (isHorizontal) {
    nextTick(() => {
      gsap.to(`#image-big-${i}-${id}`, { xPercent: -100, duration, ease: 'sine', zIndex: 1 })
    })
  } else {
    nextTick(() => {
      gsap.to(`#image-big-${i}-${id}`, { yPercent: -100, duration, ease: 'sine', zIndex: 1 })
    })
  }
  if (i  > 2) return
  nextTick(() => {
    Flip.from(state, {
      targets: '.title--inner,.text--inner',
      fade: true,
      nested: true,
      duration: 1,
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
