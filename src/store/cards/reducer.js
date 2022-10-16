import {defaultState} from './initState'
import {CARD_TYPES} from './constants'

export default  function cardsReducer(state = defaultState, {type, payload}) {

    switch (type) {

        case CARD_TYPES.VIEW_ALL_CARD:
            return{...state, cards:[...payload]}

        default:
            return (state)
    }
}