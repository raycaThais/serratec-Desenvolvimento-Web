import styles from "./input.module.css"

export function Input({type, placeholder, onChange, value}){

    return(
        <input 
        className={styles.input}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}

        />
    )
}