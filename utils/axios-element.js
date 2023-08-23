import axios, { AxiosInstance } from "axios";

const axiosElement = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'Content-Type': 'application/json',
		/* 'Access-Control-Allow-Origin': "*", */
    }
})

export default axiosElement