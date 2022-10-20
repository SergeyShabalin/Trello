import {Api} from "./index";

class CardsApi {
    async addNewCardAPI(columnId, title) {
        return Api.post(`/cards/`, {header: title, column: columnId})
    }

    async deleteCardAPI(columnId) {
        return Api.delete(`/cards/${columnId}`)
    }

}

export default new CardsApi()