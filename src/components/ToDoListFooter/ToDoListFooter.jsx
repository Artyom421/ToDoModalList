import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { clearCompleted, isOpenModal, modalDel } from "../../store/actions"
import { Styled } from "./ToDoListFooter.styled"

export const ToDoListFooter = () => {

    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const { list } = state
    const completed = list.filter((item) => item.isCompleted )


    const clear = () => {
        if ( list.filter(item => item.isCompleted).length ) {
            const modalDelContent = {
                button: "YES",
                text: "clear completed", 
            }
            dispatch(isOpenModal())
            dispatch(modalDel(modalDelContent))
        }
        else {
            alert('Verjacvac gorcoxutyunner chkan')
        }
    }


    return (
        <>
            {
              list.length === 0 ? <Styled.Span>ToDo-List is empty</Styled.Span> :
                <Styled.Div>
                    <Styled.Span>{completed.length}/{list.length} completed</Styled.Span>
                    <Styled.Button className="butComl" onClick={() => clear()}>Clear Completed</Styled.Button>
                </Styled.Div>
            }
            
        </>
    )
}