import { useDispatch } from "react-redux";
import dataGoods from "../../data/dataGoods";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({ cartItem }) => {
    const goods = dataGoods.find(item => item.id === cartItem.goodsId);
    const dispatch = useDispatch();
    return(<div className="cart">
        <p className="name">{goods.name}</p>
        <p className="name">{cartItem.quantity} шт.</p>
        <p className="name">Стоимость: {goods.price * cartItem.quantity} руб.</p>
        <span>
            <img onClick={()=> dispatch(removeItemFromCart({cartItemId : cartItem.id}))} className="icon" alt="ico" src="https://img.icons8.com/fluency/256/keep-clean.png"/> 
        </span>
    </div>
    )
}

export default CartItem;