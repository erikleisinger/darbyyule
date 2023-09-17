<template>
<div class="container">
  <header class="about-header">
    <Logo class="logo" @click="$router.push({ name: 'home' })" />
  </header>
  <div class="about">
    <div class="about--wrap ">
      <div id="left-section">
        <h1 class="title">Darby Yule</h1>
        <h2 class="subtitle">UI/UX Designer | User-Centered Design | Design Strategy</h2>
        <div class="description">
          I am a passionate UI/UX Designer with a strong focus on user-centred design and creating
          engaging digital experiences. I have a UI/UX Certificate from the University of Alberta,
          covering UI design, UX design, team leadership, content design, generative user research,
          and coding for designers. 
          <br/>
              <br/>
          My expertise lies in designing intuitive user interfaces that
          enhance usability and drive exceptional experiences. I excel in developing design
          strategies aligned with business objectives and user needs, using skills in user research,
          prototyping, and generative research. A strong leader and effective communicator, I
          collaborate with cross-functional teams to deliver high-quality, accessible designs.
        </div>
        <div class="social-container">
          <social-media />
        </div>
      </div>
      <div id="right-section">
            <div class="bio-pic--bg" />
        <div class="bio-pic" :style="{ background: `url(${bioPic})` }" />
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
// $title-size: min(calcDimension(98.905px), 300px);
$title-size: calcDimension(98.905px);

@function calcDimensionRelative($percent) {
  @return calc($title-size * ($percent / 100));
}

.container {
  height: calc(100 * var(--vh, 1vh));
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
}
.about-header {
  top: 0;
  width: 100vw;
  display: flex;
  background-color: transparent;

  .logo {
    height: calcDimensionRelative(101.107);
    margin: calcDimensionRelative(43.47) 0px 0px calcDimensionRelative(43.47);
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
  display: flex;
  width: 100vw;
  justify-content: center;
  padding-bottom: calcDimensionRelative(90);
  .about--wrap {
    display: grid;
    grid-template-columns: calcDimensionRelative(690.57) calcDimensionRelative(490.109);;
    width: calcDimensionRelative(1310.34);
    height: calcDimensionRelative(651.13);
    column-gap: calcDimensionRelative(101.107);
  }

  #left-section {
    margin-top: calcDimensionRelative(80.886);

  }
  .title {
    text-transform: uppercase;
    font-size: $title-size;
    font-family: $font-title;
    margin-bottom: calcDimensionRelative(25)
  }
  .subtitle {
    color: $pink;
    font-weight: bold;
    margin-bottom: 1em;
  }

  .subtitle,
  .description {
    font-size: calcDimensionRelative(20.22);
    font-family: $font-title;
    margin-left: calcDimensionRelative(10.22);
  }

  .social-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: calcDimensionRelative(36.398);
    :deep(.social-button) {
      width: calcDimensionRelative(70.7749);
      height: calcDimensionRelative(70.7749);
      &:not(last-child) {
        margin-right: calcDimensionRelative(69.95);
      }
      &:last-child {
        margin-right: unset !important;
      }
    }
  }

  .bio-pic {
    background-repeat: no-repeat !important;
    background-size: contain !important;
    width: 100%;
    height: 100%;
  }

  #right-section {
    position: relative;

   .bio-pic,
    .bio-pic--bg {
      position: absolute;
      aspect-ratio: 1572.5/1804;

    }
    .bio-pic {
      background-repeat: no-repeat !important;
      background-size: contain !important;
      width: 100%;
    }
  }
  .bio-pic--bg {
    width: calc(100% + calcDimension(4px));
    background-color: #332d45;
    top: calcDimensionXs(5px);
    right: calc(-1 * calcDimension(25px));
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
