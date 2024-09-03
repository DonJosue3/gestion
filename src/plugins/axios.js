import axios from 'axios'

export const axiosInstance = axios.create({
	baseURL: "http:///localhost:8000/urusoro/"
})

export default axiosInstance;