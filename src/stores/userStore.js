import { defineStore } from "pinia"

export const useUserStore = defineStore("userStore", {
  state: () => ({
    userData: "bluuweb@test.com"
  }),
  getters: {
    userMinuscula(state){
      return state.userData.toLowerCase()
    }
  },
  actions: {
    registerUser(name) {
      this.userData = name
    }
  }
})