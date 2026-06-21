import { createRouter, createWebHashHistory } from 'vue-router'


import AcCueil from './components/AcCueil.vue'
import SeRvices from './components/SeRvices.vue'
import CoNtact from './components/CoNtact.vue'
import PoLitique from './components/PoLitique.vue'
import CoNdition from './components/CoNdition.vue'

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
    {
        path: '/politique-de-confidentialite',
        component: PoLitique
    },
     {
        path: '/conditions-d-utilisation',
        component: CoNdition
    },
]

const router = createRouter({history: createWebHashHistory(),routes})
export default router