import { useContext } from 'react';
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';



const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image}></img>
                    <img src={product.image}></img>
                    <img src={product.image}></img>
                    <img src={product.image}></img>
                </div>
            </div>
            <div className="productdisplay-right">
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image}></img>
                </div>
                <h1>{product.name}</h1>
                <div className="productdisplay-right-price">
                    ${product.price}
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            </div>
            
        </div>
    )
}
export default ProductDisplay