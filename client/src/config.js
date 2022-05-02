import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://hopeescope.herokuapp.com/api/"
})