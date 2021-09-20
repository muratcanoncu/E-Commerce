import { useContext, useState } from "react";
import ContextData from "../context/ContextProvider";
import { NavLink } from "react-router-dom";
import "./Chart.css";
// Component
import CartItem from "./CartItem/CartItem";
function Chart() {
  const context = useContext(ContextData);
  const emptyCartFunc = (dispatch) => {
    dispatch({
      type: "EMPTY_CART",
    });
  };
  const EmptyCart = () => {
    return (
      <div>
        <h1>You have no items in your shopping cart</h1>
        <NavLink to="/">
          <button className="back__button mt-2">Start Adding Some</button>
        </NavLink>
      </div>
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
                id={product.id}
                itemImg={product.image}
                itemName={product.title}
                itemPrice={product.price}
              ></CartItem>
            );
          })}
        </div>

        <div className="cart__bottom d-flex justify-content-between align-items-center w-75 mx-auto flex-wrap pb-4">
          <h3>Subtotal : {context.mainState.cartTotalAmount.toFixed(2)} €</h3>
          <div className="">
            <NavLink to="/">
              <button className="back__button mt-2">Start Adding Some</button>
            </NavLink>
          </div>
          <div className="cart__buttons--modifier d-flex justify-content-between ">
            <button
              className="cart__emptyCart"
              onClick={() => {
                emptyCartFunc(context.myDispatch);
              }}
            >
              EMPTY CART
            </button>
            <NavLink to="/order">
              <button className="cart__checkout">CHECKOUT</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="cart">
      <h1>
        <span>{context.mainState.loggedInUser.name}</span>'s Shopping Chart
      </h1>
      {!context.mainState.loggedInUser.userCart.length ? (
        <EmptyCart></EmptyCart>
      ) : (
        <FilledCart></FilledCart>
      )}
    </div>
  );
}

export default Chart;
