<script>
import { computed, ref } from 'vue'
import useCounter from '../store/useCounter'
import DefaultLayout from '../layouts/DefaultLayout.vue'

export default {
  components: {
    DefaultLayout
  },
  setup() {
    const PRIVATE_COUNT = 100
    const newCount = ref({
      count: PRIVATE_COUNT + 10,
      multiplier: 3
    })

    const { countState } = useCounter()

    // Computed with Ref
    const multiplyCount = computed(() => {
      return newCount.value.count * newCount.value.multiplier
    })

    // Computed with Computed
    const halfCount = computed(() => {
      return multiplyCount.value / 2
    })

    // Computed Inside of Reactive
    // const countState = reactive({
    //   count: 800,
    //   multiplier: 4,
    //   doubleCount: computed(() => {
    //     return countState.count * 2
    //   }),
    //   multiplyCount: computed(() => {
    //     return countState.count * countState.doubleCount
    //   })
    // })

    // Computed with Reactive
    // const doubleCountState = computed(() => {
    //   return countState.count * countState.multiplier
    // })

    // Computed with Computed Reactive
    // const halfCountState = computed(() => {
    //   return doubleCountState.value / 2
    // })

    const incrementNewCount = () => {
      countState.count++
    }

    return {
      countState,
      // doubleCountState,
      // halfCountState,
      halfCount,
      multiplyCount,
      newCount,
      incrementNewCount
    }
  },
  data() {
    return {
      currentCount: 0
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
    <p>New: {{ newCount.count }}</p>
    <p>Double: {{ multiplyCount }}</p>
    <p>Half: {{ halfCount }}</p>
    <h2>New Count State</h2>
    <pre>{{ countState }}</pre>
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
