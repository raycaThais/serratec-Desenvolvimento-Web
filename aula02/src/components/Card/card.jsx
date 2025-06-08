import styles from './card.module.css'

export function Card({conteudo}){

    return (
        <div className={styles.card}>
            {conteudo}
        </div>
    )
}