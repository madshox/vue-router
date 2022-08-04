import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        message: 'hello vuex'
    },
    mutations: {
        //change state
        setMessage (state) {
            state.message = 'hello again';
        }
    },
    actions: {
        // change state throught mutations for async
        setMessage ({commit}) {
            commit('setMessage')
        }
    },
    getters: {
        getMessage(state) {
            return state.message
        }
    },
})