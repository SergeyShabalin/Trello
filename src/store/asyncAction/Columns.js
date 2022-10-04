import {Api} from "../../Api";
import {addNewColumn, viewAllColumns, deleteOneColumn} from "../reducers/column-reducer";

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
            console.log('data',resp.data)
            dispatch(addNewColumn(resp.data))
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }
}

export  function deleteColumn(columnId) {
    return function (dispatch) {
        console.log(columnId)
        Api.delete(`/columns/delete`).then((resp) => {
            dispatch(deleteOneColumn(resp.data))
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }
}