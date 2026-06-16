import { createRouter, createWebHashHistory } from 'vue-router'

import SaLut from './components/SaLut.vue'
import AcCueil from './components/AcCueil.vue'
const routes = [
    {
        path: '/',
        component: SaLut
    },
    {
        path: '/accueil',
        component: AcCueil
    },
]

const router = createRouter({history: createWebHashHistory(),routes})
export default router