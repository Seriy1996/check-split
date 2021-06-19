import { createStore } from 'vuex'

export default createStore({
    state: {
        products: {},
        users: {},
        productsSplit: {},
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        addProduct(state, products) {
            products.id = 'Products_' + state.count
            state.products[products.id] = products
            this.commit('increment')
        },
        delProduct(state, id) {
            delete state.products[id]
        },
        editProduct(state, products) {
            state.products[products.id] = products
        },
        addUser(state, users) {
            users.id = 'Users_' + state.count
            state.users[users.id] = users
            this.commit('increment')
        },
        delUser(state, id) {
            delete state.users[id]
        },
        editUser(state, users) {
            state.users[users.id] = users
        },
        addProductsSplit(state, productsSplit) {
            productsSplit.id = 'ProductsSplit' + state.count
            state.productsSplit[productsSplit.id] = productsSplit
            this.commit('increment')
        },
        delProductsSplit(state, id) {
            delete state.productsSplit[id]
        },
        editProductsSplit(state, productsSplit) {
            state.productsSplit[productsSplit.id] = productsSplit
        },
    },
    getters: {
        products(state) {
            return state.products;
        },
        users(state) {
            return state.users;
        },
    },
    actions: {
        getUsersFromLocalStorage() {
            return null;
        }
    },
    modules: {}
})
