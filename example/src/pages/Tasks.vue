<script>
import { ref } from 'vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'

export default {
  components: {
    DefaultLayout
  },
  setup() {
    const userTitle = ref('Test')
    const userEstimate = ref(0)
    const userDeadline = ref('2021-11-22')
    const taskList = ref([
      { title: 'Apple', estimate: 10, deadline: '2021-11-01 ' },
      { title: 'Bananas', estimate: 20, deadline: '2021-11-03 ' }
    ])

    const addTask = () => {
      taskList.value.push({
        title: userTitle.value,
        estimate: userEstimate.value,
        deadline: userDeadline.value
      })
    }

    return {
      addTask,
      taskList,
      userTitle,
      userEstimate,
      userDeadline
    }
  }
}
</script>

<template>
  <DefaultLayout>
    <h1>☑️ Tasks Page</h1>
    <hr />
    <div class="task-grid">
      <section>
        <h2>New Task</h2>
        <form @submit.prevent>
          <div class="base-input-wrapper">
            <label for="task-title" class="base-input-label">Title</label>
            <input
              v-model="userTitle"
              type="text"
              id="task-title"
              class="base-input"
            />
          </div>
          <div class="base-input-wrapper">
            <label for="task-estimate" class="base-input-label">Estimate</label>
            <input
              v-model="userEstimate"
              type="number"
              id="task-estimate"
              class="base-input"
            />
          </div>
          <div class="base-input-wrapper">
            <label for="task-date" class="base-input-label">Deadline</label>
            <input
              v-model="userDeadline"
              type="date"
              id="task-date"
              class="base-input"
            />
          </div>
          <button @click="addTask" class="base-button">Add New Task</button>
        </form>
      </section>
      <section>
        <h2>Metrics</h2>
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
        <h2>Existing Tasks</h2>
        <table class="task-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Estimate</th>
              <th>Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(task, index) in taskList" :key="`task-${index}`">
              <td>{{ task.title }}</td>
              <td class="text-center">{{ task.estimate }}</td>
              <td class="text-center">{{ task.deadline }}</td>
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

.task-grid {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 2rem;
}

.task-table,
.task-table th,
.task-table td {
  width: 100%;
  border: 1px solid #222;
}

.task-table tr {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
}

.text-center {
  text-align: center;
}
</style>
