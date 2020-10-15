
export default {

    //GETTER CON PARAMETRO
    getBlogById: (state) => (id) => {
        return state.blogs.find(b => (b.id).toString() === id)
    },

    //GETTER CON PARAMETRO
    filtrarPorTermino: (state) => (searchTerm) => {
        if (searchTerm == '') {
            return state.blogs
        } else {
            const filtrados = state.blogs.filter(blog => {
                return blog.title.match(searchTerm);
            })
            return filtrados
        }
    }
};


