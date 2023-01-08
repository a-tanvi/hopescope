import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://hopescope.onrender.com/api"
})
