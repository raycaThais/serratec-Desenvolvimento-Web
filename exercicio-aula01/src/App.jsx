import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //const [count, setCount] = useState(0);

  const livros = [
    {
      nome: "O Conto da Aia",
      genero: "Ficção científica",
    },
    {
      nome: "Duna",
      genero: "Ficção científica"
    },
    {
      nome: "Sherlock Holmes",
      genero: "Suspense"
    },
    {
      nome: "1984",
      genero: "Ficção científica"
    }
  ];

  return <>
  {
    livros.filter(livro => livro.genero === "Ficção científica")
    .map((livro, index) => <h1 id={index}>{livro.nome}</h1>
  )
  }
  
  </>;


}

export default App;
