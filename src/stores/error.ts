export const useErrorStore = defineStore('error-store', () => {
  const activeError = ref(false)

  const setError = () => {
    activeError.value = true
  }

  return {
    activeError,
    setError,
  }
})

// This is needed for HMR
// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useErrorStore, import.meta.hot))
}
