import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { clearCompleted } from "../../store/actions"
import { Styled } from "./ToDoListFooter.styled"

export const ToDoListFooter = () => {

    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const { list } = state
    const completed = list.filter((item) => item.isCompleted )
    const noCompleted = list.filter((item) => item.isCompleted == false)


    const clear = () => {
        dispatch(clearCompleted(noCompleted))
    }

    return (
        <>
            {
              list.length === 0 ? <Styled.Span>ToDo-List is empty</Styled.Span> :
              <Styled.Div>
              <Styled.Span>{completed.length}/{list.length} completed</Styled.Span>
              <Styled.Button onClick={() => clear()}>Clear Completed</Styled.Button>
          </Styled.Div>
            }
            
        </>
    )
}