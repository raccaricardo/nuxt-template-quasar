import { defineStore } from 'pinia'

export const useStore = defineStore(
  'main',
  () => {
    const someState = ref('hello from pinia with localStorage ')
    return { someState }
  },
  {
    persist: true,
  },
)