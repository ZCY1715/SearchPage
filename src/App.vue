<template>
  <div :class="$style.container">
    <Background />

    <div :class="$style.main">
      <Logo />
      <Search />
      <ExtLinks />
    </div>
  </div>
</template>

<script setup>
import Background from './components/Background.vue'
import Search from './components/Search.vue'
import ExtLinks from './components/ExtLinks.vue'
import Logo from './components/Logo.vue'

</script>


<style module>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

}

.main {
  width: 800px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
