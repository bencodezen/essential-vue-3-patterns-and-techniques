<script setup>
import { computed, reactive, toRefs, onMounted } from 'vue'
import TaskRow from '../components/TaskRow.vue'
import useCounter from '../store/useCounter'
import useProjectStore from '../store/useProjectStore'
import DefaultLayout from '../layouts/DefaultLayout.vue'

const { countState } = useCounter()
const { projectStore } = useProjectStore()

const newTask = reactive({
  title: 'test',
  estimate: 10,
  deadline: '2021-11-22',
  project: ''
})

const { title, estimate, deadline, project } = toRefs(newTask)

const taskList = reactive([
  { title: 'Apple', estimate: 10, deadline: '2021-11-01 ' },
  { title: 'Bananas', estimate: 20, deadline: '2021-11-03 ' }
])

const totalEstimate = computed(() => {
  let total = 0

  taskList.forEach(task => {
    total += task.estimate
  })

  return total
})

const totalTasks = computed(() => {
  return taskList.length
})

const averageEstimate = computed(() => {
  return totalEstimate.value / totalTasks.value
})

const addTask = () => {
  taskList.push({
    ...newTask
  })
}
</script>

<script>
export default {
  computed: {
    doubleEstimate() {
      return this.totalEstimate * 2
    }
  }
}
</script>

<template>
  <DefaultLayout>
    <h1>☑️ Tasks Page</h1>
    <pre>{{ countState }}</pre>
    <p>Double estimate: {{ doubleEstimate }}</p>
    <hr />
    <div class="task-grid">
      <section>
        <h2>New Task</h2>
        <form @submit.prevent>
          <div class="base-input-wrapper">
            <label for="task-title" class="base-input-label">Title</label>
            <input
              v-model="title"
              type="text"
              id="task-title"
              class="base-input"
            />
          </div>
          <div class="base-input-wrapper">
            <label for="task-estimate" class="base-input-label">Estimate</label>
            <input
              v-model="estimate"
              type="number"
              id="task-estimate"
              class="base-input"
            />
          </div>
          <div class="base-input-wrapper">
            <label for="task-project" class="base-input-label">Project</label>
            <select name="task-project" id="task-project" v-model="project">
              <option value="">Select a project</option>
              <option
                v-for="(project, index) in projectStore.list"
                :key="`project-${index}`"
                :value="project.title"
              >
                {{ project.title }}
              </option>
            </select>
          </div>
          <div class="base-input-wrapper">
            <label for="task-date" class="base-input-label">Deadline</label>
            <input
              v-model="deadline"
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
            <p class="metric-number">{{ totalTasks }}</p>
          </div>
          <div class="metric">
            <h3>Total Estimate</h3>
            <p class="metric-number">{{ totalEstimate }}</p>
          </div>
          <div class="metric">
            <h3>Average Estimate</h3>
            <p class="metric-number">{{ averageEstimate }}</p>
          </div>
        </div>
        <h2>Existing Tasks</h2>
        <table class="task-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Estimate</th>
              <th>Project</th>
              <th>Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <TaskRow
              v-for="(task, index) in taskList"
              :key="`task-${index}`"
              :task="task"
            />
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
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
}

.text-center {
  text-align: center;
}
</style>
