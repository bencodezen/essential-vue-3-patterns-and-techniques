import { computed, reactive } from 'vue'

const countState = reactive({
  count: 800,
  multiplier: 4,
  doubleCount: computed(() => {
    return countState.count * 2
  }),
  multiplyCount: computed(() => {
    return countState.count * countState.doubleCount
  })
})

export default function () {
  return {
    countState
  }
}
