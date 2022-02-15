import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { changeText, addText } from "../../../store/actions"

export const ToDoListHeader = () => {

    const dispatch = useDispatch();
    const state = useSelector( (state) => state);
    const { text } = state;

    const changeValue = (value) => {
        dispatch(changeText(value))
    }

    const add = () => {
        dispatch(addText())
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                add();
            }}>
                <input type="text" value={text} onChange={(e) => changeValue(e.target.value)}/>
                <button>ADD</button>
            </form>
        </div>
    )
}