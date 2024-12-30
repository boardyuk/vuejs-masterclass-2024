import type { CustomError } from '@/types/Error.ts'

export const useErrorStore = defineStore('error-store', () => {
  const activeError = ref<null | CustomError>(null)

  const setError = ({ error, customCode }: { error: string; customCode: number }) => {
    activeError.value = Error(error)
    activeError.value.customCode = customCode
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
