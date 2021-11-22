<script setup>
defineProps({
  task: {
    type: Object,
    required: true
  }
})
</script>

<script>
export default {
  emits: {
    'edit-task': payload => {
      if (payload === 'hello') {
        return true
      }
    }
  },
  methods: {
    editTask() {
      this.$emit('edit-task', this.task.title)
    }
  }
}
</script>

<template>
  <tr>
    <td>{{ task.title }}</td>
    <td class="text-center">{{ task.estimate }}</td>
    <td class="text-center">{{ task.project }}</td>
    <td class="text-center">{{ task.deadline }}</td>
    <td class="text-center"><button @click="editTask">Edit</button></td>
  </tr>
</template>

<style></style>
