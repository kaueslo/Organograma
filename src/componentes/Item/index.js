import Colaborador from '../Colaborador'
import './Item.css'

const Item = (props) => {
    return (
        <section className='item' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.usuarios.map(usuario => <Colaborador nome={usuario.nome} item={usuario.item} imagem={usuario.imagem}/>)}
            </div>
        </section>
    )
}

export default Item