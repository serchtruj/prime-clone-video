import axios from 'axios'

const createAxiosTMDBInstance = () => {
    const instance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {'Accept': 'application/json'}
    })

    instance.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${process.env.REACT_APP_API_KEY}`
        return config;
    })

    return instance;
}
export default createAxiosTMDBInstance;