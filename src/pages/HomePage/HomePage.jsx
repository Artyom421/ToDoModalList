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

    const click1 = (result) => {
        dispatch(click_1(result))
    }
    const click2 = (result) => {
        dispatch(click_2(result))
    }

    return (
        <div>
            <h1>This is HomePage</h1>
            <h2 onClick={() => goToToDoListPage("/ToDoListPage")} style={{cursor:"pointer"}}>GO TO ToDoList</h2>
            <button onClick={() => click1('click-1')}>click 1</button>
            <button onClick={() => click2('click-2')}>click 2</button>
            <p>{click}</p>
        </div>
    )
}

