<script setup>
import useSettings from '../store/useSettings'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import Counter from '../components/Counter.vue'

const { baseFontSize, themeColor } = useSettings()
</script>

<template>
  <DefaultLayout>
    <h1>⚙️ Settings Page</h1>
    <article>
      <Counter
        class="custom-counter-class"
        data-test="emza"
        message="Hello Vue Toronto 2021!"
      />
    </article>
    <hr />
    <form @submit.prevent>
      <div class="base-input-wrapper">
        <label for="font-size" class="base-input-label">Font Size</label>
        <input
          type="number"
          id="font-size"
          class="base-input"
          v-model="baseFontSize"
        />
      </div>
      <div class="base-input-wrapper">
        <label for="theme-color" class="base-input-label">Theme Color</label>
        <input
          type="color"
          id="theme-color"
          class="base-input"
          v-model="themeColor"
        />
      </div>
    </form>
  </DefaultLayout>
</template>

<style>
.base-input {
  display: flex;
  width: 100%;
  padding: 0.25rem;
}

.base-input-label {
  display: block;
  margin-bottom: 0.5rem;
}

.base-input-wrapper {
  margin-bottom: 1rem;
}
</style>
