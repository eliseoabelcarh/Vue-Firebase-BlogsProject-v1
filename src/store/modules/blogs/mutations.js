import { ADD_BLOG, CARGAR_BLOGS_DE_API } from './types'

export default {

    [ADD_BLOG]: function (state, payload) {
        state.blogs.push(payload)
    },
    [CARGAR_BLOGS_DE_API]: function (state, payload) {
        //data es un array de objetos blogs
        state.blogs = payload
    }

}