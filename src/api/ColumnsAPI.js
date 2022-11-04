import { Api } from "./index";

class ColumnsAPI {
  async getAllColumnsAPI() {
    return Api.get(`/columns`);
  }

  async addNewColumnAPI(header) {
    return Api.post(`/columns/`, { header });
  }

  async deleteColumnAPI(columnId) {
    return Api.delete(`/columns/${columnId}`);
  }

  async updateColumnAPI(columnId, header) {
    return Api.patch(`/columns/${columnId}`, { header });
  }

}

export default new ColumnsAPI();