const VIEW_ALL_COLUMNS = 'VIEW_ALL_COLUMNS'
const ADD_NEW_COLUMN = 'ADD_NEW_COLUMN'
const DELETE_COLUMN = 'DELETE_COLUMN'

const defaultState={
    columns: []
}


// пофиксить добавление новых таких же колонок к старым
export default  function columnReducer(state = defaultState, action) {

    switch (action.type) {

        case VIEW_ALL_COLUMNS:
            return{...state, columns:[...action.payload]}

        case ADD_NEW_COLUMN:
            return{...state, columns:[...state.columns, action.payload]}

        case DELETE_COLUMN:
            return{...state, columns:[...action.payload]}

        default:
            return (state)
    }
}

export const viewAllColumns = (payload)=> ({type: VIEW_ALL_COLUMNS, payload})
export const addNewColumn = (payload)=> ({type: ADD_NEW_COLUMN, payload})
export const deleteOneColumn = (payload)=> ({type: DELETE_COLUMN, payload})
