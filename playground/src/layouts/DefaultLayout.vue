<script>
export default {}
</script>

<template>
  <div class="default-grid">
    <aside class="sidebar">
      <h2>Navigation</h2>
      <nav>
        <ul class="main-nav">
          <li class="main-nav-item">
            <router-link to="/">🏠 Home</router-link>
          </li>
          <li class="main-nav-item">
            <router-link to="/budget">📘 Budget</router-link>
          </li>
          <li class="main-nav-item">
            <router-link to="/transactions">🧾 Transactions</router-link>
          </li>
          <li class="main-nav-item">
            <router-link to="/accounts">🏦 Accounts</router-link>
          </li>
        </ul>
      </nav>
    </aside>
    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<style>
.default-grid {
  display: grid;
  grid-template-columns: 1fr 4fr;
  min-height: 100vh;
}

.main-nav {
  margin-top: 1rem;
  list-style: none;
}

.main-nav-item {
  margin-bottom: 0.5rem;
}

.main-nav a {
  width: 100%;
  display: block;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background-color: var(--vue-blue);
  font-weight: 500;
  color: white;
  text-decoration: none;
}

.main-nav a:hover {
  background-color: var(--vue-blue-dark);
}

.main-nav a.router-link-active,
.main-nav a.router-link-active:hover {
  background-color: var(--vue-blue);
  filter: brightness(1.5);
}

.sidebar {
  padding: 1rem;
  background-color: var(--vue-blue);
  color: white;
}
</style>
