import {Api} from './index'

class BoardApi {
  async getBoardAPI(boardId) {
    return Api.get(`/boards/${boardId}`);
  }
}

export default new BoardApi();
