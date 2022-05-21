import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import Produtos from './views/Produtos'
import Promocoes from './views/Promocoes'
import Categorias from './views/Categorias'
import Compra from './views/Compra'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/produtos',
            name: 'produtos',
            component: Produtos
        },
        {
            path: '/promocoes',
            name: 'promocoes',
            component: Promocoes
        },
        {
            path: '/categorias',
            name: 'categorias',
            component: Categorias
        },
        {
            path: '/compra',
            name: 'compra',
            component: Compra
        }
    ]
})

export default router