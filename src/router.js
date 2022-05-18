import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import Produtos from './views/Produtos'
import Promocoes from './views/Promocoes'
import Categorias from './views/Categorias'

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
        }
    ]
})

export default router