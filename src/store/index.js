import {createStore} from "vuex";
import axiosClient from "@/axios";
import auth from "@/store/auth";


const store = createStore({


    modules: {
        auth
    }



})

export default store