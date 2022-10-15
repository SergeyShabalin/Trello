import {Api} from "../../Api";
import {viewAllCards} from "../reducers/card-reducer";


export function getCard(card = '') {

    return function (dispatch) {
        Api.get(`/cards/${card}`).then((resp) => {

        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }
}

// export function getALLCard(){
//
//     return function (dispatch) {
//         Api.get(`/cards`).then((resp) => {
//             dispatch(viewAllCards(resp.data))
//         }).catch((error) => {
//             console.warn(error, 'server error');
//         })
//     }
// }
export const getALLCard = () => async (dispatch) => {
    try {
        const resp = await Api.get(`/cards1`)
        dispatch(viewAllCards(resp.data))
    } catch (error) {
        console.warn(error.response.status, 'server error');
    } finally {

    }
}
