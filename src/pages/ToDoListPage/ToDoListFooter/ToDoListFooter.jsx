import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { clearCompleted } from "../../../store/actions"

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
        <div>
            <span>{completed.length}/{list.length} completed</span>
            <button onClick={() => clear()}>Clear Completed</button>
        </div>
    )
}