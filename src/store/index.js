import {createStore} from "vuex";
import axiosClient from "@/axios";


const store = createStore({

    state: {
        authUser: null,
        // user: {
        //     data: {},
        //     token: sessionStorage.getItem('token') || null
        // },
        // errors: []


    },
    getters: {
        user: state => state.authUser,
    },
    mutations: {
        // setUser: (state, userData) => {
        //     state.user.data = userData;
        //     state.user.token = userData.token;
        //     sessionStorage.setItem('token', userData.token)
        // },
        // logout: (state) => {
        //     state.user.data = {};
        //     sessionStorage.removeItem('token'); // This line removes the token from the sessionStorage
        //     state.user.token = null
        // },

    },
    actions: {
        async getToken(){
          const token = await axiosClient.get('/sanctum/csrf-cookie')
            return token
        },
        async getUser(){
            await this.dispatch('getToken').then((red) => {
                 console.log("red" ,red)
             })
            // console.log(t)
            // const {data} = await axiosClient.get('/api/user')
            // this.authUser = data.data
        },
        register: ({commit}, user) => {
            try {
                return axiosClient.post('/register', user)
                    .then(({data}) => {
                        commit('setUser', data)
                        return data
                    })

            }catch (e) {
             console.log(e)
                store.state.errors = e.response.data.errors
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
    modules: {
    }



})

export default store