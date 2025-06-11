import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";
import { ToDoListPage } from "../../pages/ToDoListPage/ToDoListPage";

export function Rotas(){

    return (
    <Routes>
        <Route
        path="/"
        element={<HomePage/>}

        />
        <Route
        path="/todolist"
        element={<ToDoListPage/>}
        />

    </Routes>
    )
}