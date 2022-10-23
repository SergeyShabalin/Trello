import CardsApi from "../../api/CardsApi";
import { cardsAC } from "../cards/actions";
import { columnsAC } from "../columns/actions";


export const addNewCard = (columnId, title) => async (dispatch, getState) => {
  const { columns } = getState().columns;

  try {
    const resp = await CardsApi.addNewCardAPI(columnId, title);

    const columnsForAddCard = columns.map(item => (
      item._id === resp.data.column_id
        ? { ...item, cards: [...item.cards, resp.data] }
        : item)
    );

    dispatch(columnsAC.cardsAdd(columnsForAddCard));
  } catch (error) {
    console.warn(error, "server error");
  }
};

export const deleteCard = (cardId, columnId) => async (dispatch, getState) => {
  const { columns } = getState().columns;
  const ColumnsAfterDelete = columns.map(column => (
    column._id === columnId
      ? {
        ...column, cards: column.cards.filter(item => (
          item._id !== cardId
            ? item
            : null
        ))
      }
      : column
  ));

  try {
    dispatch(columnsAC.cardDelete(ColumnsAfterDelete));
    await CardsApi.deleteCardAPI(cardId);
  } catch (error) {
    console.warn(error, "server error");
  }
};


export const updateCard = (cardId, title) => async (dispatch) => {
  console.log(cardId, title);
  try {
    await CardsApi.updateCardAPI(cardId, title);


  } catch (error) {
    console.warn(error, "server error");
  }
};

