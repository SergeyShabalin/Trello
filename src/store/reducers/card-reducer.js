const VIEW_ALL_CARD = 'VIEW_ALL_CARD'


const defaultState={
    cards: []
}

export default  function cardsReducer(state = defaultState, action) {
    switch (action.type) {

        case VIEW_ALL_CARD:
            return{...state, cards:[...state.cards, ...action.cards]}

        default:
            return (state)
    }
}

export const addAllCards = (payload)=>({type: VIEW_ALL_CARD, payload})