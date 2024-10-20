import { useContext } from 'react';
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/remove_icon.png'

const CartItems = () => {
    const {getTotalCartAmount, allProducts, cartItems, removeFromCart} = useContext(ShopContext);
    return (
        <div className="cartitems">
            <div className="cartiems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {allProducts.map((e)=>{
                if(cartItems[e.id]>0) {
                    return(
                        <div>
                        <div className="cartitems-format cartiems-format-main">
                            <img src={e.image} className="carticon-product-icon"></img>
                            <p>{e.name}</p>
                            <p>${e.price}</p>
                            <button className="cartitems-quantity">{cartItems[e.id]}</button>
                            <p>${e.price*cartItems[e.id]}</p>
                            <img className="cartitems-remove-icon" src={remove_icon} onClick={()=>{removeFromCart(e.id)}} ></img>
                        </div>
                    </div>
                    )
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartiems-total">
                    <h1>Total: ${getTotalCartAmount()}</h1>
                    <button>PROCEED TO CHECKOUT</button>
                </div>

            </div>
        </div>
    )
}
export default CartItems;