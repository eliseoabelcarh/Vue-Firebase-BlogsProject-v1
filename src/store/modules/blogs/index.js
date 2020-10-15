import initialState from './initialState'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'


export default {

    namespaced: true,
    state: initialState,
    mutations: mutations,
    actions: actions,
    getters: getters

}

