<template>
  <div id="background">
    <img :src="bg" alt="">
    <iframe src="/flower_fall.html" frameborder="0"></iframe>

  </div>
</template>

<script setup>
import bg from '../assets/bg.jpg'

</script>

<style>
#background {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
}

#background iframe {
  width: 100%;
  height: 100%;
  mix-blend-mode: color-burn;
}

#background img {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  object-fit: cover;
}
</style>