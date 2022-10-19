import CardsApi from "../../api/CardsApi";
import {cardsAC} from "../cards/actions";


export const addNewCard = (header) => async (dispatch) => {
    console.log(header)

    try {
         await CardsApi.addNewCardAPI(header)

        // dispatch(cardsAC.viewAllCards(resp.data))
    } catch (error) {
        console.warn(error, 'server error');
    }
}

