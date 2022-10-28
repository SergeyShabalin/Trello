import { CARD_TYPES } from "./constants";

export const cardsAC = {
  viewInfoCard: (payload) => ({ type: CARD_TYPES.VIEW_INFO_CARD, payload }),
  clearInfoCard: (payload) => ({ type: CARD_TYPES.VIEW_INFO_CARD, payload }),
  addNewTask: (payload)=>({type: CARD_TYPES.CHANGES_TASKS, payload}),
  deleteTask: (payload)=>({type: CARD_TYPES.CHANGES_TASKS, payload}),
  updateTask: (payload)=>({type: CARD_TYPES.CHANGES_TASKS, payload}),
};