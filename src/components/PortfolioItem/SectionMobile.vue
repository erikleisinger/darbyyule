<template>
  <div class="scrollsection" ref="scrollsection">
    <div class="scroll-content--buffer" />
    <div class="scroll-section--invis" :style="{ height: bufferHeight }">
    </div>
    <div
      class="row section-container image-container"
      :id="`image-container-${id}`"
      v-for="(section, index) in SECTIONS[name].slice(1)"
      :key="index"
    >
      <div
        :class="{ active: currentSection === index, horizontal: !!section.horizontal }"
        class="image-big"
        :id="`image-big-${index}-${id}`"
      >
        <div class="play-button--wrap" v-if="!!section.video && !playingVideo">
          <play class="play-button" @click="playingVideo = true" />
        </div>
        <div
          class="image-inner"
          :style="{ background: `url(${getImageUrl(section.img)})` }"
          v-if="!playingVideo"
        />
        <div class="video-container" v-if="section.video && playingVideo">
          <iframe
            class="video"
            :src="section.videoUrl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            height="100%"
          ></iframe>
          <div class="video--frame"/>
        </div>
      </div>

      <div class="arrow-horiz__container" v-if="!!section.horizontal && currentSection > 2">
        <arrow-down
          class="arrow left"
          :animated="false"
          :style="{
            visibility: currentSection >= SECTIONS[name].length - 1 ? 'hidden' : 'visible'
          }"
          @click="() => scroll(false)"
        />
        <arrow-down
          class="arrow right"
          :animated="false"
          :style="{ visibility: currentSection < 4 ? 'hidden' : 'visible' }"
          @click="() => scroll(true)"
        />
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
          <span v-if="currentSection === index" class="title--inner" data-flip-id="title"
            >{{ section?.title }}
          </span>
        </div>

        <div class="text--wrap" v-for="(section, index) in SECTIONS[name]" :key="index">
          <span v-if="currentSection === index" class="text--inner" data-flip-id="text" v-html="SECTIONS[name][currentSection]?.text">
          
        </span
          >
            
        </div>
         <div class="arrow-down__container" v-if="currentSection < 3 && currentSection !== 0">
              <arrow-down class="arrow-down--section" @click="onScrollDown" />
            </div>
        <div v-if="currentSection >= 3" class="about-container">
          <color-button class="about-button" @click="$router.push({ name: 'about' })"
            >About</color-button
          >
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
$scrollsection-height: calc(100 * var(--vh, 1vh));

:deep(.hide-mobile) {
  display: none;
}
.scrollsection {
  height: $scrollsection-height;
  width: 100vw;
  position: fixed;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .text--area {
    position: fixed;
    height: calc($scrollsection-height - min(100vw, 40vh));
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

     .arrow-down__container {
      // position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      width: fit-content;
      
      .arrow-down--section {
        pointer-events: all;
        height: calcDimensionXs(20.91px);
        width: calcDimensionXs(40px);
        transition: transform 0.2s;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
        }
      }
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
      pointer-events: all;
    }
    flex-grow: 1;
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
      width: 100vw;
  }
  .image-container {
    height: min(100vw, 40vh);
    .arrow-horiz__container {
      position: absolute;
      height: inherit;
      width: 100vw;
      transform: translate(100%, 0%);
      display: flex;
      z-index: 1;
      justify-content: space-between;
      align-items: center;
      .arrow {
        pointer-events: all;
        height: calcDimensionXs(10px);
        width: calcDimensionXs(50px);
        &.left {
          transform: rotate(90deg);
        }
        &.right {
          transform: rotate(270deg);
        }
      }
    }
  }
  .image-big {
    position: fixed;
    top: 0;
    height: inherit;
     background: v-bind(imgBg);
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

 
      background-size: contain !important;
    }
    .play-button--wrap {
      height: 100%;
      position: absolute;
      top: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      .play-button {
        height: calcDimensionXs(50px);
        pointer-events: all;
      }
    }
    .video-container {
      height: 100%;
      width: 100%;
      margin: auto;
      background-color: $background;
      display: flex;
      justify-content: center;
      .video {
        height: 100%;
        aspect-ratio: 128/277;
        position: relative;
        border-radius: 30px;
        pointer-events: all;
       
      }
       .video--frame {
          position: absolute;
          height: 100%;
          aspect-ratio: 147/277;
          top: 0;
          left: 0;
          right: 0;
          margin: auto;

          background-image: url('/images/iphone-overlay.png');
          background-size: contain;
          background-repeat: no-repeat;
        }
    }
  }
}
</style>
<script setup>
import ColorButton from '../Buttons/ColorButton.vue'
import ArrowDown from '../icons/ArrowDown.vue'
import Play from '../icons/Play.vue'
import { SECTIONS } from '@/constants/content'
import { useScroll, toRefs, useDebounceFn } from '@vueuse/core'
import { getImageUrl } from '@/utils/url'
import { ref, nextTick, onMounted, watch, computed } from 'vue'
import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger, Flip)

const props = defineProps({
  name: String,
  modelValue: Number,
})

const imgBg = computed(() => currentSection.value >= 3 ? 'linear-gradient(180deg, #887BAD 0%, #FFFCF8 100%)' : '#fffcf8')

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

const canScroll = ref(false);

onMounted(() => {
  y.value = (window.innerHeight * 1000) / 2
  nextTick(() => {
    canScroll.value =true;
  })
})

const sectionsLength = SECTIONS[props.name].slice(1)?.length

const { isScrolling, directions, y } = useScroll(scrollsection)

const bufferHeight = computed(() => {
  return `${window.innerHeight * 100}px`
})


const { top: scrollingUp, bottom: scrollingDown } = toRefs(directions)

const onScrollUp = () => {
  playingVideo.value = false
  const i = currentSection.value
  if (i === 0) return
  const state = Flip.getState('.title--wrap,.title--inner,.text--wrap,.text--inner')
  currentSection.value = i - 1

  nextTick(() => {
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
}

const onScrollDown = () => {
  const i = currentSection.value
  if (i === sectionsLength) return;
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
}

const scroll = useDebounceFn((up) => {
  if (up) {
 onScrollUp()
  } else {
  onScrollDown()
  }
}, 10)

watch(isScrolling, () => {
  if (!canScroll.value) return;
  if (scrollingUp.value) {
    scroll(true)
  } else if (scrollingDown.value) {
    scroll(false)
  }
})
</script>
