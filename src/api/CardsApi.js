import {Api} from "./index";

class CardsApi {
    async addNewCardAPI(columnId, title) {
         return Api.post(`/cards/`, {header: title, column_id: columnId})
    }

    async deleteCardAPI(cardId) {
         return Api.delete(`/cards/${cardId}`)
    }

    async updateCardAPI(cardId, header) {
        return Api.patch(`/cards/${cardId}`, {header})
    }

}

export default new CardsApi()