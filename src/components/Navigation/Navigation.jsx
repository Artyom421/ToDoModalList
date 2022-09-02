import { useHistory } from "react-router"

export const Navigation = () => {

    const history = useHistory()

    return (
        <nav>
            <h2 onClick={() => history.push("/ToDoListPage")} style={{cursor:"pointer"}}>GO TO ToDoList</h2>
            <h2 onClick={() => history.push("/PersonListPage")} style={{cursor:"pointer"}}>GO TO PersonList</h2>
            <h2 onClick={() => history.push("/ImagesListPage")} style={{cursor:"pointer"}}>GO TO ImagesList</h2>
            <h2 onClick={() => history.push("/XoPage")} style={{cursor:"pointer"}}>GO TO X-O</h2>
        </nav>
    )
}