<script>
import { ref } from 'vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'

export default {
  components: {
    DefaultLayout
  },
  setup() {
    const PRIVATE_COUNT = 100
    const newCount = ref(10 + PRIVATE_COUNT)

    const incrementNewCount = () => {
      console.log(newCount)
      newCount.value++
    }

    return {
      newCount,
      incrementNewCount
    }
  },
  data() {
    return {
      currentCount: 0
    }
  },
  computed: {
    doubleCount() {
      return this.newCount * 2
    }
  },
  methods: {
    incrementCount() {
      this.newCount++
    }
  }
}
</script>

<template>
  <DefaultLayout>
    <h1>🏠 Home Page</h1>
    <h2>Counter</h2>
    <p>{{ currentCount }}</p>
    <p>New: {{ newCount }}</p>
    <p>Double: {{ doubleCount }}</p>
    <button @click="incrementNewCount">+</button>
    <hr />
    <p>
      Welcome to the Todo Example App! We'll be doing some live coding and
      explanations in this repo. So please be encouraged to follow along and ask
      questions as we go through examples!
    </p>
  </DefaultLayout>
</template>

<style></style>
