<template>
  <header class="about-header">
    <Logo class="logo" @click="$router.push({ name: 'home' })" />
  </header>
  <div class="about">
    <div class="about--wrap">
      <div id="left-section">
        <div class="bio-pic" :style="{ background: `url(${bioPic})` }"></div>
        <div class="bio-pic--bg" />
      </div>
      <div id="right-section">
        <!-- <h1 class="title">Darby Yule</h1> -->
        <h2 class="subtitle">UI/UX Designer | User-Centered Design | Design Strategy</h2>
        <div class="description">
          I am a passionate UI/UX Designer with a strong focus on user-centred design and creating
          engaging digital experiences. I have a UI/UX Certificate from the University of Alberta,
          covering UI design, UX design, team leadership, content design, generative user research,
          and coding for designers.
          <br />
          <br />
          My expertise lies in designing intuitive user interfaces that enhance usability and drive
          exceptional experiences. I excel in developing design strategies aligned with business
          objectives and user needs, using skills in user research, prototyping, and generative
          research. A strong leader and effective communicator, I collaborate with cross-functional
          teams to deliver high-quality, accessible designs.
        </div>
        <div class="social-container">
          <social-media />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// $title-size: min(calcDimension(98.905px), 300px);
// $title-size: calcDimensionXs(45px);

// @function calcDimensionRelative($percent) {
//   @return calc($title-size * ($percent / 100));
// }

.about-header {
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;

  .logo {
    height: calcDimensionXs(78px);
    margin: calcDimensionXs(4px) 0px 0px calcDimensionXs(13px);
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
    :deep(.st2) {
      fill: $purple;
    }
  }
}
.about {
  // display: flex;
  // margin-top: calc(calcDimensionXs(101.107) + calcDimensionXs(43.47));
  margin-top: calcDimensionXs(80px);
  height: calc(100 * var(--vh, 1vh) - calcDimensionXs(80px));
  width: 100vw;
  justify-content: center;
  align-items: center;
  overflow: auto;
  .about--wrap {
    display: grid;

    grid-template-rows: 35% 1fr;
    // width: calcDimensionRelative(1310.34);
    width: 100%;
    height: 100%;
    // row-gap: calcDimensionRelative(101.107);
  }

  .title {
    text-transform: uppercase;
    // font-size: $title-size;
    font-family: $font-title;
    // text-align: center;
  }
  .subtitle {
    color: $green;
    font-weight: bold;
    margin-bottom: 1em;
    // text-align: center;
  }

  .subtitle,
  .description {
    font-size: calcDimensionXs(15px);
    font-family: $font-title;
    // margin-left: calcDimensionRelative(10);
  }
  #right-section {
    padding: 0px calcDimensionXs(21px);
    //  margin-top: calcDimensionRelative(50);
  }

  .social-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: calcDimensionXs(46px);
    margin-bottom: calcDimensionXs(10px);
    height: calcDimensionXs(38px);
    box-sizing: border-box;
    :deep(.social-button) {
      width: calcDimensionXs(38px);
      height: calcDimensionXs(38px);
      &:not(last-child) {
        margin-right: calcDimensionXs(35px);
      }
      &:last-child {
        margin-right: unset !important;
      }
    }
  }
  #left-section {
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
    margin-bottom: calcDimensionXs(30px);

    .bio-pic,
    .bio-pic--bg {
      position: absolute;
      aspect-ratio: 1572.5/1804;
      border-radius: calcDimensionXs(13.908px);
    }
    .bio-pic {
      background-repeat: no-repeat !important;
      background-size: contain !important;
      height: 100%;
    }
  }
  .bio-pic--bg {
    height: calc(100% + calcDimensionXs(4px));
    background-color: #332d45;
    top: calcDimensionXs(5px);
    right: calc(-1 * calcDimensionXs(10px));
    left: 0;
    z-index: -1;
    margin: auto;
  }
}
</style>
<script setup>
import SocialMedia from '@/components/SocialMedia.vue'
import Logo from '@/components/Logo.vue'

const bioPic = new URL('/images/bio.png', import.meta.url).href
</script>
