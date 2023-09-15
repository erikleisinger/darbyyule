<template>
<div class="close-button">
  <svg
    class="svg-icon"
    style="height: 100%; aspect-ratio: 1/1; vertical-align: middle; fill: currentColor; overflow: hidden"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M777.856 280.192l-33.92-33.952-231.872 231.872-231.84-231.872-33.984 33.888 231.872 231.904-231.84 231.84 33.888 33.984 231.904-231.904 231.84 231.872 33.952-33.888-231.872-231.904z"
    />
  </svg>
</div>
</template>
<style lang="scss" scoped>
.close-button {
  z-index: 10;
  font-size: 1em;
  height: 100%;
  color: #373737;
  cursor: pointer;
  box-sizing: border-box;
  aspect-ratio: 1/1;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
