import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL + 'authentication/'
})

instance.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_API_KEY}`
instance.defaults.headers.common['Accept'] = 'application/json'

export default axiosTMDB;