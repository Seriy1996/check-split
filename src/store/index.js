import {createStore} from 'vuex'

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
            state.products['Products_' + state.count] = products;
            this.commit('increment')
        },
        delProduct(state, products_id) {
            delete state.products[products_id]
        },
        editProduct(state, products_id, products) {
            state.products[products_id] = products
        },
        addUser(state, users) {
            state.users['Users_' + state.count] = users;
            this.commit('increment')
        },
        delUser(state, users_id) {
            delete state.users[users_id]
        },
        editUser(state, users_id, users) {
            state.users[users_id] = users
        },
        addProductsSplit(state, productsSplit) {
            state.productsSplit['Users_' + state.count] = productsSplit;
            this.commit('increment')
        },
        delProductsSplit(state, productsSplit_id) {
            delete state.productsSplit[productsSplit_id]
        },
        editProductsSplit(state, productsSplit_id, productsSplit) {
            state.productsSplit[productsSplit_id] = productsSplit
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
