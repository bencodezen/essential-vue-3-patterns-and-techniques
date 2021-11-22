import { computed, ref } from 'vue'

const baseFontSize = ref(16)
const themeColor = ref('#000000')
const baseFontSizePx = computed(() => `${baseFontSize.value}px`)

export default function () {
  return {
    themeColor,
    baseFontSize,
    baseFontSizePx
  }
}
