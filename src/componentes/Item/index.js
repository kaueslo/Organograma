import './Item.css'

const Item = (props) => {
    return (
        <section className='item'>
            <h3>{props.nome}</h3>
        </section>
    )
}

export default Item