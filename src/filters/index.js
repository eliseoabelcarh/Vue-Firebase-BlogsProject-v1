import Vue from 'vue'


const toUppercase = function (value) {
    return value.toUpperCase()
}

const previewContent = function (value) {
    if (value !== "") {
        return value.slice(0, 34) + "...[Read more]"
    }
    else {
        return value
    }
}

const shortContent210 = function (value) {
    if (value !== "") {
        return value.slice(0, 210) + "...[more]"
    }
    else {
        return value
    }
}
const shortTitle53 = function (value) {
    if (value !== "") {
        return value.slice(0, 45) + "..."
    }
    else {
        return value
    }
}

Vue.filter('to-uppercase', toUppercase)
Vue.filter('preview-content', previewContent)
Vue.filter('short-content210', shortContent210)
Vue.filter('short-title53', shortTitle53)

export {
    toUppercase,
    previewContent,
    shortContent210,
    shortTitle53
}