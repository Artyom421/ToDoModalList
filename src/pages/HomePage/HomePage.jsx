import { useHistory } from "react-router"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { click_1, click_2 } from "../../store/actions";


export const HomePage = () => {

    const history = useHistory()
    const goToToDoListPage = (value) => {
        history.push(value)
    }

    const state = useSelector((state) => state)
    const { click } = state
    const dispatch = useDispatch()

    return (
        <div>
            <h1>This is HomePage</h1>
            <h2 onClick={() => goToToDoListPage("/ToDoListPage")} style={{cursor:"pointer"}}>GO TO ToDoList</h2>
            <button onClick={() => dispatch(click_1("click-1"))}>click 1</button>
            <button onClick={() => dispatch(click_2("click-2"))}>click 2</button>
            <p>{click}</p>
        </div>
    )
}

