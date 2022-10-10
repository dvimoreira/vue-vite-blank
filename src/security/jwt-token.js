import axios from 'axios'

export default {
    accessToken (email, password) {
        return axios.post(`${process.env.VUE_APP_NOT_SECRET_CODE}/api/login`, { email: email, password: password })
            .then(response => {
                return response.data
            })
            .catch(error => {
                return error.response.data
            })
    },  
    refreshToken () {
        return axios.get(`${process.env.VUE_APP_NOT_SECRET_CODE}/api/refresh-token`)
            .then(response => {
                return response.data
            })
            .catch(error => {
                return error.response.data
            })
    }
}