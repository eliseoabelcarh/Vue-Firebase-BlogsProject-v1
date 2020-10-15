import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'
import { getCurrentUser } from '../services/usersDbService.js'

Vue.use(VueRouter)


const Router = new VueRouter({
    routes: Routes,
    mode: 'history'
})


Router.beforeEach((to, from, next) => {
    const user = getCurrentUser()
    if (to.matched.some(ruta => ruta.meta.requiresAuth)) {
        if (user) {
            next();
        } else {
            next({ name: 'Login' })
        }
    } else {
        next();
    }

})

export default Router