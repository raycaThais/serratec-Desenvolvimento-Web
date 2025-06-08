
export function Button({ onClick, type, nome }) {

    return (<>
        <button
            onClick={onClick}
            type={type}>
                
            {nome}
        </button>
    </>)
}