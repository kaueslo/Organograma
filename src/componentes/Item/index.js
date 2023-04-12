import Colaborador from '../Colaborador'
import './Item.css'

const Item = (props, aoDeletar) => {
    return (
       (props.usuarios.length > 0) ? <section className='item' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.usuarios.map(usuario => {
                    return <Colaborador corDeFundo={props.corPrimaria} key={usuario.nome} nome={usuario.nome} item={usuario.item} imagem={usuario.imagem} aoDeletar={aoDeletar} />
                })}
            </div>
        </section>
        :  ''
    )
}

export default Item