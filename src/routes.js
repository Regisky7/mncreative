import { createRouter, createWebHashHistory } from 'vue-router'


import AcCueil from './components/AcCueil.vue'
import SeRvices from './components/SeRvices.vue'
import CoNtact from './components/CoNtact.vue'

const routes = [
    {
        path: '/',
        component: AcCueil
    },
    {
        path: '/services',
        component: SeRvices
    },
    {
        path: '/contact',
        component: CoNtact
    },
]

const router = createRouter({history: createWebHashHistory(),routes})
export default router