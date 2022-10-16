import {CARD_TYPES} from './constants'

export const cardsAC = {
    viewAllCards: (payload) => ({type: CARD_TYPES.VIEW_ALL_CARD, payload})
}