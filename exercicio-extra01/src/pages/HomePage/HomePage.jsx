import { useNavigate } from "react-router-dom"

export function HomePage(){

const navigate = useNavigate();

const irParaTarefas = () =>{
    navigate("/todolist")
}


return(
    <>
    <h1>Bem vindo(a)!</h1>
    <button
    onClick={irParaTarefas}> Minhas Tarefas</button>
    </>
)

}