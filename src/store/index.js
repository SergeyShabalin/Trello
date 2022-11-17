import { createStore, combineReducers, applyMiddleware } from "redux";
import cardReducer from "./cards/reducer";
import columnReducer from "./columns/reducer";
import boardReducer from "./board/reducer";

import thunk from "redux-thunk";


const rootReducer = combineReducers({
  cards: cardReducer,
  columns: columnReducer,
  board: boardReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));