import { Link } from 'react-router-dom'
import './Item.css'

const Item = (props) => {
    return (
        <div className='item'>
            <Link to={`/product/${props.id}`}><img src={props.image} alt="" className="item-image"/></Link>
            <p>{props.name}</p>
            <div className="item-price">
                ${props.price}
            </div>

        </div>
    )
}
export default Item