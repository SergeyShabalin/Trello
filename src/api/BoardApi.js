import {Api} from './index'

class BoardApi {

  async getAllBoardAPI() {
    return Api.get(`/boards/`);
  }

  async getBoardAPI(boardId) {
    return Api.get(`/boards/${boardId}`);
  }
}

export default new BoardApi();
