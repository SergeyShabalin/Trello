import {createStore, combineReducers, applyMiddleware} from 'redux'
import cardReducer from  "./reducers/card-reducer";
import columnReducer from  "./reducers/column-reducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    cards: cardReducer,
    columns: columnReducer,

})

export const store = createStore(rootReducer, applyMiddleware(thunk))