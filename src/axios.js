import Axios from 'axios';

const axiosClient = Axios.create({
    baseURL: 'http://localhost:8000',
    headers:{
        'Content-Type':'application/json',
        'Accept':'application/json',


    },
    withCredentials:true,

})

axiosClient.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    console.log(error)
    return Promise.reject(error);
});

export default axiosClient;