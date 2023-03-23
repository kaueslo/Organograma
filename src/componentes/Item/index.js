import Colaborador from '../Colaborador'
import './Item.css'

const Item = (props) => {
    return (
        <section className='item' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <Colaborador />
        </section>
    )
}

export default Item