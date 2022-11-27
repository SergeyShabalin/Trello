import { Api } from "./index";

class ColumnsAPI {
  async getAllColumnsAPI(boardId) {
    return Api.get(`/columns/${boardId}`);
  }

  async addNewColumnAPI(header, boardId) {
    return Api.post(`/columns/`, { header, boardId: boardId });
  }

  async deleteColumnAPI(columnId) {
    return Api.delete(`/columns/${columnId}`);
  }

  async updateColumnAPI(columnId, header) {
    return Api.patch(`/columns/${columnId}`, { header });
  }

  async dragDropCardInColumnAPI(data) {
    return Api.patch(`/columns/dragDrop/${data.currentColumnId}`,{data});
  }

  async dragDropCardInOneColumnAPI(data) {
    return Api.patch(`/columns/dragDropOneColumn/${data.currentColumnId}`,{data})
    }

  async dragDropCardInColumnAPIToEmpty(card, targetColumnId, currentColumnId) {
    return Api.patch(`/columns/dragDropToEmpty/${currentColumnId}`,{ currentCardId: card._id, targetColumnId:targetColumnId, currentOrder: card.order });
  }

}

export default new ColumnsAPI();
