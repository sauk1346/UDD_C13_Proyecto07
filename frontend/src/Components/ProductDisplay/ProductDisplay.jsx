import './ProductDisplay.css'

const ProductDisplay = (props) => {
    const {product} = props;
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image}></img>
                    <img src={product.image}></img>
                    <img src={product.image}></img>
                    <img src={product.image}></img>
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image}></img>
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-price">
                    ${product.price}
                </div>
                <button>ADD TO CART</button>
            </div>
            
        </div>
    )
}
export default ProductDisplay