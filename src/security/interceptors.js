import axios from 'axios'
import storage from './storage'
import store from '../store'
import router from '../router'

axios.interceptors.request.use(
    (config) => {
        const token = storage.get('token', null)

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response.status === 401) {
            store.dispatch('logout').then(() => {
                router.push({ path: '/login' })
            }).catch(() => {
                router.push({ path: '/login' })
            })
        }
        return Promise.reject(error)
    }
)