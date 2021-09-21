import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import ContextData from "../../context/ContextProvider";
function PaymentForm(props) {
  const context = useContext(ContextData);
  // console.log(context.mainState.orderData.shippingOption);
  const [orderDetails, setOrderDetails] = useState([
    ...context.mainState.loggedInUser.userCart,
  ]);
  const [totalPrice, setTotalPrice] = useState(
    context.mainState.cartTotalAmount
  );
  return (
    <div>
      <h2>Order Summary</h2>
      <div className="order__summary__container">
        {orderDetails.map((order) => {
          return (
            <div
              className="order__item d-flex justify-content-between align-items-center"
              key={order.id}
            >
              <p className="payment__order">{order.title}</p>
              <p className="payment__price">
                {order.price.toLocaleString("en-GB", {
                  timeZone: "UTC",
                })}{" "}
                €
              </p>
            </div>
          );
        })}
        <div className="order__item d-flex justify-content-between align-items-center">
          <p className="payment__order">Delivery Cost</p>
          <p className="payment__price">
            {context.mainState.orderData.shippingOption} €
          </p>
        </div>
      </div>
      <div className="total__price">
        <h5 className="w-50">Total</h5>
        <h5 className="w-50">
          {totalPrice.toLocaleString("en-GB", {
            timeZone: "UTC",
          })}
          €{" "}
        </h5>
      </div>
      <div className="payment__action__buttons">
        <button className="back__cart__button" onClick={props.toAddress}>
          Back
        </button>

        <button
          className="order__button"
          onClick={() => {
            props.toConfirm(context.myDispatch);
          }}
        >
          Order (
          {totalPrice.toLocaleString("en-GB", {
            timeZone: "UTC",
          })}
          €)
        </button>
      </div>
    </div>
  );
}

export default PaymentForm;
