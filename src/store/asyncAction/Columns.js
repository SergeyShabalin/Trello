import {Api} from "../../Api";
import {addNewColumn, viewAllColumns} from "../reducers/column-reducer";

export function getAllColumns() {
    return function (dispatch) {
        Api.get(`/columns`).then((resp) => {
            dispatch(viewAllColumns(resp.data))
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }
}

export  function addColumn(header) {
    return function (dispatch) {
        Api.post(`/columns/new`, header).then((resp) => {
            dispatch(addNewColumn(resp.data))
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }
}

export  function deleteColumn(columnId) {
    return function (dispatch) {
        Api.delete(`/columns/delete/${columnId}`).then((resp) => {
             dispatch(getAllColumns())
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }
}