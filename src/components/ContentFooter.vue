<template>
  <footer class="content-footer row justify-between no-wrap">
    <logo class="logo" />
    <div class="row no-wrap items-center">
      <social-media />
      <color-button class="color-button" @click="$router.push({ name: 'about' })">
        About
      </color-button>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.content-footer {
  height: calcDimension(107px);
  width: 100%;
  margin-bottom: calcDimension(82.5px);
  margin-top: calcDimension(100px);
  .logo {
    height: 100%;
    :deep(.st2) {
      fill: $purple;
    }
  }
  .color-button {
    border-radius: calcDimension(8.407px) 0px calcDimension(8.407px) 0px;
    width: calcDimension(124.72px);
    font-size: calcDimension(31.054px);
    font-family: $font-subtitle;
    font-weight: 200;
    height: calcDimension(40.35px);
  }

}
</style>
<script setup>
import Logo from './Logo.vue'
import SocialMedia from './SocialMedia.vue'
import ColorButton from './Buttons/ColorButton.vue'
</script>
