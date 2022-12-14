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

    case CARD_TYPES.CHANGE_DECISION_DATE:
      return { ...state,  cards:{ ...state.cards, decisionDate: payload}};

    case CARD_TYPES.CARDS_IS_LOADING_CHANGE:
      return { ...state, isLoading: payload};

      case CARD_TYPES.CARDS_MODAL_IS_LOADING_CHANGE:
      return { ...state, isCardModalLoading: payload};

    default:
      return (state);
  }
}