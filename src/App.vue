<template>
  <RouterView />
  <PopupSurvey v-if="showPopup" @toggle="closePopup" />
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useEventListener } from '@vueuse/core'
import PopupSurvey from '@/components/Popup/Survey.vue'
const setVh = () => {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

const showPopup = ref(false)

const togglePopup = () => {
  if (!!localStorage.getItem('prevent-popup')) return
  showPopup.value = true
}

const popupTimes = ref(1)

const closePopup = () => {
  showPopup.value = false
  if (!!localStorage.getItem('prevent-popup')) return
  setTimeout(() => {
    togglePopup()
  }, popupTimes.value * 60000);
  popupTimes.value += 1;
}

onMounted(async () => {
  setVh()
  useEventListener(window, 'resize', setVh)
  setTimeout(() => {
    togglePopup()
  }, 30000)
})
</script>
