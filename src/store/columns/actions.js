import {COLUMNS_TYPES} from "./constants";

export const columnsAC = {
    viewAllColumns: (payload)=> ({type: COLUMNS_TYPES.VIEW_ALL_COLUMNS, payload}),
    addNewColumn: (payload)=> ({type: COLUMNS_TYPES.ADD_NEW_COLUMN, payload}),
   getIdColumn: (payload)=> ({type: COLUMNS_TYPES.GET_ID_COLUMN, payload})
}