import { defineStore } from 'pinia'

export const useStore = defineStore("storeId", {
    state: () => {
        return {
            isAuthenticated: false,
            isLoggedIn: false,
            username: "",
        }
    },
    getters: {
        getIsAuthenitcated() {
            return this.isAuthenticated;
        },
        getIsLoggedIn() {
            return this.isLoggedIn
        },
        getUsername() {
            return this.username
        }
    }
});