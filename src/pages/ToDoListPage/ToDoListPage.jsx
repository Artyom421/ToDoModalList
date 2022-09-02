import { ToDoListHeader } from "../../components/ToDoListHeader"
import { ToDoListFooter } from "../../components/ToDoListFooter"
import { ToDoListModal } from "../../components/ToDoListModal"
import { ToDoListBody } from "../../components/ToDoListBody"
import { Styled } from "./ToDoListPage.styled"
import { Navigation } from "../../components/Navigation"


export const ToDoListPage = () => {

    return (
        <Styled.Root>
            <Styled.Div>
                <Styled.Ptag>This is ToDoListPage</Styled.Ptag>
                <Navigation/>
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