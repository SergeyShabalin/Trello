// import {Api} from "../../Api";
// import {addAllCards} from "../reducers/card-reducer";
//
// export function axiosCards() {
//     return function (dispatch) {
//         Api.get(`/cards/`).then((resp) => {
//             console.log(resp.data)
//             dispatch(addAllCards(resp.data))
//         }).catch((error) => {
//             console.warn(error, 'server error');
//         })
//     }
// }