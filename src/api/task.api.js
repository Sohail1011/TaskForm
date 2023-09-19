import axios from "axios"

const tasksApi = axios.create({
    baseURL: 'http://localhost:8000/api/tasks/'
})

export const getAllTasks = () => tasksApi.get('/')
export const getTask = (id) => tasksApi.get(`/${id}/`)
export const postTask = (task) => tasksApi.post('/', task)
export const deleteTask = (id) => tasksApi.delete(`/${id}`)
export const putTask = (id, task) => tasksApi.put(`/${id}/`, task)