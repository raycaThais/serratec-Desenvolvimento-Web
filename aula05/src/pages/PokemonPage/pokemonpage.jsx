import { useEffect, useState } from "react"
import { api } from "../../services/api";
import { Card } from "../../components/Card/Card";
import styles from "./pokemonpage.module.css"
export function PokemonPage() {
    const [loading, setLoading] = useState(false);
    const [pokemonLista, setPokemonLista] = useState([])

    const getPokemons = () => {
        //  setLoading(true)
        api.get("/pokemon?limit=10")
            .then((response) => {
                setPokemonLista(response.data.results)
                console.log(response.data.results)
            }).catch((error) => {
                console.log(error)
            })
            .finally(() => {
                //  setLoading(false)
                console.log("finally")
            })
    }

    useEffect(() => {
        getPokemons()
    }, [])

    return (
        <>
            <h1>Lista de Pokémons</h1>
            <div className={styles.cards}>
                {pokemonLista.map((pokemon, index) => (
                    <Card
                        key={index}
                    >
                        {pokemon.name}
                    </Card>


                ))}
            </div>
        </>
    )
}