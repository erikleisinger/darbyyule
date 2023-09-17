<template>
  <div class="porfolio-item__wrap" :class="{ expanded: showMore }" :id="`wrapper-${id}`">
    <teaser
      @click="onClick"
      data-flip-id="header"
      v-show="!showMore"
      :identifier="id"
      :name="name"
      :odd="odd"
      :title="title"
  />
    <div class="more-content__wrap" :id="`more-content-${id}`" v-show="showMore" ref="scroller">
      <!-- HEADER -->
      <header class="show-more__header row justify-between items-center">
        <Logo class="logo" style="cursor: pointer" @click="close" v-if="!isXs" :style="{visibility: currentSection === 0 ? 'visible' : 'hidden'}"/>
        <!-- Dummy div to force close button to right -->
        <div v-if="isXs"/>
        <close-button @click="close" style="padding: 4px" />
      </header>
      <!-- TITLE -->
      <section-desktop v-if="showMore && !isXs" :name="name" v-model="currentSection"/>
       <section-mobile v-else-if="showMore && isXs" :name="name" v-model="currentSection"/>
       
    </div>
  </div>
</template>
<style lang="scss" scoped>
.porfolio-item__wrap {
  &.expanded {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    background-color: $background;
    height: 100vh;
    width: 100vw;
  }
}
.more-content__wrap {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  .show-more__header {
    width: 100%;
    height: 10vh;
    position: fixed;
    top: 0;
    left: 0;
    padding: var(--space-sm);
    box-sizing: border-box;
    z-index: 10;
    .logo {
      transition: transform 0.2s;
      height: 100%;
      :deep(.st2) {
        fill: $purple;
      }
      &:hover {
        transform: scale(1.05);
      }
    }
  }
}
</style>
<script setup>
import { SECTION_TITLES } from '@/constants/content'
import Logo from '@/components/Logo.vue'
import Teaser from '@/components/PortfolioItem/Teaser.vue'
import SectionDesktop from '@/components/PortfolioItem/SectionDesktop.vue'
import SectionMobile from '@/components/PortfolioItem/SectionMobile.vue'
import CloseButton from '@/components/CloseButton.vue'
import {nextTick,  ref,  } from 'vue'
import {useScreen} from '@/composables/screen'
import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Flip)
const props = defineProps({
  name: String,
  odd: Boolean
})

const title = SECTION_TITLES[props.name]

const id = `id${Math.round(Math.random() * 1000000000)}`

const close = () => {
  showMore.value = false
  currentSection.value = 0;
}
const currentSection = ref(0)

const {isXs} = useScreen();

const showMore = ref(false)

const onClick = () => {
  const state = Flip.getState(
    `#wrapper-${id},#header-${id},#image-${id},#more-content-${id},#teaser-header-${id},#teaser-image-${id},#image-2-${id},#image-3-${id}`
  )
  showMore.value = true
  nextTick(() => {
    Flip.from(state, {
      scale: 0,
      transformOrigin: 'center',
      duration: 0.3,
      nested: true,
      fade: true,
      absolute: `#image-2-${id},#image-3-${id}`,
      props: 'color,font-style'
    })


  })
}
</script>
