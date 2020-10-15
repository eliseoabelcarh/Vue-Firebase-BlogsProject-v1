

import SingleBlog from '../components/SingleBlog.vue'
import Home from '../views/Home.vue'
import BlogsView from '../views/BlogsView.vue'
import BlogFormView from '../views/BlogFormView.vue'
import Auth from '../views/Auth.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'


const routes = [
    { path: '*', redirect: '/' },
    {
        path: '/', component: Home, name: 'Home', beforeEnter: (to, from, next) => {
            if (to.name == 'Home' && from.name == 'Home') {
                next(false)
            } else {
                next()
            }
        }
    },
    { path: '/blogs', component: BlogsView, name: 'BlogsView' },
    {
        path: '/add', component: BlogFormView, name: 'BlogFormView', meta: {
            requiresAuth: true
        }
    },
    { path: '/blogs/:id', component: SingleBlog },
    {
        path: '/auth', component: Auth, name: 'Auth', children: [
            { path: 'login', component: Login, name: 'Login' },
            { path: 'register', component: Register, name: 'Register' },
        ]
    },

]

export default routes