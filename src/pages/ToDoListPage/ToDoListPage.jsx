import { useHistory } from "react-router"
import { ToDoListHeader } from "./ToDoListHeader"
import { ToDoListBody } from "./ToDoListBody"
import { ToDoListFooter } from "./ToDoListFooter"
import { ToDoListModal } from "./ToDoListModal"
import { Styled } from "./ToDoListPage.styled"


export const ToDoListPage = () => {

    const history = useHistory()
    const goToHomePage = (value) => {
        history.push(value)
    }

    return (
        <Styled.Root>
            <Styled.Div>
                <Styled.Ptag>This is ToDoListPage</Styled.Ptag>
                <Styled.Ptag onClick={() => goToHomePage('/')} style={{cursor:"pointer"}}>GO TO HomePage</Styled.Ptag>
            </Styled.Div>
                <Styled.ToDo>
                    <ToDoListHeader/>
                    <ToDoListBody/>
                    <ToDoListFooter/>
                    <ToDoListModal/>
                </Styled.ToDo>
        </Styled.Root>
        

    )
}