import {Api} from "./index";

class CardsApi {
    async addNewCardAPI(columnId, title) {
         return Api.post(`/cards/`, {header: title, column_id: columnId, description: ''});
    }

    async deleteCardAPI(cardId) {
         return Api.delete(`/cards/${cardId}`);
    }

    async updateCardAPI(cardId, header, description) {
        return Api.patch(`/cards/${cardId}`, {header, description: description});
    }

}

export default new CardsApi();