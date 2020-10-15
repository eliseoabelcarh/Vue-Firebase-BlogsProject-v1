import axios from 'axios'

const blogsURL = 'https://jsonplaceholder.typicode.com/posts'


export const cargarBlogsDeAPI = function () {
    return new Promise((resolve, reject) => {
        axios.get(blogsURL).then((response) => {
            let array = response.data
            resolve(array.slice(0, 4))
        }).catch(error => {
            reject(error)
        })
    })
}