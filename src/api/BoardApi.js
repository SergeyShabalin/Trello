import {Api} from './index'

class BoardApi {
  async getBoardAPI() {
    return Api.get(`/boards`);
  }
}

export default new BoardApi();
