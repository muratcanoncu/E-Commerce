import React, { useState, useContext } from "react";
import { Spinner } from "react-bootstrap";
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
  const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()} CEST`;
  today = dd + "/" + mm + "/" + yyyy;
  const text = `on ${today} at ${time}`;
  setTimeout(() => {
    setSpinning(false);
  }, 2500);
  const OrderCompleted = () => {
    return (
      <div>
        <h1>Order Received</h1>
        <h2 className="text-left">
          Dear {orderInfo.userInfo.name} {orderInfo.userInfo.name},
        </h2>
        <p className="text-left">Your order is {text} placed</p>
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
