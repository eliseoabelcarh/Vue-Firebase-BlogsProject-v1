import Vue from 'vue'
import Vuex from 'vuex'

import blogs from './modules/blogs'
import user from './modules/user'

Vue.use(Vuex)


export default function () {
  const Store = new Vuex.Store({
    modules: {
      blogs, user
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
