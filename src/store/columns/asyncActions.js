import ColumnsAPI from "../../api/ColumnsAPI";
import {columnsAC} from "../columns/actions";


export const getAllColumns = () => async (dispatch) => {
    try {
        const resp = await ColumnsAPI.getAllColumnsAPI()
        dispatch(columnsAC.viewAllColumns(resp.data))
    } catch (error) {
        console.warn(error, 'server error');
    }
}

export const addColumn = (header) => async (dispatch) => {
    try {
        const resp = await ColumnsAPI.addNewColumnAPI(header)
        dispatch(columnsAC.addNewColumn(resp.data))
    } catch (error) {
        console.warn(error, 'server error');
    }
}

export const deleteColumn = (columnId) => async (dispatch, getState) => {
    const store = getState().columns
    try {
        await ColumnsAPI.deleteColumnAPI(columnId)
        const columnsAfterDelete = (store.columns.filter(item => item._id !== columnId))
        dispatch(columnsAC.columnDelete(columnsAfterDelete))
    } catch (error) {
        console.warn(error, 'server error');
    }
}

export const updateColumn = (columnId, data) => async (dispatch) => {
    try {
        await ColumnsAPI.updateColumnAPI(columnId, data)
        dispatch(getAllColumns())
    } catch (error) {
        console.warn(error, 'server error');
    }
}

