import {Api} from "../../Api";
import {addAllColumns} from "../reducers/column-reducer";

export function axiosColumns() {
    return function (dispatch) {
        Api.get(`/columns`).then((resp) => {
            dispatch(addAllColumns(resp.data))
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }
}