import { useDispatch, useSelector } from "react-redux"
import { changeChacked, isOpenModal, modalEdit, modalDel } from "../../../store/actions"
import { Styled } from "./ToDoListBody.styled"

export const ToDoListBody = () => {

    

    

    const dispatch = useDispatch()
    const state = useSelector(( state ) => state)
    const { list } = state

    const changeInputChecked = ( value, index ) => {
        const item = list[index]
        item.isCompleted = value
        dispatch(changeChacked(list))
    }

    const openModalEdit = ( text, index ) => {
        const modalEditContent = {
            button: "EDIT",
            text: "edit",
            index
        }
        dispatch(isOpenModal( text ))
        dispatch(modalEdit(modalEditContent))
    }

    const openModalDel = ( text, index ) => {
        const modalDelContent = {
            button: "YES",
            text: "delete", 
            index
        }
        dispatch(isOpenModal(text))
        dispatch(modalDel(modalDelContent))
    }


    return (
        <Styled.Root>
            {
                list.map(( item , index )=> (
                    
                    <Styled.Label key={item.id}>
                        <Styled.Span>{index + 1}</Styled.Span>
                        <Styled.Input type="checkbox" onClick={(e) => changeInputChecked(e.target.checked, index) }/>
                        <Styled.Ptag>{item.text}</Styled.Ptag>
                        <Styled.Div>
                            <Styled.ButtonDel onClick={() => openModalDel(item.text, index) }>del</Styled.ButtonDel>
                            <Styled.ButtonEdit onClick={() => openModalEdit(item.text, index) }>edit</Styled.ButtonEdit>
                        </Styled.Div>
                    </Styled.Label>
                ))
            }
        </Styled.Root>
    )
}