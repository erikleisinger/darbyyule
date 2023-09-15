<template>
  <mobile v-if="isXs"/>
  <desktop v-else/>
</template>

<script setup>
import {useScreen} from '@/composables/screen'
import Desktop from '@/components/About/Desktop.vue'
import Mobile from '@/components/About/Mobile.vue'

const {isXs} = useScreen();

</script>
