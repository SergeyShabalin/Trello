import {BOARD_TYPES} from "./constants";


export const BoardAC = {
  viewBoard: (payload) => ({type: BOARD_TYPES.VIEW_BOARD, payload}),
  viewAllBoards: (payload) => ({type: BOARD_TYPES.VIEW_ALL_BOARD, payload}),
 };