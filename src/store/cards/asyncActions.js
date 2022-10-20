import CardsApi from "../../api/CardsApi";
import {cardsAC} from "../cards/actions";


export const addNewCard = (id, header) => async (dispatch) => {
    try {
        const resp = await CardsApi.addNewCardAPI(id, header)

        // dispatch(cardsAC.viewAllCards(resp.data))
    } catch (error) {
        console.warn(error, 'server error');
    }
}

