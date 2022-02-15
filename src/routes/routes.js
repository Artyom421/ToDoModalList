import { HomePage } from "../pages/HomePage";
import { ToDoListPage } from "../pages/ToDoListPage";

export const routes = [
    {
        path: "/",
        exact: true ,
        page: () => <HomePage/>
    },
    {
        path: "/ToDoListPage",
        exact: true ,
        page: () => <ToDoListPage/>
    },
]