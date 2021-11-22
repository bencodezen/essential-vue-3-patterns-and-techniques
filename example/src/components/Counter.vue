<script setup>
const props = defineProps({
  message: {
    type: String,
    required: true
  }
})

const upperMessage = props.message.toUpperCase()
</script>

<template>
  <h1>{{ upperMessage }}</h1>
</template>
