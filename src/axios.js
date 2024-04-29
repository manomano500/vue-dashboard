import axios from "axios";
import {store} from "core-js/internals/reflect-metadata";

const axiosClient = axios.create({
    baseURL: "http://localhost:8000/",
})
axiosClient.defaults.withCredentials = true;
axiosClient.defaults.withXSRFToken = true;

axiosClient.interceptors.request.use(config=>{
    // config.headers.Authorization = `Bearer ${store.state.user.token}`
    return config
});
export default axiosClient;
