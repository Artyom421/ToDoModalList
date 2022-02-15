import { useHistory } from "react-router"
import { ToDoListHeader } from "./ToDoListHeader"
import { ToDoListBody } from "./ToDoListBody"
import { ToDoListFooter } from "./ToDoListFooter"
import { ToDoListModal } from "./ToDoListModal"


export const ToDoListPage = () => {

    const history = useHistory()
    const goToHomePage = (value) => {
        history.push(value)
    }

    return (
        <>
            <div>
                <h1>This is ToDoListPage</h1>
                <h2 onClick={() => goToHomePage('/')} style={{cursor:"pointer"}}>GO TO HomePage</h2>
            </div>
            <div>
                <ToDoListHeader/>
                <ToDoListBody/>
                <ToDoListFooter/>
                <ToDoListModal/>
            </div>
        </>

    )
}