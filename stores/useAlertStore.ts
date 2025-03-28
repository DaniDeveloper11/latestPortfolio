// stores/useAlertStore.js
import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    successVisible: false
  }),
  actions: {
    showSuccess() {
      this.successVisible = true
      setTimeout(() => {
        this.successVisible = false
      }, 4000) // Se oculta después de 4 segundos
    },
    hideSuccess() {
      this.successVisible = false
    }
  }
})
