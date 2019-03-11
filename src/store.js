import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: {},
    },
    mutations: {
        storeUser (state, payload) {
            state.user = Object.assign({}, state.user, payload)
        }
    },
    getters: {
        user: ({ user }) => user
    }
  })

  export default store