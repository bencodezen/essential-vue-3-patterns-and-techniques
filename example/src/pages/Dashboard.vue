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
    <h1>📊 Dashboard Page</h1>
    <hr />
    <h2>Task Metrics</h2>
    <div class="metrics-grid">
      <div class="metric">
        <h3>Total Tasks</h3>
        <p class="metric-number">2</p>
      </div>
      <div class="metric">
        <h3>Total Estimate</h3>
        <p class="metric-number">90</p>
      </div>
      <div class="metric">
        <h3>Due This Month</h3>
        <p class="metric-number">2</p>
      </div>
    </div>
    <h2>Project Metrics</h2>
    <div class="metrics-grid">
      <div class="metric">
        <h3>Number of Projects</h3>
        <p class="metric-number">2</p>
      </div>
      <div class="metric">
        <h3>Projects Due This Month</h3>
        <p class="metric-number">2</p>
      </div>
      <div class="metric">
        <h3>Project Due Next Month</h3>
        <p class="metric-number">0</p>
      </div>
    </div>
  </DefaultLayout>
</template>

<style>
.metrics-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 2rem;
}

.metrics-grid .metric {
  border: 2px solid #222;
  padding: 1rem;
  text-align: center;
}

.metrics-grid .metric-number {
  font-size: 2rem;
  font-weight: 300;
}
</style>
