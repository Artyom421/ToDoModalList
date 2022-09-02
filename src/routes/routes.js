import { HomePage } from "../pages/HomePage";
import { PersonListPage } from "../pages/PersonListPage";
import { ToDoListPage } from "../pages/ToDoListPage";
import { ImagesListPage } from "../pages/ImagesListPage";
import { XoPage } from "../pages/XoPage";

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
    {
        path: "/XoPage",
        exact: true ,
        page: () => <XoPage/>
    },
]