import axios from 'axios'

export const axiosInstance = axios.create({
	baseURL: "https://present-1.onrender.com/urusoro/"
})