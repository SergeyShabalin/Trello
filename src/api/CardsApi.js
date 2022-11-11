import { Api } from "./index";

class CardsApi {
  async addNewCardAPI(columnId, title, order) {
    return Api.post(`/cards/`, { header: title, column_id: columnId, description: "",  doneTask: 0, countTask: 0});
  }

  async deleteCardAPI(cardId) {
    return Api.delete(`/cards/${cardId}`);
  }

  async updateCardHeaderAPI(cardId, newTitle) {
    return Api.patch(`/cards/title/${cardId}`, { header: newTitle });
  }

  async updateCardDescriptionAPI(cardId, descriptionValue) {
    return Api.patch(`/cards/descriptions/${cardId}`, { description: descriptionValue });
  }

  async updateCardDecisionDateAPI(cardId, decisionDate) {
    return Api.patch(`/cards/decisionDate/${cardId}`, { decisionDate: decisionDate });
  }

  async getCardInfoAPI(cardId) {
    return Api.get(`/cards/${cardId}`);
  }

  async dragDropCardAPI(currentCard, targetColumn, order) {
    return Api.patch(`/cards/dragDrop/${currentCard}`, {targetColumn, order});
  }

}

export default new CardsApi();