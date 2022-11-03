import {Api} from './index';


class CardsApi {
  async addNewTaskAPI(cardId, task) {
    return Api.post(`/checklist/`, { task: task, cardId: cardId, done: false }, );
  }

  async deleteTaskAPI(cardId, checkListId) {
    return Api.delete(`/checklist/${cardId}/${checkListId}`);
  }

  async updateTaskTitleAPI(taskTitle, checkListId) {
     return Api.patch(`/checklist/title/${checkListId}`, { task: taskTitle });
  }

  async updateValueTaskAPI(taskDone, checkListId, cardId) {
    return Api.patch(`/checklist/value/${checkListId}`, { done: taskDone, cardId });
  }

}

export default new CardsApi();