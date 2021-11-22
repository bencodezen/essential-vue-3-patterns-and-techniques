<script setup>
defineProps({
  task: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <tr>
    <td>{{ task.title }}</td>
    <td class="text-center">{{ task.estimate }}</td>
    <td class="text-center">{{ task.project }}</td>
    <td class="text-center">{{ task.deadline }}</td>
    <td class="text-center"><button>Edit</button></td>
  </tr>
</template>

<style></style>
