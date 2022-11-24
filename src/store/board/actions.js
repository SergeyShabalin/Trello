import {BOARD_TYPES} from "./constants";


export const BoardAC = {
  viewBoard: (payload) => ({type: BOARD_TYPES.VIEW_BOARD, payload}),
  viewAllBoards: (payload) => ({type: BOARD_TYPES.VIEW_ALL_BOARD, payload}),
  addNewBoard: (payload) => ({type: BOARD_TYPES.ADD_NEW_BOARD, payload}),
  updateBoard: (payload) => ({type: BOARD_TYPES.UPDATE_BOARD, payload}),
  updateAllBoards:  (payload) => ({type: BOARD_TYPES.UPDATE_ALL_BOARD, payload}),
 };