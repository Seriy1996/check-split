import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Receipt from '../views/Receipt.vue'
import Result from '../views/Result.vue'
import Check from '../views/Check.vue'
import About from '../views/About.vue'

import {createRouter, createWebHistory} from 'vue-router'

const routerHistory = createWebHistory()

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/user',
        name: 'user',
        component: () => User
    },
    {
        path: '/receipt',
        name: 'receipt',
        component: () => Receipt
    },
    {
        path: '/result',
        name: 'result',
        component: () => Result
    },
    {
        path: '/check',
        name: 'check',
        component: () => Check
    },
    {
        path: '/about',
        name: 'About',
        component: () => About
    }
]

const router = createRouter({
    mode: history,
    history: routerHistory,
    routes
})

export default router
