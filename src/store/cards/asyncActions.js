import CardsApi from "../../api/CardsApi";
import { columnsAC } from "../columns/actions";
import { cardsAC } from "./actions";
import CheckListApi from "../../api/CheckListApi";


export const addNewCard = (columnId, title) => async (dispatch, getState) => {
  const { columns } = getState().columns;
  try {
    const resp = await CardsApi.addNewCardAPI(columnId, title);
    const columnsForAddCard = columns.map(item => {
      if (item._id === resp.data.column_id) {
        return { ...item, cards: [...item.cards, resp.data] };
      } else return item;
    });
    dispatch(columnsAC.cardsAdd(columnsForAddCard));
  } catch (error) {
    console.warn(error, "server error");
  }
};

export const deleteCard = (cardId, columnId) => async (dispatch, getState) => {
    const { columns } = getState().columns;
    const ColumnsAfterDelete = columns.map(column => column._id === columnId
      ? { ...column, cards: column.cards.filter(item => item._id !== cardId) }
      : column
    );

    try {
      dispatch(columnsAC.cardDelete(ColumnsAfterDelete));
      await CardsApi.deleteCardAPI(cardId);
    } catch (error) {
      console.warn(error, "server error");
    }
  }
;


export const updateCard = (newTitle, cardIndex, columnIndex, cardId, columnId) => async (dispatch, getState) => {

  const { columns } = getState().columns;
//TODO делай красиво!
  const ColumnsAfterUpdate = columns.map(column => {
    if (column._id === columnId) {
      return {
        ...column, cards: column.cards.map(item => {
          if (item._id === cardId) {
            return { ...item, header: newTitle };
          } else return item;
        })
      };
    } else return column;
  });

  try {
    dispatch(columnsAC.cardUpdate(ColumnsAfterUpdate));
    await CardsApi.updateCardAPI(cardId, newTitle);
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
    const clearCard = {checkList: [{_id:1}],header: '', description: '' }
    dispatch(cardsAC.clearInfoCard(clearCard));
  } catch (error) {
    console.warn(error, "server error");
  }
};

export const NewTaskAdd = (cardId, task) => async (dispatch, getState) => {
  const { cards } = getState().cards;
  try {
    const resp = await CheckListApi.addNewTaskAPI(cardId, task);
    const newCheckList = [...cards.checkList, resp.data];
    dispatch(cardsAC.addNewTask(newCheckList));
  } catch (error) {
    console.warn(error, "server error");
  }

};

export const TaskDelete = (cardId, checkListId) => async (dispatch, getState) => {
  const { cards } = getState().cards;
  const checkListAfterDelete = cards.checkList.filter(item => item._id !== checkListId);
  try {
    dispatch(cardsAC.deleteTask(checkListAfterDelete));
    await CheckListApi.deleteTaskAPI(cardId, checkListId);
  } catch (error) {
    console.warn(error, "server error");
  }

};


export const updateTaskValue = (taskTitle, taskDone, checkListId) => async (dispatch, getState) => {
  const { cards } = getState().cards;


  try {
    if (taskTitle !=='') {
      const checkListAfterUpdate = cards.checkList.map(item => {
        if (item._id === checkListId) {
          return { ...item, task: taskTitle }
        } else return item
      })
      dispatch(cardsAC.updateTask(checkListAfterUpdate));
    }
    await CheckListApi.updateTaskAPI(taskTitle, taskDone, checkListId);
  } catch (error) {
    console.warn(error, "server error");
  }

};