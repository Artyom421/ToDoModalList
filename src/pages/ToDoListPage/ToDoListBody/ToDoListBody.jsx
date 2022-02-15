import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { changeChacked, deleteItem } from "../../../store/actions"

export const ToDoListBody = () => {

    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const { list } = state

    const changeInputChecked = (value, index) => {
        const item = list[index]
        item.isCompleted = value
        dispatch(changeChacked(list))
    }

    const del = (index) => {
        list.splice( index, 1)
        dispatch(deleteItem(list))
    }

    return (
        <div>
            {
                list.map((item, index)=> (
                    <div key={index}>
                        <label >
                            {index + 1}
                            <input type="checkbox" onClick={(e) => changeInputChecked(e.target.checked, index) }/>
                            {item.text}
                            <button onClick={() => del(index)}>del</button>
                            <button>edit</button>
                        </label>
                    </div>
                ))
            }
        </div>
    )
}