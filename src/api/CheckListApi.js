import {Api} from './index';


class CardsApi {
  async addNewTaskAPI(cardId, task) {
    return Api.post(`/checklist/`, { task: task, cardId: cardId, done: false });
  }

}

export default new CardsApi();