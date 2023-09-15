<template>
  <button
    class="button--color"
    ref="button"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
  <div>
    <slot />
  </div>
  </button>
</template>
<script setup>
import gsap from 'gsap'
import { ref, watch } from 'vue'

const isHovered = ref(false)
const button = ref(null)

watch(isHovered, (val) => {
  if (val) {
    gsap.fromTo(button.value, {
         backgroundImage: 'linear-gradient(89.62deg, #887BAD 0.19%, #887BAD 99.67%)',
         opacity: 1,
    },
    {
      duration: 0.5,
      backgroundImage: 'linear-gradient(89.62deg, #887BAD 0.19%, #9E5170 99.67%)'
    })
  } else {
    gsap.fromTo(button.value, {
         backgroundImage: 'linear-gradient(89.62deg, #887BAD 0.19%, #9E5170 99.67%)',
         opacity: 1,
    },
    {
      duration: 0.5,
      backgroundImage: 'linear-gradient(89.62deg, #887BAD 0.19%, #887BAD 99.67%)',
    })
  }
})
</script>
