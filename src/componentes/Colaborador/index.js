import './Colaborador.css'

//outra forma e comum de chamar as props
const Colaborador = ({ nome, imagem, item }) => {
    return (<div className='colaborador'>
        <div className='cabecalho'>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{item}</h5>
        </div>
    </div>)
}

export default Colaborador