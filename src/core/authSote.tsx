const authStore = {
    isAuthenticated: false,
    login: () => {
        authStore.isAuthenticated = true;
    },
    logout: () => {
        authStore.isAuthenticated = false;
    },
};

export default authStore;