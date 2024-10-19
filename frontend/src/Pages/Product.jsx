import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext"
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import { useContext } from "react";

const Product = () => {
    const {allProducts} = useContext(ShopContext);
    const {productId} = useParams();
    const product = allProducts.find((e) => e.id === Number(productId)); 
    return (
        <div>
            <Breadcrum product={product}/>
        </div>
    )
}
export default Product