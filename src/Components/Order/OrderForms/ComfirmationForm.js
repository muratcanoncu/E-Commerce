import React, { useState, useContext } from "react";
import { NavbarBrand, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ContextData from "../../context/ContextProvider";
function ConfirmationForm() {
  const context = useContext(ContextData);
  // console.log(context.mainState);
  const [spinning, setSpinning] = useState(true);
  const [orderInfo, setOrderInfo] = useState({
    userInfo: { ...context.mainState.loggedInUser },
    orderInfo: { ...context.mainState.orderData },
  });
  let today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}(CEST)`;
  today = dd + "/" + mm + "/" + yyyy;
  const text = `on ${today} at ${time} `;
  setTimeout(() => {
    setSpinning(false);
  }, 2000);
  const OrderCompleted = () => {
    return (
      <div className="confirmation__box">
        <h1>
          Order Received <i class="fas fa-check thick"></i>
        </h1>
        <h3>
          Dear {orderInfo.userInfo.name} {orderInfo.userInfo.name},
        </h3>
        <p className="text-left">
          Your order has been {text} placed <br />
          Order details has been sent to{" "}
          <strong>{context.mainState.loggedInUser.email}</strong>
        </p>

        <NavLink to="/">
          <button className="back__home__button">Back To Home</button>
        </NavLink>
      </div>
    );
  };
  return (
    <div className="pt-3 pb-5">
      {spinning ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <OrderCompleted></OrderCompleted>
      )}
    </div>
  );
}

export default ConfirmationForm;
