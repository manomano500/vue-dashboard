import {createStore} from "vuex";
import axiosClient from "@/axios";


const store = createStore({

    state: {
        user: {
            data: {},
            token: sessionStorage.getItem('token')
        },
        errors: []


    },
    mutations: {
        setUser: (state, userData) => {
            state.user.data = userData;
            state.user.token = userData.token;
            sessionStorage.setItem('token', userData.token)
        },
        logout: (state) => {
            state.user.data = {};
            sessionStorage.removeItem('token'); // This line removes the token from the sessionStorage
            state.user.token = null
        },

    },
    actions: {
        register: ({commit}, user) => {
            try {
                return axiosClient.post('/register', user)
                    .then(({data}) => {
                        commit('setUser', data)
                        return data
                    })

            }catch (e) {
             console.log(e)
                store.state.errors.push(e)
            }

        },
        login: ({commit}, user) => {
            return axiosClient.post('/login', user)
                .then(({data}) => {
                    commit('setUser', data)
                    return data
                })
        },
        logout: ({commit}) => {
            axiosClient.post('/logout')
                .then((response) => {
                    commit('logout')
                    return response
                })
        }
    },
    modules: {}



})

export default store