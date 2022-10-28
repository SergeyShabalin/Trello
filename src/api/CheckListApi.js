import {Api} from './index';


class CardsApi {
  async addNewTaskAPI(cardId, task) {
    return Api.post(`/checklist/`, { task: task, cardId: cardId, done: false });
  }

  async deleteTaskAPI(cardId, checkListId) {
    return Api.delete(`/checklist/${cardId}/${checkListId}`);
  }

  async updateTaskAPI(taskTitle, taskDone, checkListId) {
     return Api.patch(`/checklist/${checkListId}`, { task: taskTitle, done: taskDone });
  }

}

export default new CardsApi();