import axios from 'axios'

const apiClient = axios.create({
    baseURL: `https://my-json-server.typicode.com/Code-Pop/real-world-nuxt`,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
})


export default {
    getColumns() {
        return apiClient.get('/')
    },

    getTask(id) {
        return apiClient.get('/task/' + id)
    },

    createTask(id) {
        return apiClient.post('/task/' + id)
    }
}