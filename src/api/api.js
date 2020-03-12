import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "3db790bc-68c8-44d6-839e-037f7aa28043"}
})

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
        .then(response => {
            return response.data
        })
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
        .then(response => {
            return response.data
        })
    },

    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status})
        .then(response => {
            return response.data
        })
    }
}

export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
    },
    
    follow (u) {
        return instance.post(`follow/${u.id}`, {})
        .then(response => {
            return response.data
        })
    },
    
    unfollow (u) {
        return instance.delete(`follow/${u.id}`, {})
        .then(response => {
            return response.data
        })
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
        .then(response => {
            return response.data
        })
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
        .then(response => {
            return response.data
        })
    },

    logout() {
        return instance.delete(`auth/login`)
        .then(response => {
            return response.data
        })
    }
}

