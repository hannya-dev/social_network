import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "ee2e3548-5702-4757-850a-ec2ec168f10d"
    }
})

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 1) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`, {})
            .then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    getProfile(userId) {
        console.log('Obsoloted method. Please profileApi object.');
        return profileApi.getProfile(userId);
    },
}

export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put('profile/status/', {status})
            .then(response => response.data);
    }
}

export const authApi = {
    authUser() {
        return instance.get("auth/me").then(response => response.data)
    }
}