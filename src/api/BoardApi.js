import {Api} from './index'

class BoardApi {

  async getAllBoardAPI() {
    return Api.get(`/boards/`);
  }

  async getBoardAPI(boardId) {
    return Api.get(`/boards/${boardId}`);
  }

  async addNewBoardAPI(title) {
     return Api.post(`/boards/`, {title: title, columns: []} );
  }
}

export default new BoardApi();
