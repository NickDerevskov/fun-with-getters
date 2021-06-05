import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        someObject: {
            name: 'Ben'
        },
        notObject: 5
    },
    getters: {
        someObject(state) {
            return state.someObject;
        },
        notObject(state) {
            return state.notObject;
        }
    },
    actions: {
        showMeObject({state}) {
            console.log(state)
        }
    }
})
