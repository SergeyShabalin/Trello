import { Api } from "./index";

class CardsApi {
  async addNewCardAPI(columnId, title) {
    return Api.post(`/cards/`, { header: title, column_id: columnId, description: "" });
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

  async getCardInfoAPI(cardId) {
    return Api.get(`/cards/${cardId}`);
  }

}

export default new CardsApi();