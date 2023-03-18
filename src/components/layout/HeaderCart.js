import classes from "../css/headercart.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
const HeaderCart = (props) => {
  const cartCtx = useContext(CartContext);
  const numOfCartItems = cartCtx.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCart;
