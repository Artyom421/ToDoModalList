import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { changeText, addText } from "../../store/actions"
import { Styled } from "./ToDoListHeader.styled"

export const ToDoListHeader = () => {

    const dispatch = useDispatch();
    const state = useSelector(( state ) => state);
    const { text, list } = state;

    const changeValue = (value) => {
        dispatch(changeText(value))
    }

    const add = () => {

        const alertText = `The input field is empty
Pleace enter the text `

        if(text === ''){
            alert(alertText)
            return { ...state};
        }else{
            list.push( { text, isCompleted: false, id: Math.random(),  } )
        dispatch(addText(list))
        }
    }

    return (
        <Styled.Root>
            <Styled.Form onSubmit={(e) => {
                e.preventDefault();
                add();
            }}>
                <Styled.Input type="text" placeholder="Enter text" value={text} onChange={(e) => changeValue(e.target.value)}/>
                <Styled.Button className="add">ADD</Styled.Button>
            </Styled.Form>
        </Styled.Root>
    )
}