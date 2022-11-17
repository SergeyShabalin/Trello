import {BOARD_TYPES} from "./constants";
import {defaultState} from "./initState";

export default function boardReducer(state = defaultState, {type, payload}) {

  switch (type) {
    case BOARD_TYPES.VIEW_BOARD_TITLE:
      return{...state, boardTitle: payload};

    default:
      return (state);
  }
}