import { defaultState } from "./initState";
import { CARD_TYPES } from "./constants";

export default function cardsReducer(state = defaultState, { type, payload }) {

  switch (type) {

    case CARD_TYPES.VIEW_INFO_CARD:
      return { ...state, cards: payload };

     case CARD_TYPES.CHANGES_TASKS:
       return { ...state,  cards:{ ...state.cards, checkList: payload}};

    case CARD_TYPES.CHANGE_DESCRIPTION:
      return { ...state,  cards:{ ...state.cards, description: payload}};

    default:
      return (state);
  }
}