import { useContext, useState } from "react";
import ContextData from "../context/ContextProvider";
import "./Chart.css";
// Component
import CartItem from "./CartItem/CartItem";
function Chart() {
  const context = useContext(ContextData);

  const EmptyCart = () => {
    return (
      <h1>You have no item in your shopping chart, please add something!</h1>
    );
  };
  const FilledCart = () => {
    return (
      <div className="d-flex justify-content-between flex-column flex-wrap">
        <div className="cart__products my-2">
          {context.mainState.loggedInUser.userCart.map((product) => {
            return (
              <CartItem
                key={product.id}
                itemImg={product.image}
                itemName={product.title}
                itemPrice={product.price}
              ></CartItem>
            );
          })}
        </div>

        <div className="cart__bottom d-flex justify-content-between align-items-center w-75 mx-auto flex-wrap">
          <h3>Subtotal : {context.mainState.cartTotalAmount} €</h3>
          <div className="cart__buttons--modifier d-flex justify-content-between ">
            <button className="cart__emptyCart">EMPTY CART</button>
            <button className="cart__checkout">CHECKOUT</button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="cart container-fluid">
      <h1>Your Shopping Chart</h1>
      {!context.mainState.loggedInUser.userCart.length ? (
        <EmptyCart></EmptyCart>
      ) : (
        <FilledCart></FilledCart>
      )}
    </div>
  );
}

export default Chart;
