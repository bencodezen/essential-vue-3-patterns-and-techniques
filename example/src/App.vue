<script setup>
import useSettings from './store/useSettings'

const { baseFontSizePx } = useSettings()
</script>

<template>
  <router-view />
</template>

<style>
:root {
  --vue-blue: hsl(210, 29%, 29%);
  --vue-blue-dark: hsl(210, 29%, 19%);
  --vue-green: hsl(153, 48%, 49%);
}

*,
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  font-size: v-bind(baseFontSizePx);
}
</style>
