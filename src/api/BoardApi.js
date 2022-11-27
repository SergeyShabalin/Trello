import {Api} from './index'

class BoardApi {

  async getAllBoardAPI() {
    return Api.get(`/boards/`);
  }

  async getBoardAPI(boardId) {
    return Api.get(`/boards/${boardId}`);
  }

  async addNewBoardAPI(title) {
     return Api.post(`/boards/`, {title: title, columns: []});
  }

  async addNewBoardSampleAPI(title) {
    return Api.post(`/boards/sample/`, {title: title, columns: []});
  }

  async updateBoardAPI(boardId, title) {
    return Api.patch(`/boards/${boardId}`, {title});
  }

}

export default new BoardApi();
