function getFechaHoy() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const time = new Date()
    let day = (time.getDate())
    let month = months[time.getMonth()]
    return { day: day, month: month }
}

function decorarBlog(element) {

    if (!element.dateDay && !element.dateMonth) {
        const { month, day } = getFechaHoy()
        element.dateMonth = month
        element.dateDay = day
    }
    if (!element.categoria) {
        element.categoria = ['Naturaleza', 'Tecnología']
    }
    if (!element.author) {
        element.author = 'John Doe Carh'
    }
    return element
}


function verificarErrores(blog) {
    let error = new Error();
    !blog.title ? error['title'] = true : error['title'] = false
    !blog.body ? error['content'] = true : error['content'] = false
    !blog.categoria.length ? error['checkboxes'] = true : error['checkboxes'] = false
    if (error.title || error.content || error.checkboxes) {
        throw error
    }
}

export {
    decorarBlog, verificarErrores

}