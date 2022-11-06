import { Api } from "./index";

class ColumnsAPI {
  async getAllColumnsAPI() {
    return Api.get(`/columns`);
  }

  async addNewColumnAPI(header) {
    return Api.post(`/columns/`, { header });
  }

  async deleteColumnAPI(columnId) {
    return Api.delete(`/columns/${columnId}`);
  }

  async updateColumnAPI(columnId, header) {
    return Api.patch(`/columns/${columnId}`, { header });
  }

  async dragDropCardInColumnAPI(currentCardId, targetColumnId, currentColumnId) {
     return Api.patch(`/columns/dragDrop/${currentColumnId}`,{ currentCardId: currentCardId, targetColumnId:targetColumnId });
  }


  //TODO
  // осталось в колонки в массив cards запушить карточку currentCard, которую найду по id
  // а в текущей колонке, которую найду по карточке, которую найду по id удалить эту карточку

}

export default new ColumnsAPI();