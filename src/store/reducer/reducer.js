import { ADD_TEXT, CHANGE_TEXT, CHANGE_CHECKED, CLEAR_COMPLETED, DELETE_ITEM } from "../actions";
  
const toDoState = {
    list: [],
    text: '',
}

export const Reducer = ( state = toDoState, action ) => {

    const stateClone = JSON.parse(JSON.stringify(state))
    const { list, text } = stateClone

    switch( action.type ){
        case CHANGE_TEXT: 
            return{ ...state, text: action.payload };
        case ADD_TEXT:
            if(text === ''){
                alert("Մուտքային դաշտը դատարկ Է")
            }else{
                list.push( { text, isCompleted: false } )
                return{ ...state, list, text: ""}
            }
        case CHANGE_CHECKED:
            return { ... state, list: action.payload }
        case CLEAR_COMPLETED:
            return { ...state, list: action.payload }
        case DELETE_ITEM:
            return { ...state, list: action.payload }
        default: 
            return state;
        
    } 
}