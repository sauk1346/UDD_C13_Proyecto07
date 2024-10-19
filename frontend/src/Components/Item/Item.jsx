import './Item.css'

const Item = (props) => {
    return (
        <div className='item'>
            <img src={props.image} alt="" className="item-image"/>
            <p>{props.name}</p>
            <div className="item-price">
                {props.price}
            </div>

        </div>
    )
}
export default Item