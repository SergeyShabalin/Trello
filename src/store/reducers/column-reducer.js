const VIEW_ALL_COLUMNS = 'VIEW_ALL_COLUMNS'

const defaultState={
    columns: []
}


// пофиксить добавление новых таких же колонок к старым
export default  function columnReducer(state = defaultState, action) {

    switch (action.type) {

        case VIEW_ALL_COLUMNS:
            return{...state, columns:[...state.columns, ...action.payload]}

        default:
            return (state)
    }
}

export const addAllColumns = (payload)=> ({type: VIEW_ALL_COLUMNS, payload })
