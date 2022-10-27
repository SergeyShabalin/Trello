import { defaultState } from "./initState";
import { CARD_TYPES } from "./constants";

export default function cardsReducer(state = defaultState, { type, payload }) {
  switch (type) {

    case CARD_TYPES.VIEW_INFO_CARD:
      return { ...state, cards: payload };

     case CARD_TYPES.ADD_NEW_TASK:
       return { ...state,  cards:{checkList: payload}};

    default:
      return (state);
  }
}