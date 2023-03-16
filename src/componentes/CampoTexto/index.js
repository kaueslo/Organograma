import './CampoTexto.css'

const CampoTexto = (props) => {
    //Concatenar variável Javascript com string, depois só chamar ela no lugar do Placeholder
        const placeholderModificada = `${props.placeholder}...`
    
    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input 
                required= {props.obrigatorio}
                placeholder= {placeholderModificada}
            />
        </div>
    )
}

export default CampoTexto