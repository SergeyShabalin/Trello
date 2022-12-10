import { BOARD_TYPES } from "./constants";
import { defaultState } from "./initState";

export default function boardReducer(state = defaultState, { type, payload }) {

  switch (type) {
    case BOARD_TYPES.VIEW_BOARD:
      return { ...state, currentBoard: payload };

    case BOARD_TYPES.VIEW_ALL_BOARD:
      return { ...state, allBoards: payload };

    case BOARD_TYPES.ADD_NEW_BOARD:
      return { ...state, currentBoard: payload };

    case BOARD_TYPES.UPDATE_BOARD:
      return { ...state, currentBoard: { title: payload} };

    case BOARD_TYPES.UPDATE_ALL_BOARD:
      return { ...state, allBoards: payload };

    case BOARD_TYPES.CHANGE_IS_ERROR:
      return { ...state, isErrorServer: payload };

    case BOARD_TYPES.IS_LOADING_CHANGE:
      return { ...state, isLoading: payload };

    default:
      return (state);
  }
}