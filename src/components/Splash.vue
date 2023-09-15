<template>
  <section class="splash__container full-width column justify-center">
    <div class="splash-inner">
      <div class="row justify-center" ref="logo">
        <Logo class="logo" />
      </div>
      <div class="title--wrap column">
        <h1 class="text-xxxl splash--h1">darby yule</h1>
        <h2 class="splash--h2">UI | UX Designer</h2>
      </div>

      <nav class="splash--nav row full-width" ref="nav">
        <div class="row splash-nav--inner">
          <button class="button--plain" @click="$router.push({ name: 'about' })">About</button>

          <color-button @click="emit('content')" class="content-button"> Content </color-button>
        </div>
      </nav>
    </div>

    <div class="more-button--wrap" @click="emit('content')">
      <ArrowDown />
    </div>
  </section>
</template>
<style lang="scss" scoped>
@function calcDimension($n) {
  @return calc($title-size * $n);
}

@function calcDimensionXs($n) {
  @return calc($title-size-sm * $n);
}

// $title-size: min(9.9vw, 150px);
$title-size: 9.9vw;

$title-size-sm: 11.85vw;

$button-border-radius: calcDimension(0.15686);

$button-border-radius-xs: calcDimensionXs(0.254);

.splash__container {
  height: calc(100 * var(--vh, 1vh))!important;
  width: 100vw;
  box-sizing: content-box;
  justify-content: center;
  position: relative;
  @include xs {
    align-items: center;
  }

  .splash-inner {
    width: fit-content;
    box-sizing: border-box;
    @include sm {
      margin: auto;
      margin-top: calcDimension(0.2323);
      width: calcDimension(8.4828);
    }
  }

  .title--wrap {
    position: relative;
    width: fit-content;
  }
  .splash--h1 {
    font-size: $title-size-sm;
    @include sm {
      font-size: $title-size;
    }

    line-height: calcDimension(1.04);
    font-family: $font-title;
    font-weight: 700;
  }
  .splash--h2 {
    letter-spacing: calcDimensionXs(-0.05907);
    font-size: calcDimensionXs(0.6978);
    margin-top: calcDimensionXs(0.4);
    font-family: $font-subtitle;
    @include sm {
      margin-left: calcDimension(0.1);
      font-size: calcDimension(0.5656);

      letter-spacing: calcDimension(-0.0484);
      margin-top: calcDimension(0.04);
    }

    color: #9e5170;
  }
  @include sm {
    justify-content: unset;
  }
  .title--wrap {
    align-items: center;

    @include sm {
      align-items: flex-start;
    }
  }

  .splash--header {
    width: fit-content;
  }

  .splash--nav {
    justify-content: space-around;
    margin-top: calcDimensionXs(0.97);
    @include sm {
      justify-content: flex-end;
      margin-top: calcDimension(0.0757);
    }
  }

  .logo {
    height: calcDimensionXs(4.2405);
    margin-bottom: calcDimensionXs(0.4);
    @include sm {
      height: calcDimension(1.5767);
      margin-bottom: calcDimension(0.25);
    }
  }

  .more-button--wrap {
    position: absolute;
    bottom: 0;
    margin: auto;
    left: 0;
    right: 0;
    // margin-bottom: calcDimension(1.015);
    margin-bottom: 5vw;
    height: calcDimension(0.2596);
    width: calcDimensionXs(0.6647);
    @include sm {
      height: calcDimension(0.1313);
      width: calcDimension(0.3576);
    }

    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.2);
    }
  }

  .content-button,
  .button--plain {
    height: calcDimensionXs(1.22);
    font-size: calcDimensionXs(0.72827);
    @include sm {
      height: calcDimension(0.75);
      font-size: calcDimension(0.43);
    }

    font-family: $font-title;
    margin-top: unset;

    padding: unset;
  }
  .content-button {
    font-weight: 600;
    width: calcDimensionXs(3.81);
    @include sm {
      width: calcDimension(2.32);
      @include sm {
        border-radius: $button-border-radius 0px $button-border-radius 0px;
      }
    }
  }
  .button--plain {
    font-weight: regular;
    color: #10100f;
    margin-right: calcDimensionXs(0.99494);
    @include sm {
      margin-right: calcDimension(0.3393);
    }
  }
}
</style>
<script setup>
import Logo from './Logo.vue'
import ColorButton from './Buttons/ColorButton.vue'
import ArrowDown from './icons/ArrowDown.vue'
import { useElementBounding } from '@vueuse/core'
import { ref, defineEmits, onMounted } from 'vue'
import gsap from 'gsap'

const surname = ref(null)
const nav = ref(null)

const emit = defineEmits(['content'])

const { x } = useElementBounding(surname)
const { x: navX, y, top } = useElementBounding(nav)

const logo = ref(null)

// onMounted(() => {
//   const tl = gsap.timeline()
//   tl.fromTo(
//     logo.value,
//     {
//       y: -40,
//       x: 20,
//       rotation: 280,
//       rotationY: 50,
//       opacity: 0,
//     },
//     {
//       x: 0,
//       y:20,
//       opacity: 1,
//       rotation: 360,
//       rotationY: 360,
//       duration:2.5,
//       ease: 'sine'
//     },
//     0

//   )
// })
</script>
