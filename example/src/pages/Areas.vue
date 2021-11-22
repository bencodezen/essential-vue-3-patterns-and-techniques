<script setup>
import { ref } from 'vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import TheModal from '../components/TheModal.vue'

const syncError = ref(false)

const syncTodoist = () => {
  syncError.value = true
}
</script>

<template>
  <DefaultLayout>
    <h1>🌐 Areas Page</h1>
    <hr />
    <teleport to="#modal">
      <TheModal v-if="syncError" />
    </teleport>
    <div class="areas-grid">
      <button @click="syncTodoist">Sync Todoist</button>
      <section>
        <h2>New Area</h2>
        <form @submit.prevent>
          <div class="base-input-wrapper">
            <label for="area-title" class="base-input-label">Title</label>
            <input type="text" id="area-title" class="base-input" />
          </div>
          <button class="base-button">Add New Area</button>
        </form>
      </section>
      <section>
        <h2>Existing Areas</h2>
        <table class="area-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Personal</td>
              <td class="text-center"><button>Edit</button></td>
            </tr>
            <tr>
              <td>Work</td>
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

.areas-grid {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 2rem;
}

.area-table,
.area-table th,
.area-table td {
  width: 100%;
  border: 1px solid #222;
}

.area-table tr {
  display: grid;
  grid-template-columns: 2fr 1fr;
}

.text-center {
  text-align: center;
}
</style>
