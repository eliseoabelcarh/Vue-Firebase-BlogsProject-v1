import { ADD_BLOG, CARGAR_BLOGS_DE_API } from './types'
import { decorarBlog, verificarErrores } from './functions'
import { cargarBlogsDeAPI } from '../../../services/blogsDBServices.js'

export default {

    [ADD_BLOG]: function ({ commit, state }, payload) {
        verificarErrores(payload)//lanza errores si los encuentra
        let lastId = state.blogs.length;
        payload.id = (lastId + 1).toString()
        payload = decorarBlog(payload)
        commit(ADD_BLOG, payload)
    },


    [CARGAR_BLOGS_DE_API]: async function ({ commit }) {
        return new Promise((resolve, reject) => {
            cargarBlogsDeAPI().then(array => {
                const result = []
                array.forEach(element => {
                    result.push(decorarBlog(element))
                })
                commit(CARGAR_BLOGS_DE_API, result)
                resolve()
            }).catch(error => {
                error.message = 'Error cargando blogs, refresque página'
                reject(error)
            })
        })
    },






}