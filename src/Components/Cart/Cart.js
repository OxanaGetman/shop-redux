import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    return(<div className="cart">
        <h2 className="header">КОРЗИНА</h2>
        <img className="cartPh" src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/256/external-cart-supermarket-wanicon-lineal-color-wanicon.png" alt="cartph"/>
        <h3 className="name">ВСЕГО: {totalPrice}</h3>
        {cartItems.map((cartItem, id) => <CartItem key={id} cartItem={cartItem}/>)}
    </div>
    )
}

export default Cart;