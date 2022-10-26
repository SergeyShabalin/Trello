import CardsApi from "../../api/CardsApi";
import { columnsAC } from "../columns/actions";


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
  const ColumnsAfterDelete = columns.map(column => {
    if (column._id === columnId) {
      return {
        ...column, cards: column.cards.filter(item => {
          if (item._id !== cardId) {
            return item;
          } else return false;
        })
      };
    } else return column;
  });

  try {
    dispatch(columnsAC.cardDelete(ColumnsAfterDelete));
    await CardsApi.deleteCardAPI(cardId);
  } catch (error) {
    console.warn(error, "server error");
  }
};


export const updateCard = (cardId, title, columnId, description) => async (dispatch, getState) => {

  console.log( 'cardId', cardId,  'title', title,  'columnId', columnId, 'desc', description);
  const { columns } = getState().columns;
  const ColumnsAfterUpdate = columns.map(column => {
    if (column._id === columnId) {
      return {
        ...column, cards: column.cards.map(item => {
          if (item._id === cardId) {
            return { ...item, header: title, description: description };
          } else return item;
        })
      };
    } else return column;
  });
  try {
     dispatch(columnsAC.cardUpdate(ColumnsAfterUpdate));
    await CardsApi.updateCardAPI(cardId, title, description);
  } catch (error) {
    console.warn(error, "server error");
  }
};

