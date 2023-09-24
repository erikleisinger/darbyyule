<template>
  <div class="scrollsection" ref="scrollsection">
    <div class="scroll-content--buffer" />
    <div class="scroll-section--invis" :style="{ height: bufferHeight }"></div>
    <div v-for="(section, index) in SECTIONS[name].slice(1)" :key="index">
      <!-- TEXT SECTION -->
      <div class="row section-container">
        <div
          class="description-container"
          :id="`description-${index}-${id}`"
          :class="{ wide: !!section.horizontal }"
        >
          <div
            class="gradient-container"
            :style="{ visibility: index >= 2 && currentSection >= 3 ? 'visible' : 'hidden' }"
          />
          <span class="title--wrap" data-flip-id="title">{{ section?.title }}</span>

          <div class="text--wrap">
            <span class="text--inner" data-flip-id="text" v-html="section?.text"></span>
            <div class="arrow-down__container" v-if="currentSection < 3">
              <arrow-down class="arrow-down--section" @click="onScrollDown" />
            </div>
          </div>

          <div class="about-container">
            <color-button
              v-if="currentSection > 2"
              class="button--color about-button"
              @click="$router.push({ name: 'about' })"
              >About</color-button
            >
          </div>
        </div>
      </div>

      <!-- IMAGE SECTION -->
      <div class="row section-container" :id="`image-container-${id}`">
        <div class="arrow--floating" v-if="!!section.horizontal">
          <arrow-down
            class="arrow"
            :animated="false"
            @click="onScrollUp"
            v-if="currentSection > 3"
          />
        </div>
        <div class="arrow--floating" v-if="!!section.horizontal">
          <arrow-down
            class="arrow"
            :animated="false"
            @click="onScrollDown"
            v-if="currentSection < 5 && currentSection > 2"
          />
        </div>
        <div
          :class="{
            active: currentSection === index,
            horizontal: !!section.horizontal,
            bg: !!section.bg
          }"
          class="image-big"
          :id="`image-big-${index}-${id}`"
          v-if="!section.video || !playingVideo"
        >
          <div
            class="gradient-container"
            :style="{
              visibility: index >= 2 && currentSection >= 3 ? 'visible' : 'hidden',
              width: 'calc(50vw + 1px)'
            }"
          />
          <div class="image-inner" :style="{ background: `url(${getImageUrl(section.img)})` }" />
          <div
            class="play-button--wrap"
            v-if="!playingVideo && currentSection > 2 && !!section.video"
          >
            <play class="play-button" @click="playingVideo = true" />
          </div>
        </div>

        <div class="video-container" v-if="section.video && playingVideo">
          <div class="gradient-container" />
          <iframe
            class="video"
            :src="section.videoUrl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            height="100%"
          ></iframe>
          <div class="video--frame"></div>
        </div>
      </div>
    </div>
    <div class="column justify-center items-center text--area big" v-if="currentSection === 0">
      <div style="width: fit-content; height: fit-content">
        <div class="title--wrap" data-flip-id="title-wrap">
          <div class="title--wrap" v-if="currentSection === 0">
            <span class="title--inner" data-flip-id="title">{{ SECTIONS[name][0]?.title }}</span>
          </div>

          <div v-if="currentSection > 2" class="about-container">
            <color-button
              class="button--color about-button"
              @click="$router.push({ name: 'about' })"
              >About</color-button
            >
          </div>
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
      <div class="arrow-container">
        <content-arrow-down class="arrow" @click="onScrollDown" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$title-size: min(75px, calcDimension(79.435px));
.scrollsection {
  height: 100vh;
  width: 100vw;
  position: fixed;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .gradient-container {
    position: absolute;
    top: 0;
    right: 0;
    height: min(290px, calcDimension(300px));
    width: 50vw;
    background: linear-gradient(180deg, #887bad 0%, #fffcf8 100%);
    z-index: 1;
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
        font-size: min(calcDimension(97.02px), 100px);
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
    line-height: 9.06vh;
    font-family: $font-title;
    font-size: $title-size;
    font-weight: 600;
    z-index: 1;
  }
  .text--wrap {
    font-size: min(20px, calcDimension(20px));
    line-height: min(24px, calcDimension(24px));
    color: $green;
    font-family: $font-title;
    z-index: 1;
    white-space: pre-line;
    position: relative;
    .arrow-down__container {
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      width: fit-content;
      bottom: calc(-1 * calcDimension(75px));
      .arrow-down--section {
        pointer-events: all;
        height: calcDimension(20.91px);
        width: calcDimension(50px);
        transition: transform 0.2s;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
  .about-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    margin-top: calcDimension(70px);
    margin-bottom: calcDimension(40.03px);
    .about-button {
      border-radius: calcDimension(18.6px) 0px calcDimension(18.6px) 0px;
      height: min(80px, calcDimension(89.294px));
      width: min(300px, calcDimension(276px));
      font-size: min(50px, calcDimension(51.158px));
      font-family: $font-title;
      font-weight: 600;
      padding-top: calcDimension(8px);
      pointer-events: all;
    }
  }

  .header-images--wrap {
    width: 100%;
    max-width: 1300px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 5vw;
    margin-top: 6.6vh;
    .header-image {
      width: 100%;
      max-width: 350px;
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
    width: 50vw;
    pointer-events: none;
    height: 100vh;

    &:nth-child(odd) {
      left: 0;
    }
    &:nth-child(even) {
      right: 0;
    }

    .arrow--floating {
      position: absolute;
      pointer-events: all;
      top: 0;
      bottom: 0;
      margin: auto;
      display: flex;
      align-items: center;
      z-index: 10;
      cursor: pointer;
      transition: transform 0.2s;
      &:hover {
        transform: scale(1.1);
      }
      .arrow {
        width: calcDimension(50px);
      }

      &:nth-of-type(1) {
        left: 2.5vw;
        .arrow {
          transform: rotate(90deg);
        }
      }
      &:nth-of-type(2) {
        right: 2.5vw;
        .arrow {
          transform: rotate(270deg);
        }
      }
    }

    .description-container {
      width: 50vw;
      height: 100vh;
      position: fixed;
      top: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: $background;
      padding: 0px calcDimension(128px);
      box-sizing: border-box;
      z-index: 1;
      &.wide {
        padding-right: unset;
      }
    }
  }
  .image-big {
    position: fixed;
    top: 0;
    height: 100vh;
    &:not(.horizontal) {
      top: 100vh;
    }
    &.horizontal {
      right: -50vw;
    }
    width: 50vw;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center center !important;
    background-color: $background;
    &.bg {
      //
      background-size: contain !important;
    }

    .image-inner {
      background-repeat: no-repeat !important;
      background-size: contain !important;
      background-position: center center !important;
      position: absolute;
      height: 100vh;
      margin: auto;
      top: 0;
      left: 0;
      right: 0;
      z-index: 3;

      background-size: contain !important;
    }

    &.horizontal {
      .image-inner {
        height: 85vh;
        top: 7.5vh;
      }
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
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .arrow-container {
    margin-top: calcDimension(79.8px);

    .arrow {
      height: calcDimension(109px);
      width: min(calcDimension(117px), 100px);

      cursor: pointer;
      pointer-events: all;
      z-index: 100;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .play-button--wrap {
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;
    .play-button {
      height: calcDimensionXs(50px);
      pointer-events: all;
    }
  }
  .video-container {
    height: 100%;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    background: $background;
    .video {
      height: 100%;
      aspect-ratio: 138/277;
      z-index: 1;
      position: relative;
      border-radius: calcDimension(55px);
      pointer-events: all;
      padding: calcDimension(20px);
      box-sizing: border-box;
    }
    .video--frame {
      position: absolute;
      height: 100%;
      aspect-ratio: 138/277;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      z-index: 1;

      background-image: url('/images/iphone-overlay.png');
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
}
</style>
<script setup>
import ColorButton from '../Buttons/ColorButton.vue'
import ContentArrowDown from '../icons/ContentArrowDown.vue'
import ArrowDown from '../icons/ArrowDown.vue'
import Play from '../icons/Play.vue'
import { SECTIONS } from '@/constants/content'
import { useScroll, toRefs, useThrottleFn } from '@vueuse/core'
import { getImageUrl } from '@/utils/url'
import { ref, nextTick, onMounted, watch, computed } from 'vue'
import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger, Flip)

const props = defineProps({
  name: String,
  modelValue: Number
})

const playingVideo = ref(false)

const id = `id${Math.round(Math.random() * 1000000000)}`

const scrollsection = ref(null)

const duration = 0.4

const emit = defineEmits(['update:modelValue'])

const currentSection = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  }
})

const sectionsLength = SECTIONS[props.name].slice(1)?.length

const { isScrolling, directions, y } = useScroll(scrollsection)

const bufferHeight = computed(() => {
  return `${window.innerHeight * 1000}px`
})

const canScroll = ref(false)

onMounted(() => {
  y.value = (window.innerHeight * 1000) / 2
  nextTick(() => {
    canScroll.value =true;
  })
})



const { top: scrollingUp, bottom: scrollingDown } = toRefs(directions)

const onScrollUp = useThrottleFn(async () => {
  const i = currentSection.value
  if (i === 0) return
  if (i < 4) {
    playingVideo.value = false
  }
  const { horizontal: isHorizontal } = SECTIONS[props.name][i]
  currentSection.value = i - 1

  if (isHorizontal) {
    nextTick(() => {
      gsap.to(`#image-big-${i - 1}-${id}`, { xPercent: 100, duration, ease: 'sine' })
      if (i === 3) gsap.to(`#description-${i - 1}-${id}`, { yPercent: 100, duration, ease: 'sine' })
    })
  } else {
    nextTick(() => {
      gsap.to(`#image-big-${i - 1}-${id}`, { yPercent: 100, duration, ease: 'sine' })
      gsap.to(`#description-${i - 1}-${id}`, { yPercent: 100, duration, ease: 'sine' })
    })
  }
}, 100)

const onScrollDown = useThrottleFn(() => {
  const i = currentSection.value
  if (i === sectionsLength) return
  const { horizontal: isHorizontal } = SECTIONS[props.name][i + 1]
  currentSection.value = i + 1
  if (isHorizontal) {
    nextTick(() => {
      gsap.to(`#image-big-${i}-${id}`, { xPercent: -100, duration, ease: 'sine' })
      if (i === 2) {
        gsap.to(`#description-${i}-${id}`, { yPercent: -100, duration, ease: 'sine' })
        gsap.from(`.gradient-container`, {
          opacity: 0,
          duration,
          ease: 'sine',
          zIndex: 1,
          delay: 0.3
        })
      }
    })
  } else {
    nextTick(() => {
      gsap.to(`#image-big-${i}-${id}`, { yPercent: -100, duration, ease: 'sine' })
      gsap.to(`#description-${i}-${id}`, { yPercent: -100, duration, ease: 'sine' })
    })
  }
}, 100)

watch(isScrolling, () => {
  if (!canScroll.value) return;
  if (scrollingUp.value) {
    onScrollUp()
  } else if (scrollingDown.value) {
    onScrollDown()
  }
})
</script>
