<template>
  <RouterView />
</template>
<script setup>
import {onMounted} from 'vue';
import {useEventListener} from '@vueuse/core'
  const setVh = () => {
const vh = window.innerHeight * 0.01;
 document.documentElement.style.setProperty('--vh', `${vh}px`);
}

onMounted(async () => {
 setVh();
 useEventListener(window, 'resize', setVh)
})
</script>

