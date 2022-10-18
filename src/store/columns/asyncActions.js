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

export const updateColumn = (columnId, data) => async (dispatch, getState) => {

    try {
        await ColumnsAPI.updateColumnAPI(columnId, data)
        const store = getState().columns

        const columnAfterUpdate = store.columns.filter(item => item._id === columnId)

        columnAfterUpdate.map(item => {
            item.header = data.header
        })
        let after = columnAfterUpdate.map(item => {
            return (item)
        })

        const my_array = getState().columns.columns;
        const start_index = store.columns.findIndex(item => item._id === columnId);
        const number_of_elements_to_remove = 1;
        my_array.splice(start_index, number_of_elements_to_remove, after[0]);

        dispatch(columnsAC.columnUpdate(my_array))
    } catch (error) {
        console.warn(error, 'server error');
    }
}

