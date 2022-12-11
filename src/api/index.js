import axios from "axios";

export const Api =axios.create({
    baseURL: 'https://react-task-server.onrender.com',
})