<template>
  <div class="social-buttons row no-wrap items-center" :class="wrapClass">
    <div class="button--wrap">
      <linked-in class="social-button" :class="buttonClass" @click="goSocial" />
      <div v-if="buttonLabels" class="button-label">Linked in</div>
    </div>
    <div class="button--wrap">
      <email class="social-button" :class="buttonClass" @click="goEmail"/>
      <div v-if="buttonLabels" class="button-label">Email</div>
    </div>
    <div class="button--wrap">
      <resume class="social-button" :class="buttonClass" @click="goResume" />
      <div v-if="buttonLabels" class="button-label">Resume</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.social-buttons {
  @include sm {
    width: fit-content;
    min-width: v-bind(minWidth);
  }
  justify-content: space-around;
  .social-button {
    fill: $social-button;
    width: calcDimension(48.28px);
    height: calcDimension(48.28px);

    aspect-ratio: 1/1;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  }

  .button--wrap {
    position: relative;
    width: fit-content;
    display: flex;
    justify-content: center;
    @include sm {
      margin-right: calcDimension(24.14px);
    }

    .button-label {
      text-transform: uppercase;
      font-family: $font-subtitle;
      color: #999999;
      bottom: calc(-1 * calcDimensionXs(18px));
      width: 100%;
      text-align: center;
      white-space: nowrap;
      position: absolute;
      font-size: calcDimensionXs(12px);
      @include sm {
        font-size: calcDimension(16.667px);

        bottom: calc(-1 * calcDimension(25px));
      }
    }
  }
}
</style>
<script setup>
import {computed} from 'vue'
import { EMAIL, LINKED_IN, RESUME } from '@/constants/links'
import LinkedIn from './icons/LinkedIn.vue'
import Email from './icons/Email.vue'
import Resume from './icons/Resume.vue'

const props = defineProps({
  buttonClass: String,
  buttonLabels: Boolean,
  dense: Boolean,
  wrapClass: String
})

const minWidth = computed(() => props.dense ? '250px' : '600px')

const goSocial = () => {
  window.open(LINKED_IN, '_blank')
}

const goResume = () => {
  window.open(RESUME, '_blank')
}

const goEmail = () => {
   window.open(EMAIL)
}
</script>
