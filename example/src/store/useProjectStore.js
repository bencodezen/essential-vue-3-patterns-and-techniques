import { reactive } from 'vue'

const projectStore = reactive({
  list: [
    { title: 'Grocery', deadline: '2020-01-01' },
    { title: 'Mall', deadline: '2020-02-01' }
  ]
})

export default function () {
  return {
    projectStore
  }
}
