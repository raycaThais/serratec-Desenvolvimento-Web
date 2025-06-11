import { useState } from "react"

export function ToDoList() {
    const [tarefa, setTarefa] = useState("");
    const [listaTarefas, setListaTarefas] = useState([]);

    const handleAdicionar = () => {
        if (tarefa.trim() === "") 
        return;
        const novaLista = [...listaTarefas, tarefa]
        setListaTarefas(novaLista)
        setTarefa("")

    }

    const handleTecla = (e) => {
        if(e.key === "Enter")
          handleAdicionar()

    }

    const handleRemover = (index) => {
        const listaNova = listaTarefas.filter((_,i) => i !== index)
        setListaTarefas(listaNova)

    }

    return (
        <>
            <input
                type="text"
                onChange={(e) => setTarefa(e.target.value)}
                onKeyDown={handleTecla}
                value={tarefa}
            />

            <button
                onClick={handleAdicionar}>
                Adicionar Tarefa
            </button>

            {
                listaTarefas.map((task, index) => (
                    <p key={index}>
                        <input type="checkbox" />
                        {task}
                        <button
                            onClick={() => handleRemover(index)}>
                            Remover
                        </button>
                    </p>

                ))
            }


        </>

    )

}