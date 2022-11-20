import {Api} from './index'

class BoardApi {
  async getBoardAPI() {
    return Api.get(`/boards`);
  }
  async deleteColumnAPI(columnId) {
     return Api.delete(`/boards/deleteColumn/${columnId}`);
  }
}

export default new BoardApi();
