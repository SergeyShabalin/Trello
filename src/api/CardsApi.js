import {Api} from "./index";

class CardsApi {
    async addNewCardAPI(columnId, title) {
        return Api.post(`/cards/`, {header: title, columnId, column: columnId})
    }

}

export default new CardsApi()