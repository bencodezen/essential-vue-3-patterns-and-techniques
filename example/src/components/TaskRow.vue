<script setup>
const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})

const emits = defineEmits({
  'edit-task': null
})

const editTask = () => {
  emits('edit-task', props.task.title)
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
