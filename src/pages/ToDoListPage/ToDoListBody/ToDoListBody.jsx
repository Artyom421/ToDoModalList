import { useDispatch, useSelector } from "react-redux"
import { changeChacked, isOpenModal, modalEdit,modalDel } from "../../../store/actions"

export const ToDoListBody = () => {

    

    

    const dispatch = useDispatch()
    const state = useSelector(( state ) => state)
    const { list, modal } = state

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
        <div>
            {
                list.map(( item , index )=> (
                    <div key={item.id}>
                        <label >
                            {index + 1}
                            <input type="checkbox" onClick={(e) => changeInputChecked(e.target.checked, index) }/>
                            {item.text}
                            <button onClick={() => openModalDel(item.text, index) }>del</button>
                            <button onClick={() => openModalEdit(item.text, index) }>edit</button>
                        </label>
                    </div>
                ))
            }
        </div>
    )
}