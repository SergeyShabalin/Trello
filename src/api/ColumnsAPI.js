import { Api } from "./index";

class ColumnsAPI {
  async getAllColumnsAPI(boardId) {
    return Api.get(`/columns/${boardId}`);
  }

  async addNewColumnAPI(header, boardId) {
    return Api.post(`/columns/`, { header, sortArr: [], boardId: boardId });
  }

  async deleteColumnAPI(columnId) {
    return Api.delete(`/columns/${columnId}`);
  }

  async updateColumnAPI(columnId, header) {
    return Api.patch(`/columns/${columnId}`, { header });
  }

  async dragDropCardInColumnAPI(currentCardId, targetColumnId, currentColumnId, currentOrder, targetCardId, targetOrder) {
     return Api.patch(`/columns/dragDrop/${currentColumnId}`,{ currentCardId: currentCardId, targetColumnId:targetColumnId, currentOrder: currentOrder, targetCardId: targetCardId, targetOrder:targetOrder  });
  }

  async dragDropCardInOneColumnAPI(data) {
    return Api.patch(`/columns/dragDropOneColumn/${data.currentColumnId}`,{ currentCardId: data.currentCardId, targetColumnId: data.targetColumnId, currentOrder: data.currentOrder, targetCardId: data.targetCardId, targetOrder:data.targetOrder  });
  }

  async dragDropCardInColumnAPIToEmpty(card, targetColumnId, currentColumnId) {
    return Api.patch(`/columns/dragDropToEmpty/${currentColumnId}`,{ currentCardId: card._id, targetColumnId:targetColumnId, currentOrder: card.order });
  }

}

export default new ColumnsAPI();
