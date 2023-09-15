<template>
  <div class="porfolio-item__wrap" :class="{ expanded: showMore }" :id="`wrapper-${id}`">
    <teaser
      @click="onClick"
      data-flip-id="header"
      v-show="!showMore"
      :identifier="id"
      :name="name"
      :odd="odd"
    >
      <template v-slot:header> {{ title }}</template>
    </teaser>
    <div class="more-content__wrap" :id="`more-content-${id}`" v-show="showMore">
      <!-- HEADER -->
      <header class="show-more__header row justify-between items-center">
        <Logo class="logo" />
        <close-button @click="showMore = false" style="padding: 4px" />
      </header>
      <!-- TITLE -->
      <section class="more-content__section column">
        <div>
          <h3 class="more-content--header" data-flip-id="header" :id="`header-${id}`">
            {{ title }}
          </h3>

          <div class="header-images__wrap">
            <div
              class="header-image"
              :id="`image-${id}`"
              data-flip-id="image"
              :style="{
                background: `url(${img})`
              }"
            ></div>
            <div
              class="header-image"
              :id="`image-2-${id}`"
              :style="{
                background: `url(${img})`
              }"
            ></div>
            <div
              class="header-image"
              :id="`image-3-${id}`"
              :style="{
                background: `url(${img})`
              }"
            ></div>
          </div>
        </div>
      </section>
      <portfolio-section-conception v-if="showMore" :sectionName="name" sectionType="conception" />
      <portfolio-section-conception v-if="showMore" :sectionName="name" sectionType="ideation" />
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
  padding: 0px 6vw;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow-x: auto;
  scroll-snap-type: y proximity;
  scroll-behavior: smooth;
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
      height: 100%;
      :deep(.st2) {
        fill: $purple;
      }
    }
  }
  .more-content__section {
    scroll-snap-align: start;
    min-height: 100vh;
    min-width: 100%;
    box-sizing: border-box;
    padding-top: 10vh;

    @include md {
      justify-content: center;
    }
  }
  .more-content--header {
    text-transform: uppercase;
    font-weight: bold;
    color: $green;
    background-color: transparent;
    z-index: 2;
    padding: var(--space-sm);
    font-size: 2em;
    font-style: italic;
    text-align: center;
    font-weight: bold;
    @include sm {
      padding-top: unset;
      font-size: 4em;
    }
  }
  .header-images__wrap {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    row-gap: var(--space-md);
    width: 100%;
    box-sizing: border-box;
    @include sm {
      grid-template-rows: unset;
      grid-template-columns: repeat(3, 1fr);
      column-gap: var(--space-md);
    }
  }
  .header-image {
    height: 40vh;
    margin: auto;
    @include sm {
      height: auto;
      width: 100%;
    }
    aspect-ratio: 1/1;
    box-sizing: border-box;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    -webkit-background-size: cover !important;
    -moz-background-size: cover !important;
    -o-background-size: cover !important;
    background-size: cover !important;
    background-position-y: center;
  }
}
</style>
<script setup>
import { SECTION_TITLES, SECTION_IMAGES } from '../constants/content'
import Logo from './Logo.vue'
import Teaser from './PortfolioItem/Teaser.vue'
import PortfolioSectionConception from './PortfolioItem/SectionConception.vue'
import CloseButton from './CloseButton.vue'
import { defineEmits, defineProps, nextTick, ref } from 'vue'
import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
gsap.registerPlugin(Flip)
const props = defineProps({
  name: String,
  odd: Boolean,
})

const title = SECTION_TITLES[props.name]
const img = new URL('/images/' + SECTION_IMAGES[props.name]?.main, import.meta.url).href

const id = `id${Math.round(Math.random() * 1000000000)}`

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
      duration: 0.2,
      nested: true,
      fade: true,
      absolute: `#image-2-${id},#image-3-${id}`,
      props: 'color,font-style'
    })
    gsap.fromTo(
      `#image-2-${id}`,
      {
        scaleY: 0,
        y: 0,
        x: 0
      },
      {
        scaleY: 1,
        transformOrigin: 'top',
        y: 0,
        x: 0,
        delay: 0.3,
        duration: 0.2
      }
    )
    gsap.fromTo(
      `#image-3-${id}`,
      {
        scaleY: 0,
        y: 0,
        x: 0
      },
      {
        scaleY: 1,
        transformOrigin: 'top',
        y: 0,
        x: 0,
        delay: 0.5,
        duration: 0.2
      }
    )
  })
}
</script>
