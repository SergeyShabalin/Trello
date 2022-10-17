import {COLUMNS_TYPES} from "./constants";
import {defaultState} from "./initState";

export default function columnReducer(state = defaultState, {type, payload}) {

    switch (type) {
        case COLUMNS_TYPES.VIEW_ALL_COLUMNS:
            return{...state, columns:payload}

        case COLUMNS_TYPES.ADD_NEW_COLUMN:
            return{...state, columns:[...state.columns, payload]}

        default:
            return (state)
    }
}