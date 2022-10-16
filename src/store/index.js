import {createStore, combineReducers, applyMiddleware} from 'redux'
import cardReducer from  "./cards/reducer";
import columnReducer from  "./columns/reducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    cards: cardReducer,
    columns: columnReducer,

})

export const store = createStore(rootReducer, applyMiddleware(thunk))