import { LOGIN_USER, LOGOUT_USER, SET_USER } from './types'

export default {

    [LOGIN_USER]: function (state, payload) {
        state.user = payload
    },
    [LOGOUT_USER]: function (state, payload) {
        state.user = payload
    },
    [SET_USER]: function (state, payload) {
        state.user = payload
    }

}