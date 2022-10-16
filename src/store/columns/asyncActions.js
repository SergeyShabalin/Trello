import {Api} from "../../Api";
import {columnsAC} from "../columns/actions";

export const getAllColumns = () => async (dispatch) => {
    try {
        const resp = await Api.get(`/columns`)
        dispatch(columnsAC.viewAllColumns(resp.data))
    } catch (error) {
        console.warn(error, 'server error');
    }
}

export const addColumn = (header) => async (dispatch) => {
    try {
        const resp = await Api.post(`/columns/new`, header)
        dispatch(columnsAC.addNewColumn(resp.data))
    } catch (error) {
        console.warn(error, 'server error');
    }
}

export const deleteColumn = (columnId) => async (dispatch) => {
    try {
        await Api.delete(`/columns/delete/${columnId}`)
        dispatch(getAllColumns())
    } catch (error) {
        console.warn(error, 'server error');
    }
}

export const updateColumn = (columnId, data) => async (dispatch) => {
    try {
        await Api.patch(`/columns/update/${columnId}`, data)
        dispatch(getAllColumns())
    } catch (error) {
        console.warn(error, 'server error');
    }
}

