import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        message: 'hello vuex'
    },
    mutations: {
        //change state
        setMessage (state, payload) {
            state.message = payload;
        }
    },
    actions: {
        // change state throught mutations for async
        setMessage ({commit, getters}) {
            let a = getters.getMessage;
            let mes = 'API';
            commit('setMessage', mes)
        }
    },
    getters: {
        getMessage(state) {
            return state.message
        }
    },
})