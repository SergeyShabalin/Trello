import {defaultState} from './initState'
import {CARDTYPES} from './constants'

export default  function cardsReducer(state = defaultState, {type, payload}) {

    switch (type) {

        case CARDTYPES.VIEW_ALL_CARD:
            return{...state, cards:[...payload]}

        default:
            return (state)
    }
}