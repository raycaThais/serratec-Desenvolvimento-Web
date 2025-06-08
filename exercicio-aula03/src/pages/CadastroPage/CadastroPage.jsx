import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";

export function CadastroPage(){
const[nome, setNome] = useState("")
const[idade, setIdade] = useState("")

const navigate = useNavigate();

const handleCadastro = (e) => {
 e.preventDefault();
 if (nome.trim() === "" || idade <= 0) {
    alert("Preencha os campos corretamente.")
    return
 }

 localStorage.setItem("nome",nome)
 localStorage.setItem("idade",idade)

 navigate("/boasvindas")
}

    return(
        <form> 
            <Input
            type="text"
            placeholder="Insira seu nome"
            onChange={(e) => setNome(e.target.value)}
            />
            <Input
            placeholder="Insira sua idade"
            onChange={(e) => setIdade(e.target.value)}
            />
            <Button
            type="submit"
            nome="Cadastrar"
            onClick={handleCadastro}
            />


        </form>
    )
}