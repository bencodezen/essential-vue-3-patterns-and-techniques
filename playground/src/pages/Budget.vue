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
    <h1>📘 Budget Page</h1>
    <hr />
    <h2>Total Cost Per Category</h2>
    <ul>
      <li><strong>Rent</strong> - <span>$100.00</span></li>
      <li><strong>Food</strong> - <span>$10.00</span></li>
    </ul>
  </DefaultLayout>
</template>

<style></style>
