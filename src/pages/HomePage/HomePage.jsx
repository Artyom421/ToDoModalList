import { useHistory } from "react-router"

export const HomePage = () => {

    const history = useHistory()
    const goToToDoListPage = (value) => {
        history.push(value)
    }

    return (
        <div>
            <h1>This is HomePage</h1>
            <h2 onClick={() => goToToDoListPage("/ToDoListPage")} style={{cursor:"pointer"}}>GO TO ToDoList</h2>
        </div>
    )
}