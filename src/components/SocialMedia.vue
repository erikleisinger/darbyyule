<template>
  <div class="social-buttons row no-wrap items-center" :class="wrapClass">
    <linked-in class="social-button" :class="buttonClass" @click="goSocial"/>
    <email class="social-button" :class="buttonClass" />
    <resume class="social-button" :class="buttonClass" />
  </div>
</template>
<style lang="scss" scoped>
.social-buttons {
  width: fit-content;
  .social-button {
    fill: $social-button;
    width: calcDimension(48.28px);
        height: calcDimension(48.28px);
    margin-right: calcDimension(24.14px);
    aspect-ratio: 1/1;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1)
    }
  }
}
</style>
<script setup>
import {LINKED_IN} from '@/constants/links'
import ColorButton from './Buttons/ColorButton.vue'
import LinkedIn from './icons/LinkedIn.vue'
import Email from './icons/Email.vue'
import Resume from './icons/Resume.vue'

const props = defineProps({
  buttonClass: String,
  wrapClass: String
})

const goSocial = () => {
  window.open(LINKED_IN, "_blank")
}
</script>
