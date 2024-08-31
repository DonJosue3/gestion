import axios from 'axios'

export const axiosInstance = axios.create({
	baseURL: "https://present-3.onrender.com/urusoro/"
})

export default axiosInstance;