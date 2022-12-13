import axios from "axios";

export const Api =axios.create({
    baseURL: 'http://localhost:4000'
    // baseURL: 'https://react-task-server.onrender.com' для деплоя
})