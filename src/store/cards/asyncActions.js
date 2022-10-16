import {Api} from "../../api";
import {cardsAC} from "../cards/actions";

export const getALLCard = () => async (dispatch) => {
    try {
        const resp = await Api.get(`/cards`)
        dispatch(cardsAC.viewAllCards(resp.data))
    } catch (error) {
        console.warn(error, 'server error');
    }
}
