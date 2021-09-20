import { useState } from "react";

import "./Order.css";
import { Stepper, Step, StepLabel } from "@material-ui/core";
// Components
import AddressForm from "./OrderForms/AddressForm";
import PaymentForm from "./OrderForms/PaymentForm";
import Confirmation from "./OrderForms/ComfirmationForm";
const steps = ["Shipping Address", "Payment Details", "Confirmation"];
function Order() {
  const [activeStep, setActiveStep] = useState(0);

  const toPaymentForm = () => {
    setActiveStep(1);
  };
  const toAddressForm = () => {
    setActiveStep(0);
  };
  const toConfirmationPage = () => {
    setActiveStep(2);
  };

  let activeComponent;
  if (activeStep === 0) {
    activeComponent = <AddressForm toPayment={toPaymentForm}></AddressForm>;
  } else if (activeStep === 1) {
    activeComponent = (
      <PaymentForm
        toAddress={toAddressForm}
        toConfirm={toConfirmationPage}
      ></PaymentForm>
    );
  } else if (activeStep === 2) {
    activeComponent = <Confirmation></Confirmation>;
  }
  return (
    <main className="order">
      <div className="order__container">
        <h1 className="my-2">Checkout</h1>
        <Stepper activeStep={activeStep} className="order__stepper">
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeComponent}
      </div>
    </main>
  );
}

export default Order;
