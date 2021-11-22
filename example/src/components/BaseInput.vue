<script setup>
const attrs = useAttrs()
</script>

<script>
export default {
  inheritAttrs: false
}
</script>

<template>
  <div class="base-input-wrapper">
    <label for="font-size" class="base-input-label">{{ $attrs.label }}</label>
    <input
      :type="$attrs.type"
      @blur="$attrs.onBlur"
      id="font-size"
      class="base-input"
      v-model="baseFontSize"
    />
  </div>
</template>

<style></style>
