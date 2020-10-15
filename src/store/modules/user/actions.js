

import { validarModelStateUser } from './functions'

import { LOGIN_USER, LOGOUT_USER, REGISTER_USER, SET_USER } from './types'
import { loginDB, logoutDB, registerDB, getCurrentUser } from '../../../services/usersDbService'
import Router from '../../../router'


export default {

    [LOGIN_USER]: function ({ commit }, payload) {
        return new Promise((resolve, reject) => {
            loginDB(payload).then((userDb) => {
                resolve(userDb.email)
                Router.push({ name: 'BlogFormView' })
                commit(LOGIN_USER, userDb);
            }).catch((error) => {
                reject(error)
            })
        })
    },
    [LOGOUT_USER]: async function ({ commit, state }) {
        let logOutDBExitoso;
        if (state.user.email) {
            logOutDBExitoso = await logoutDB()
            if (logOutDBExitoso) {
                Router.go({ name: 'Home' })
                commit(LOGOUT_USER, {})
            }
        }
    },
    [REGISTER_USER]: function ({ commit }, payload) {
        let user;
        user = validarModelStateUser(payload)
        return new Promise((resolve, reject) => {
            registerDB(user).then(userDb => {
                resolve(userDb.email)
                Router.push({ name: 'BlogFormView' })
                commit(LOGIN_USER, userDb);
            }).catch(error => {
                reject(error)
            })
        })
    },
    [SET_USER]: function ({ commit }) {
        let user = getCurrentUser()
        if (user) {
            commit(SET_USER, user)
        } else {
            commit(SET_USER, null)
        }
    }
}