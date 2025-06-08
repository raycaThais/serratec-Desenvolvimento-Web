import { useEffect, useState } from "react";

export function BoasVindasPage() {
const[idade,setIdade] = useState("")
const[nome,setNome] = useState("")

useEffect(() => {
const nomeSalvo = localStorage.getItem("nome")
const idadeSalva = localStorage.getItem("idade")

setNome(nomeSalvo)
setIdade(idadeSalva)
}, [])

return(
    <div>
        <h1>Boas vindas, {nome}!</h1>
        <p>Você tem {idade} anos!</p>
    </div>
)

}