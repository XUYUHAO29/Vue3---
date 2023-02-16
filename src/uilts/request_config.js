import axios from "axios";
const request = axios.create({
    timeout:4000,
    // baseURL: ,

})
// request.interceptors.request.use((config)=>{

// })
export default request