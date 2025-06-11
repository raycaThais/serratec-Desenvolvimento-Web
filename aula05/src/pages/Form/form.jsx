
import { Input } from "../../components/Input/input";
import { useState } from "react";
import styles from "./form.module.css";
import { cartContext } from "../../context/cartContext";

export function FormPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [aceitaTermos, setAceitaTermos] = useState(false);

  const {totalValue} = cartContext();
    e.preventDefault(); // evita o recarregamento da página

    const formData = {
      nome: nome,
      email: email,
      aceitaTermos: aceitaTermos,
    };
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Escreva seu nome..."
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Escreva seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={aceitaTermos}
            onChange={(e) => setAceitaTermos(e.target.checked)}
          />
          Aceita termos?
        </label>
        <Button title={"Salvar"} type="submit" />
      </form>
    </div>
  );