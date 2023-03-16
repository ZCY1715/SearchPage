<template>
  <div :class="$style.container">
    <Background />
    <div :class="$style.main">
      <Search />
    </div>
  </div>
</template>

<script setup>
import Background from './components/Background.vue'
import Search from './components/Search.vue'

</script>


<style module>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main {
  width: 800px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
