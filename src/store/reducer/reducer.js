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
    modal: {},
    newText: ""
}

export const Reducer = ( state = toDoState, action ) => {

    const stateClone = JSON.parse(JSON.stringify(state))
    const { list, text, isModalOpen, modalText, modal, newText } = stateClone

    switch( action.type ){
        case CHANGE_TEXT: 
            return{ ...state, text: action.payload };
        case ADD_TEXT:
            if(text === ''){
                alert("Մուտքային դաշտը դատարկ Է")
                return { ...state};
            }else{
                list.push( { text, isCompleted: false, id: Math.random(),  } )
                return{ ...state, list, text: ""}
            }
        case CHANGE_CHECKED:
            return { ... state, list: action.payload }
        case CLEAR_COMPLETED:
            return { ...state, list: action.payload }
        case DELETE_ITEM:
            return { ...state, list: action.payload }
        case IS_OPEN_MODAL:
            return { ...state, isModalOpen: true , modalText: action.payload}
        case MODAL_DEL:
            return { ...state, modal: action.payload}
        case MODAL_EDIT:
            return { ...state, modal: action.payload}
        case CLOSE_MODAL:
            return { ...state, isModalOpen: false}
        case CHANGE_NEW_TEXT:
            return { ...state, newText: action.payload}
        case ADD_NEW_TEXT:
            return { ...state, list: action.payload}    
        default: 
            return state;
    } 
}