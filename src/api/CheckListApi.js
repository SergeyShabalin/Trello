import {Api} from './index';


class CardsApi {
  async getAllCheckListAPI() {
    return Api.get(`/checklist`);
  }

}

export default new CardsApi();