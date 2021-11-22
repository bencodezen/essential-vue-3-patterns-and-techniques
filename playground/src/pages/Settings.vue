<script>
import DefaultLayout from '../layouts/DefaultLayout.vue'

export default {
  components: {
    DefaultLayout
  }
}
</script>

<template>
  <DefaultLayout>
    <h1>⚙️ Settings Page</h1>
    <hr />
    <form @submit.prevent>
      <div class="base-input-wrapper">
        <label for="font-size" class="base-input-label">Font Size</label>
        <input type="text" id="font-size" class="base-input" />
      </div>
      <div class="base-input-wrapper">
        <label for="theme-color" class="base-input-label">Theme Color</label>
        <input type="text" id="theme-color" class="base-input" />
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
