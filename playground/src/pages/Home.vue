<script>
export default {}
</script>

<template>
  <div class="default-grid">
    <aside class="sidebar">
      <h2>Navigation</h2>
    </aside>
    <main class="main-content">
      <h1>Home Page</h1>
    </main>
  </div>
</template>

<style>
:root {
  --vue-blue: #34495e;
  --vue-green: #41b883;
}

*,
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.default-grid {
  display: grid;
  grid-template-columns: 1fr 4fr;
  min-height: 100vh;
}

.sidebar {
  background-color: var(--vue-blue);
  color: white;
}
</style>
