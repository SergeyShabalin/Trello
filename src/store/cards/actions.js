import {CARDTYPES} from './constants'

export const cardsAC = {
    viewAllCards: (payload) => ({type: CARDTYPES.VIEW_ALL_CARD, payload})
}