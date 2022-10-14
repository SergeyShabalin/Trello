const VIEW_ALL_CARD = 'VIEW_ALL_CARD'


const defaultState={
    cards: []
}

export default  function cardsReducer(state = defaultState, action) {

    switch (action.type) {

        case VIEW_ALL_CARD:
            return{...state, cards:[...action.payload]}

        default:
            return (state)
    }
}

export const viewAllCards = (payload)=>({type: VIEW_ALL_CARD, payload})