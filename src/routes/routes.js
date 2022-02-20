import { HomePage } from "../pages/HomePage";
import { PersonListPage } from "../pages/PersonListPage";
import { ToDoListPage } from "../pages/ToDoListPage";
import { ImagesListPage } from "../pages/ImagesListPage";

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
    {
        path: "/PersonListPage",
        exact: true ,
        page: () => <PersonListPage/>
    },
    {
        path: "/ImagesListPage",
        exact: true ,
        page: () => <ImagesListPage/>
    },
]