import { Navbar } from "../../components/Navbar/navbar";
import styles from "./home.module.css"
import { Input } from "../../components/input/input";
import { Card } from "../../components/Card/card";
import { Button } from "../../components/Button/button";
import { useState } from "react";

export function HomePage() {

  /*  return(
       <h1 className={styles.title}>Home</h1>
       <div className={styles.container}>
        <h1>testezinho</h1>
       </div>
    )*/

  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    setCounter(counter + 1);
  }

  const [nome, setNome] = useState("");
  const handleNome = (e) =>  {
    setNome(e.target.value)
  }

  const [email, setEmail] = useState("");
  const handleEmail = (e) =>  {
    setEmail(e.target.value)
  }

  const [checkbox, setCheckbox] = useState(false);
  const handleCheckbox = (e) =>  {
    console.log(checkbox)
    setCheckbox(!checkbox)
  }
  
  const handleSubmit = (e) => {
    console.log("Enviado:\n" + "Nome: " + nome + "\nEmail: " + email +"\nCheckbox: "+ checkbox)
  }
  

  const filmes = ["Duna", "O Senhor dos Aneis", "Harry Potter", "O Protetor", "Velozes e Furiosos 9"]
  return (
    <div className={styles.container}>
      <Navbar />
      <Input
        type="text"
        placeholder="Escreva seu nome..."
        value={nome}
        onChange={handleNome}
      />
      <Input
        type="text"
        placeholder="Escreva seu email"
        value={email}
        onChange={handleEmail}
      />
      <Input
      type="checkbox"
      value={checkbox}
      onChange={handleCheckbox}
      
      />

      <Button
      type="submit"
      nome="enviar"
      onClick={handleSubmit}
      
      />
      <div className={styles.cards}>
        {
          filmes.map(filme => (<Card
            conteudo={filme} />))
        }
      </div>
       <h1 style={{color: 'white'}}>Contador:{counter}</h1>
      <div>
        <Button
          onClick={handleCounter}
          nome="incrementar"
        />
      </div>


      {/* { <button className={style.button}onClick={handleCounter}> incrementar </button> } */}
    </div>
  );
}