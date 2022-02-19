import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { changeChacked, isOpenModal, modalEdit, modalDel } from "../../store/actions"
import { Styled } from './ToDoListBody.styled'


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

    const changeStyle = (id) => {
        const listItem = list.filter((item) => item.id === id)[0]
        if(listItem.isCompleted === true){
            listItem.class = 'changeStyle'
            dispatch(changeChacked(list))
        }
        else if(listItem.isCompleted === false ){
            listItem.class = ''
            dispatch(changeChacked(list))
        }
    }

    return (
        <Styled.Root>
            {
                list.map(( item , index )=> (
                    <Styled.RootDiv key={item.id}>
                        <Styled.Label id={item.id}  className={item.class}>
                            <Styled.Span>{index + 1}</Styled.Span>
                            <Styled.Input type="checkbox" onClick={(e) => {changeInputChecked(e.target.checked, index) 
                                                                            changeStyle(item.id)}}/>
                            <Styled.Ptag >{item.text}</Styled.Ptag>
                        </Styled.Label>
                        <Styled.Div>
                            <Styled.ButtonDel className="butDel" onClick={() => openModalDel(item.text, index) }>del</Styled.ButtonDel>
                            <Styled.ButtonEdit className="butEd" onClick={() => openModalEdit(item.text, index) }>edit</Styled.ButtonEdit>
                        </Styled.Div>
                    </Styled.RootDiv>
                ))
            }
        </Styled.Root>
    )
}