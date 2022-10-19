import {Api} from "./index";

class CardsApi {
    async addNewCardAPI(data) {
        console.log(data)
        return Api.post(`/cards/`, {header: data})
    }

}

export default new CardsApi()