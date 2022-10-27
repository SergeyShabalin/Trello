import { CARD_TYPES } from "./constants";

export const cardsAC = {
  viewInfoCard: (payload) => ({ type: CARD_TYPES.VIEW_INFO_CARD, payload }),
  addNewTask: (payload)=>({type: CARD_TYPES.ADD_NEW_TASK, payload})
};