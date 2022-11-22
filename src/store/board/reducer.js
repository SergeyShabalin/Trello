import { BOARD_TYPES } from "./constants";
import { defaultState } from "./initState";

export default function boardReducer(state = defaultState, { type, payload }) {

  switch (type) {
    case BOARD_TYPES.VIEW_BOARD:
      return { ...state, boards: payload };

    case BOARD_TYPES.VIEW_ALL_BOARD:
      return { ...state, allBoards: payload };

    default:
      return (state);
  }
}