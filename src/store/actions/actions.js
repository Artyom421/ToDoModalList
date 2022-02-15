export const CHANGE_TEXT = "CHANGE_TEXT";
export const ADD_TEXT = "ADD_TEXT";
export const CHANGE_CHECKED = "CHANGE_CHECKED"
export const CLEAR_COMPLETED = "CLEAR_COMPLETED"
export const DELETE_ITEM = "CLEAR_COMPLETED"

export const changeText = ( payload ) => {
    return { type: CHANGE_TEXT, payload }
}

export const addText = () => {
    return { type: ADD_TEXT}
}

export const changeChacked = ( payload ) => {
    return { type: CHANGE_CHECKED, payload }
}

export const clearCompleted = ( payload ) => {
    return { type: CLEAR_COMPLETED, payload }
}

export const deleteItem = ( payload ) => {
    return { type: DELETE_ITEM, payload }
}