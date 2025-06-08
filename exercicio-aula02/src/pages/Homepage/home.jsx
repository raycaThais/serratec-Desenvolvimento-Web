
import { useState } from "react"
import { CartaoDeAluno } from "../../components/CartaoDeAluno/CartaoDeAluno"
import styles from "../../pages/Homepage/home.module.css"

export function HomePage() {

  const [alunos, setAlunos] = useState([
    {
      nome: "Rayca",
      curso: "Desenvolvimento Web",
      nota: 0
    },
    {
      nome: "Bruno",
      curso: "Desenvolvimento Web",
      nota: 0
    },
    {
      nome: "Lívia",
      curso: "Desenvolvimento Web",
      nota: 0
    },
    {
      nome: "Leonardo",
      curso: "Desenvolvimento Web",
      nota: 0
    }
  ])


  const handleAumentarNota = (index) => {
    const novosAlunos = [...alunos]
    novosAlunos[index].nota += 1
    setAlunos(novosAlunos)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.cards}>
          {alunos.map(((aluno, index) => (<CartaoDeAluno
            key={index}
            nome={aluno.nome}
            curso={aluno.curso}
            nota={aluno.nota}
            nomeBotao="Aumentar Nota"
            metodo={() => handleAumentarNota(index)}

          />)))}
        </div>

      </div>
    </>
  )
}