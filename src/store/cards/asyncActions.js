import CardsApi from "../../api/CardsApi";
import { columnsAC } from "../columns/actions";
import { cardsAC } from "./actions";
import CheckListApi from "../../api/CheckListApi";
import ColumnsAPI from "../../api/ColumnsAPI";


export const addNewCard = (columnId, title) => async (dispatch, getState) => {
  const { columns } = getState().columns;
  try {
    const resp = await CardsApi.addNewCardAPI(columnId, title);
    const columnsForAddCard = columns.map(item => {
      if (item._id === resp.data.column_id) {
        return { ...item, cards: [...item.cards, resp.data], sortArr: [...item.sortArr, resp.data.order] };
      } else return item;
    });
    dispatch(columnsAC.cardsAdd(columnsForAddCard));
  } catch (error) {
    console.warn(error, "server error");
  }
};

export const deleteCard = (cardId, columnId, currentOrder) => async (dispatch, getState) => {
  const { columns } = getState().columns;
  const ColumnsAfterDelete = columns.map(column => column._id === columnId
    ? {
      ...column, cards: column.cards.filter(item => item._id !== cardId),
      sortArr: column.sortArr.filter(item => item !== currentOrder)
    }
    : column
  );
  try {
    dispatch(columnsAC.cardDelete(ColumnsAfterDelete));
    await CardsApi.deleteCardAPI(cardId);
  } catch (error) {
    console.warn(error, "server error");
  }
};


export const updateCardTitle = (newTitle, cardId, columnId) => async (dispatch, getState) => {
  const { columns } = getState().columns;
  try {
    await CardsApi.updateCardHeaderAPI(cardId, newTitle);
    const ColumnsAfterUpdate = columns.map(column => (
        column._id === columnId
          ? {
            ...column, cards: column.cards.map(item => {
              if (item._id === cardId) {
                return { ...item, header: newTitle };
              } else return item;
            })
          }
          : column
      )
    );
    dispatch(columnsAC.cardUpdate(ColumnsAfterUpdate));
  } catch (error) {
    console.warn(error, "server error");
  }
};


export const updateCardDescription = (cardId, columnId, descriptionValue) => async (dispatch) => {
  try {
    await CardsApi.updateCardDescriptionAPI(cardId, descriptionValue);
    dispatch(cardsAC.updateDescription(descriptionValue));
  } catch (error) {
    console.warn(error, "server error");
  }
};

export const updateCardDecisionDate = (decisionDate, cardId, columnId) => async (dispatch, getState) => {
  const { columns } = getState().columns;
  try {
    await CardsApi.updateCardDecisionDateAPI(cardId, decisionDate);
    dispatch(cardsAC.updateDecisionDate(decisionDate));
    const ColumnsAfterUpdate = columns.map(column => (
        column._id === columnId
          ? {
            ...column, cards: column.cards.map(item => {
              if (item._id === cardId) {
                return { ...item, decisionDate: decisionDate };
              } else return item;
            })
          }
          : column
      )
    );
    dispatch(columnsAC.cardUpdate(ColumnsAfterUpdate));
  } catch (error) {
    console.warn(error, "server error");
  }
};

export const getCardInfo = (cardId) => async (dispatch) => {
  try {
    const resp = await CardsApi.getCardInfoAPI(cardId);
    dispatch(cardsAC.viewInfoCard(resp.data));
  } catch (error) {
    console.warn(error, "server error");
  }
};


export const clearCardInfo = () => async (dispatch) => {
  try {
    const clearCard = { checkList: [{ _id: 1 }], header: "", description: "" };
    dispatch(cardsAC.clearInfoCard(clearCard));
  } catch (error) {
    console.warn(error, "server error");
  }
};

export const NewTaskAdd = (cardId, task, columnId) => async (dispatch, getState) => {
  const { cards } = getState().cards;
  try {
    const resp = await CheckListApi.addNewTaskAPI(cardId, task);
    const newCheckList = [...cards.checkList, resp.data];
    dispatch(cardsAC.addNewTask(newCheckList));
    const { columns } = getState().columns;
    const ColumnsAfterUpdate = columns.map(column => (
        column._id === columnId
          ? {
            ...column, cards: column.cards.map(item => {
              if (item._id === cardId) {
                return { ...item, countTask: item.countTask + 1 };
              } else return item;
            })
          }
          : column
      )
    );
    dispatch(columnsAC.cardUpdate(ColumnsAfterUpdate));
  } catch (error) {
    console.warn(error, "server error");
  }
};

export const TaskDelete = (cardId, checkListId, columnId) => async (dispatch, getState) => {
  const { cards } = getState().cards;
  const checkListAfterDelete = cards.checkList.filter(item => item._id !== checkListId);
  try {
    dispatch(cardsAC.deleteTask(checkListAfterDelete));
    const { columns } = getState().columns;
    const ColumnsAfterUpdate = columns.map(column => (
        column._id === columnId
          ? {
            ...column, cards: column.cards.map(item => {
              if (item._id === cardId) {
                return { ...item, countTask: item.countTask - 1 };
              } else return item;
            })
          }
          : column
      )
    );
    dispatch(columnsAC.cardUpdate(ColumnsAfterUpdate));
    await CheckListApi.deleteTaskAPI(cardId, checkListId);
  } catch (error) {
    console.warn(error, "server error");
  }
};


export const updateTaskTitle = (taskTitle, checkListId) => async (dispatch, getState) => {
  const { cards } = getState().cards;
  try {
    await CheckListApi.updateTaskTitleAPI(taskTitle, checkListId);
    const checkListAfterUpdate = cards.checkList.map(item => (
      item._id === checkListId
        ? { ...item, task: taskTitle }
        : item
    ));
    dispatch(cardsAC.updateTask(checkListAfterUpdate));
  } catch (error) {
    console.warn(error, "server error");
  }
};

export const updateTaskValue = (taskDone, checkListId, cardId, columnId) => async (dispatch, getState) => {
  const { cards } = getState().cards;
  try {
    await CheckListApi.updateValueTaskAPI(taskDone, checkListId, cardId);
    const checkListAfterUpdate = cards.checkList.map(item => (
      item._id === checkListId
        ? { ...item, done: taskDone }
        : item
    ));
    dispatch(cardsAC.updateTask(checkListAfterUpdate));
    const { columns } = getState().columns;
    const ColumnsAfterUpdate = columns.map(column => (
        column._id === columnId
          ? {
            ...column, cards: column.cards.map(item => {
              if (item._id === cardId) {
                if (taskDone) {
                  return { ...item, doneTask: item.doneTask + 1 };
                } else return { ...item, doneTask: item.doneTask - 1 };
              } else return item;
            })
          }
          : column
      )
    );
    dispatch(columnsAC.cardUpdate(ColumnsAfterUpdate));
  } catch (error) {
    console.warn(error, "server error");
  }
};

export const dragDropCard = (targetColumnId, card, currentColumnId, currentOrder, targetCardId, targetOrder) => async (dispatch, getState) => {
  const { columns } = getState().columns;
  try {
    const newColumns = columns.map(item => {
      if (item._id === targetColumnId) {
        const index = item.sortArr.indexOf(targetOrder) + 1;
        item.sortArr.splice(index, 0, currentOrder);
        return { ...item, cards: [...item.cards, card] };
      }
      if (item._id === currentColumnId) {
        return {
          ...item, cards: item.cards.filter(i => i._id !== card._id),
          sortArr: item.sortArr.filter(i => i !== currentOrder)
        };
      } else return item;
    });
    dispatch(columnsAC.dragCards(newColumns));
    await ColumnsAPI.dragDropCardInColumnAPI(card._id, targetColumnId, currentColumnId, currentOrder, targetCardId, targetOrder);
    await CardsApi.dragDropCardAPI(card._id, targetColumnId);
  } catch (error) {
    console.warn(error, "server error");
  }
};

export const dragDropCardOneColumn = (targetColumnId, card, currentColumnId, currentOrder, targetCardId, targetOrder) => async (dispatch, getState) => {
  const { columns } = getState().columns;
  try {
    const changedColumn = columns.map(item => {
      if (item._id === targetColumnId) {
        const targetIndex = item.sortArr.indexOf(targetOrder);
        const currentIndex = item.sortArr.indexOf(currentOrder);
        item.sortArr.splice(currentIndex, 1);
        item.sortArr.splice(targetIndex, 0, currentOrder);
        return { ...item, sortArr: item.sortArr };
      } else return item;
    });
    dispatch(columnsAC.dragCardsOneColumn(changedColumn));
    await ColumnsAPI.dragDropCardInOneColumnAPI(card, card._id, targetColumnId, currentColumnId, currentOrder, targetCardId, targetOrder);
  } catch (error) {
    console.warn(error, "server error");
  }
};

export const dragDropCardToEmptyColumn = (card, targetColumnId, currentColumnId) => async (dispatch, getState) => {
  const { columns } = getState().columns;
  try {
    const columnsNew = columns.map(item => {
      if (item._id === targetColumnId) {
        item.sortArr.splice(0, 0, card.order);
        return { ...item, cards: [...item.cards, card] };
      }
      if (item._id === currentColumnId) {
        return {
          ...item, cards: item.cards.filter(i => i._id !== card._id),
          sortArr: item.sortArr.filter(i => i !== card.order)
        };
      } else return item;
    });
    dispatch(columnsAC.dragCardsToEmptyColumn(columnsNew));
    await ColumnsAPI.dragDropCardInColumnAPIToEmpty(card, targetColumnId, currentColumnId);
    await CardsApi.dragDropCardAPI(card._id, targetColumnId);

  } catch (error) {
    console.warn(error, "server error");
  }
};
