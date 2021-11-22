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
    <h1>🗃️ Categories Page</h1>
    <hr />
    <div class="categories-grid">
      <section>
        <h2>New Category</h2>
        <form @submit.prevent>
          <div class="base-input-wrapper">
            <label for="category-title" class="base-input-label">Title</label>
            <input type="text" id="category-title" class="base-input" />
          </div>
          <button class="base-button">Add New Category</button>
        </form>
      </section>
      <section>
        <h2>Existing Categories</h2>
        <table class="category-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Category #1</td>
              <td class="text-center"><button>Edit</button></td>
            </tr>
            <tr>
              <td>Category #2</td>
              <td class="text-center"><button>Edit</button></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </DefaultLayout>
</template>

<style>
.base-button {
  padding: 0.25rem 0.5rem;
}

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

.categories-grid {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 2rem;
}

.category-table,
.category-table th,
.category-table td {
  width: 100%;
  border: 1px solid #222;
}

.category-table tr {
  display: grid;
  grid-template-columns: 2fr 1fr;
}

.text-center {
  text-align: center;
}
</style>
