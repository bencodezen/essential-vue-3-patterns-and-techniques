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
    <h1>💼 Projects Page</h1>
    <hr />
    <div class="projects-grid">
      <section>
        <h2>New Project</h2>
        <form @submit.prevent>
          <div class="base-input-wrapper">
            <label for="project-title" class="base-input-label">Title</label>
            <input type="text" id="project-title" class="base-input" />
          </div>
          <div class="base-input-wrapper">
            <label for="project-date" class="base-input-label">Deadline</label>
            <input type="date" id="project-date" class="base-input" />
          </div>
          <button class="base-button">Add New Project</button>
        </form>
      </section>
      <section>
        <h2>Existing Projects</h2>
        <table class="project-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Project 1</td>
              <td class="text-center">2021-11-01</td>
              <td class="text-center"><button>Edit</button></td>
            </tr>
            <tr>
              <td>Project 2</td>
              <td class="text-center">2021-11-02</td>
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

.projects-grid {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 2rem;
}

.project-table,
.project-table th,
.project-table td {
  width: 100%;
  border: 1px solid #222;
}

.project-table tr {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}

.text-center {
  text-align: center;
}
</style>
