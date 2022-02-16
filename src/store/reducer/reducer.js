import {ADD_TEXT, 
        CHANGE_TEXT, 
        CHANGE_CHECKED, 
        CLEAR_COMPLETED, 
        DELETE_ITEM, 
        IS_OPEN_MODAL,
        MODAL_EDIT,
        MODAL_DEL,
        CLOSE_MODAL, 
        CHANGE_NEW_TEXT,
        ADD_NEW_TEXT} from "../actions";
  
const toDoState = {
    list: [],
    text: "",
    isModalOpen: false ,
    modalText: "",
    modalContent: {},
    newText: "",
    newModalText: ""
}

export const Reducer = ( state = toDoState, action ) => {


    switch( action.type ){
        case CHANGE_TEXT: 
            return{ ...state, text: action.payload };
        case ADD_TEXT:
            return{ ...state, list: action.payload, text: ""}
        case CHANGE_CHECKED:
            return { ...state, list: action.payload }
        case CLEAR_COMPLETED:
            return { ...state, list: action.payload }
        case DELETE_ITEM:
            return { ...state, list: action.payload }
        case IS_OPEN_MODAL:
            return { ...state, isModalOpen: true , modalText: action.payload}
        case MODAL_DEL:
            return { ...state, modalContent: action.payload}
        case MODAL_EDIT:
            return { ...state, modalContent: action.payload}
        case CLOSE_MODAL:
            return { ...state, isModalOpen: false}
        case CHANGE_NEW_TEXT:
            return { ...state, newModalText: action.payload}
        case ADD_NEW_TEXT:
            return { ...state, list: action.payload}    
        default: 
            return state;
    } 
}