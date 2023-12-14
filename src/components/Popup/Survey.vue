<template>
  <div class="popup-overlay">
    <div class="popup-container" ref="container">
      <h2 class="popup-header">Have a Minute?</h2>
      <p class="popup-content">
        Your feedback is important! Fill out this 5 Question Survey and let me know where I can
        improve!
      </p>
      <div class="column items-center">
        <color-button class="popup-button" @click="goSurvey"> Click Here </color-button>
        <div class="dontshow-button" @click="dontShowPopup">Don't ask me again</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$width: min(calcDimension(635px), 600px);

@function calcDimensionRelative($percent) {
  @return calc($width * ($percent / 100));
}

$width-xs: 300px;

@function calcDimensionRelativeXs($percent) {
  @return calc($width * ($percent / 100));
}
.popup-overlay {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  .popup-container {
    background-color: $green;

    width: $width-xs;
    margin: 0px 30px;

    font-size: 40px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding-top: calcDimensionRelativeXs(12);
    border-radius: calcDimensionRelativeXs(8);
    @include sm {
      width: $width;
      padding-top: calcDimensionRelative(5);
      border-radius: calcDimensionRelative(3);
    }
    .popup-header {
      color: white !important;
      font-family: $font-title;
      font-size: calcDimensionRelativeXs(12);
      @include sm {
        font-size: calcDimensionRelative(6.5);
      }
      font-weight: bold;
      text-align: center;
    }
    .popup-content {
      color: rgba(255, 255, 255, 0.8);
      font-family: $font-title;
      text-align: center;

      font-weight: 100;

      //   width: calcDimensionRelative(70);
      margin-left: auto;
      margin-right: auto;
      margin-top: calcDimensionRelativeXs(7);
      padding: 0px calcDimensionRelativeXs(20);
      font-size: calcDimensionRelativeXs(7.5);
      @include sm {
        margin-top: calcDimensionRelative(3.5);
        padding: 0px calcDimensionRelative(12);
        font-size: calcDimensionRelative(4.1);
      }
    }
    .popup-button {
      font-weight: normal !important;

      font-family: $font-title;
      width: calcDimensionRelativeXs(65);
      font-size: calcDimensionRelativeXs(8.5);
      height: calcDimensionRelativeXs(15);
      border-top-left-radius: calcDimensionRelativeXs(4);
      border-bottom-right-radius: calcDimensionRelativeXs(4);
      @include sm {
        width: calcDimensionRelative(35);
        font-size: calcDimensionRelative(4.8);
        height: calcDimensionRelative(8.7);
        border-top-left-radius: calcDimensionRelative(1.7);
        border-bottom-right-radius: calcDimensionRelative(1.7);
      }
    }
    .dontshow-button {
      
      color: rgba(255, 255, 255, 0.8);
      font-family: $font-title;
      text-decoration: underline;
      margin: calcDimensionRelativeXs(5) 0px calcDimensionRelativeXs(7) 0px;
      letter-spacing: calcDimensionRelativeXs(0.3);
      font-size: calcDimensionRelativeXs(4.5);
      @include sm {
        margin: calcDimensionRelative(2.5) 0px calcDimensionRelative(3) 0px;
      letter-spacing: calcDimensionRelative(0.2);
      font-size: calcDimensionRelative(2.2);
      }

      cursor: pointer;
    }
  }
}
</style>
<script setup>
import { defineEmits, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import ColorButton from '../Buttons/ColorButton.vue'

const surveyUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLScFpDKAlzrZkMiZ-HW-68BOkfCnBYurI7AoSiDMIz-uODrX_g/viewform'

const emit = defineEmits(['toggle'])
const dontShowPopup = () => {
  localStorage.setItem('prevent-popup', true)
  emit('toggle')
}

const goSurvey = () => {
  window.open(surveyUrl, '_blank')
  localStorage.setItem('prevent-popup', true)
  emit('toggle')
}

const container = ref(null)
onClickOutside(container, () => emit('toggle'))
</script>
