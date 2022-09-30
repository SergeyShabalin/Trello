import {Api} from "../../Api";
import {viewAllColumns} from "../reducers/column-reducer";

export function axiosColumns() {
    return function (dispatch) {
        Api.get(`/columns`).then((resp) => {
            dispatch(viewAllColumns(resp.data))
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }
}