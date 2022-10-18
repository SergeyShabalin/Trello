import {Api} from "./index";

class ColumnsAPI {
    async getAllColumnsAPI() {
        return Api.get(`/columns`)
    }

    async addNewColumnAPI(header) {
        return Api.post(`/columns/new`, header)
    }

    async deleteColumnAPI(columnId) {
        return Api.delete(`/columns/delete/${columnId}`)
    }

    async updateColumnAPI(columnId, data) {
        return Api.patch(`/columns/update/${columnId}`, {header: data})
    }
}

export default new ColumnsAPI()