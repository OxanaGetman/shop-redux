import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";

const GoodsDisplay = ({ goods }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return(<div className="point">
        <img src={`./${goods.image}.jpg`} alt="ph"/>
        <h2 className="name">{goods.name}</h2>
        <p className="name">{goods.price} руб.</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button onClick={() => {dispatch(addItemToCart({goods, quantity}))}}>В КОРЗИНУ</button>
    </div>)
}

export default GoodsDisplay;