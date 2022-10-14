const VIEW_ALL_COLUMNS = 'VIEW_ALL_COLUMNS'
const ADD_NEW_COLUMN = 'ADD_NEW_COLUMN'
const GET_ID_COLUMN ='ID_COLUMN'

const defaultState={
    columns: [],
    idColumn: ''
}

export default  function columnReducer(state = defaultState, action) {

    switch (action.type) {
        case VIEW_ALL_COLUMNS:
            return{...state, columns:[...action.payload]}

        case ADD_NEW_COLUMN:
            return{...state, columns:[...state.columns, action.payload]}

        case GET_ID_COLUMN:
            return{...state, idColumn: action.payload}

        default:
            return (state)
    }
}

export const viewAllColumns = (payload)=> ({type: VIEW_ALL_COLUMNS, payload})
export const addNewColumn = (payload)=> ({type: ADD_NEW_COLUMN, payload})
export const getIdColumn = (payload)=> ({type: GET_ID_COLUMN, payload})
