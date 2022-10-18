import {COLUMNS_TYPES} from "./constants";

export const columnsAC = {
    viewAllColumns: (payload) => ({type: COLUMNS_TYPES.VIEW_ALL_COLUMNS, payload}),
    addNewColumn: (payload) => ({type: COLUMNS_TYPES.ADD_NEW_COLUMN, payload}),
    columnDelete: (payload) => ({type: COLUMNS_TYPES.VIEW_ALL_COLUMNS, payload}),
    columnUpdate: (payload, payload2) => ({type: COLUMNS_TYPES.UPDATE_COLUMN, payload}),
}