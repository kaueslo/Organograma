import './CampoTexto.css'

const CampoTexto = (props) => {
    //Concatenar variável Javascript com string, depois só chamar ela no lugar do Placeholder
        const placeholderModificada = `${props.placeholder}...`


        const aoDigitado = (evento) => {
            props.aoAlterado(evento.target.value)
        }
    
    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input 
                value={props.valor}
                onChange={aoDigitado}
                required= {props.obrigatorio}
                placeholder= {placeholderModificada}
            />
        </div>
    )
}

export default CampoTexto