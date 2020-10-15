import Vue from 'vue'


const theme = {
    bind(el, binding) {
        if (binding.value.background) {
            el.style.backgroundColor = binding.value.background
            el.style.padding = "20px"
        }
        if (binding.arg === "halfScreen") {
            el.style.maxWidth = "500px"
        }

    }
}

const mayusculas = {
    bind(el) {
        if (el) {
            el.innerHTML = el.innerHTML.toUpperCase()
        }
    }
}

const notificationTheme = {
    bind(el, binding) {
        if (binding.value === 'successTheme') {
            el.style.color = "green"
            el.style.border = "1px solid green"
            el.style.padding = "20px 100px"
            el.style.fontWeight = "bold"
            el.style.lineHeight = "2.4"
        } else if (binding.value === 'errorTheme') {
            el.style.color = "red"
            el.style.border = "1px solid red"
            el.style.padding = "20px 100px"
            el.style.fontWeight = "bold"
            el.style.lineHeight = "2.4"
        }
    }
}


Vue.directive('theme', theme)
Vue.directive('mayusculas', mayusculas)
Vue.directive('notificationTheme', notificationTheme)

export {
    theme, mayusculas, notificationTheme
}

