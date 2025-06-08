import styles from "./button.module.css"

export function Button({onClick, type, nome}){

    return(
        <button
        className={styles.button}
        onClick={onClick}
        type={type}
        >
            {nome}
        </button>
    )
}