<script>
export default {
  data: () => ({
    navItems: [
      {
        title: '🏠 Home',
        path: '/'
      },
      {
        title: '🧾 Transactions',
        path: '/transactions'
      },
      {
        title: '🗃️ Categories',
        path: '/categories'
      },
      {
        title: '🏦 Accounts',
        path: '/accounts'
      },
      {
        title: '📘 Budget',
        path: '/budget'
      },
      {
        title: '⚙️ Settings',
        pat: '/settings'
      }
    ]
  })
}
</script>

<template>
  <div class="default-grid">
    <aside class="sidebar">
      <h2>Budget App</h2>
      <nav>
        <ul class="main-nav">
          <li
            v-for="item in navItems"
            :key="item.title + 'nav-item'"
            class="main-nav-item"
          >
            <router-link :to="item.path">{{ item.title }}</router-link>
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

.main-content {
  padding: 1.5rem 3rem;
}

.main-content h1,
.main-content h2 {
  margin-bottom: 1rem;
}

.main-content hr {
  margin-bottom: 1rem;
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
  padding: 1.5rem;
  background-color: var(--vue-blue);
  color: white;
}
</style>
