import { CARD_TYPES } from "./constants";

export const cardsAC = {
  viewInfoCard: (payload) => ({ type: CARD_TYPES.VIEW_INFO_CARD, payload }),
  clearInfoCard: (payload) => ({ type: CARD_TYPES.VIEW_INFO_CARD, payload }),
  addNewTask: (payload)=>({type: CARD_TYPES.CHANGES_TASKS, payload}),
  deleteTask: (payload)=>({type: CARD_TYPES.CHANGES_TASKS, payload}),
  updateTask: (payload)=>({type: CARD_TYPES.CHANGES_TASKS, payload}),
  updateDescription: (payload)=>({type: CARD_TYPES.CHANGE_DESCRIPTION, payload}),
  updateDecisionDate: (payload)=>({type: CARD_TYPES.CHANGE_DECISION_DATE, payload}),
  isLoading: (payload)=>({type: CARD_TYPES.CARDS_IS_LOADING_CHANGE, payload}),
  isCardModalLoader: (payload)=>({type: CARD_TYPES.CARDS_MODAL_IS_LOADING_CHANGE, payload}),
};
