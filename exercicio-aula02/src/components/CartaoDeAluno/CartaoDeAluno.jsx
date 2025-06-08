import styles from "./CartaoDeAluno.module.css"
import { Button } from "../Button/Button"

export function CartaoDeAluno({ nome, curso, nota, nomeBotao, metodo }) {

    
    return (
        <>
            <div className={styles.divPai}>
                <div className={styles.cartao}>
                    <li>Nome: {nome}</li>
                    <li>Curso: {curso}</li>
                    <li>Nota: {nota}</li>
                </div>
                <div>
                    <Button
                        onClick={metodo}
                        nome={nomeBotao}
                    />

                </div>
            </div>

        </>

    )

}