export const CHANGE_TEXT = "CHANGE_TEXT";
export const ADD_TEXT = "ADD_TEXT";
export const CHANGE_CHECKED = "CHANGE_CHECKED"
export const CLEAR_COMPLETED = "CLEAR_COMPLETED"
export const DELETE_ITEM = "CLEAR_COMPLETED"
export const IS_OPEN_MODAL = "IS_OPEN_MODAL"
export const MODAL_EDIT = "MODAL_EDIT"
export const MODAL_DEL = "MODAL_DEL"
export const CLOSE_MODAL = "CLOSE_MODAL"
export const CHANGE_NEW_TEXT = "CHANGE_NEW_TEXT"
export const ADD_NEW_TEXT = "ADD_NEW_TEXT"

export const changeText = ( payload ) => {
    return { type: CHANGE_TEXT, payload }
}

export const addText = ( payload ) => {
    return { type: ADD_TEXT, payload}
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

export const isOpenModal = ( payload) => {
    return { type: IS_OPEN_MODAL, payload }
}

export const modalEdit = ( payload ) => {
    return { type: MODAL_EDIT, payload}
}

export const modalDel = ( payload ) => {
    return { type: MODAL_DEL, payload}
}

export const closeModal = ( payload ) => {
    return { type: CLOSE_MODAL, payload}
}

export const changeNewText = ( payload ) => {
    return { type: CHANGE_NEW_TEXT, payload}
}

export const addNewText = ( payload ) => {
    return { type: ADD_NEW_TEXT, payload}
}