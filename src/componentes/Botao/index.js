import './Botao.css'

const Botao = (props) => {
    //Tudo q eu passar entre o <botao> no Formulario, vai ser pego pelo props.children
    return(
        <button className='botao'>
            {props.children}
        </button>
    )
}

export default Botao