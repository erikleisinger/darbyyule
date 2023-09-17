<script setup lang="ts">

import {useElementBounding, useScroll} from '@vueuse/core'
import {onMounted, ref} from 'vue'
import Splash from '../components/Splash.vue'
import Content from '../components/Content.vue'

const main = ref(null);
const content = ref(null)

const {y} = useScroll(main, {behavior: 'smooth'})

const {y: contentY, top} = useElementBounding(content)

const goContent = () => {
  const {scrollTop } = main.value;
  y.value = contentY.value + scrollTop
}

const goSplash = () => {
  y.value = 0;
}


</script>

<style lang="scss">
  .main-content {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>

<template>
  <main class="main-content" ref="main" id="main">
    <Splash @content="goContent"/>
    <Content ref="content" @scrollUp="goSplash"/>
  </main>
</template>
