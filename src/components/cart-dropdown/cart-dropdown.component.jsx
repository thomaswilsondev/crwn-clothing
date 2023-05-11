import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
const CartDropdown = () => {
  const { cartItems, cartCount } = useContext(CartContext);
  // CLICK BUTTON IS REDICTER NAVIGATE CHECKOUT
  const navigate = useNavigate();
  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartCount === 0 ? (
          <p className="text-messenger">You cart is emty</p>
        ) : (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        )}
      </div>
      <Button onClick={goToCheckOutHandler}>Go to checkout</Button>
    </div>
  );
};
export default CartDropdown;
