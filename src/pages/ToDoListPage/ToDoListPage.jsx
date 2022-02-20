import { useHistory } from "react-router"
import { ToDoListHeader } from "../../components/ToDoListHeader"
import { ToDoListFooter } from "../../components/ToDoListFooter"
import { ToDoListModal } from "../../components/ToDoListModal"
import { ToDoListBody } from "../../components/ToDoListBody"
import { Styled } from "./ToDoListPage.styled"


export const ToDoListPage = () => {

    const history = useHistory()
    const goToHomePage = (value) => {
        history.push(value)
    }

    return (
        <Styled.Root>
            <Styled.Div>
                <Styled.Ptag onClick={() => goToHomePage('/')} style={{cursor:"pointer"}}>Back To HomePage</Styled.Ptag>
                <Styled.Ptag>This is ToDoListPage</Styled.Ptag>
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