import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import ContextData from "../../context/ContextProvider";
function AddressForm(props) {
  const context = useContext(ContextData);
  const [shippingCountries, setShippingCountries] = useState(
    context.mainState.deliveryCountries
  );
  // console.log(context.mainState.orderData.orderDataEntered);
  const [submitAttempt, setSubmitAttempt] = useState(false);
  const [shippingData, setShippingData] = useState({
    orderDataEntered: false,
    firstName: "",
    lastName: "",
    address: "",
    eMail: "",
    city: "",
    ZIP: "",
    country: "",
    shippingOption: 45,
  });

  const orderAddressData = (dispatch) => {
    dispatch({
      type: "ADDRESS_DATA_FILLED",
      payload: shippingData,
    });
  };

  return (
    <form
      className="address__form"
      onSubmit={() => {
        props.toPayment();
        orderAddressData(context.myDispatch);
      }}
    >
      <h3 className="text-left">Shipping Address</h3>
      <div className="form_inputs">
        <div className="form__section--one ">
          <input
            required
            placeholder="First name"
            value={
              context.mainState.orderData.orderDataEntered
                ? context.mainState.orderData.firstName
                : shippingData.firstName
            }
            onChange={(e) =>
              setShippingData({ ...shippingData, firstName: e.target.value })
            }
          ></input>
          <input
            required
            placeholder="Address"
            value={
              context.mainState.orderData.orderDataEntered
                ? context.mainState.orderData.address
                : shippingData.address
            }
            onChange={(e) =>
              setShippingData({ ...shippingData, address: e.target.value })
            }
          ></input>
          <input
            required
            placeholder="City"
            value={
              context.mainState.orderData.orderDataEntered
                ? context.mainState.orderData.city
                : shippingData.city
            }
            // value={shippingData.city}
            onChange={(e) =>
              setShippingData({ ...shippingData, city: e.target.value })
            }
          ></input>
          <input
            required
            list="shipping__countries"
            id="Shipping__country"
            name="country__list"
            value={
              context.mainState.orderData.orderDataEntered
                ? context.mainState.orderData.country
                : shippingData.country
            }
            // value={shippingData.country}
            placeholder="Country"
            onChange={(e) =>
              setShippingData({ ...shippingData, country: e.target.value })
            }
          />
          <datalist id="shipping__countries">
            {shippingCountries.map((country) => {
              return (
                <option key={country.alpha2Code} value={country.name}></option>
              );
            })}
          </datalist>
        </div>
        <div className="form__section--two ">
          <input
            required
            placeholder="Last name"
            value={
              context.mainState.orderData.orderDataEntered
                ? context.mainState.orderData.lastName
                : shippingData.lastName
            }
            // value={shippingData.lastName}
            onChange={(e) =>
              setShippingData({
                ...shippingData,
                lastName: e.target.value,
              })
            }
          ></input>
          <input
            required
            placeholder="E-mail"
            value={
              context.mainState.orderData.orderDataEntered
                ? context.mainState.orderData.eMail
                : shippingData.eMail
            }
            // value={shippingData.eMail}
            onChange={(e) =>
              setShippingData({
                ...shippingData,
                eMail: e.target.value,
              })
            }
          ></input>
          <input
            required
            placeholder="ZIP"
            value={
              context.mainState.orderData.orderDataEntered
                ? context.mainState.orderData.ZIP
                : shippingData.ZIP
            }
            // value={shippingData.ZIP}
            onChange={(e) =>
              setShippingData({
                ...shippingData,
                ZIP: e.target.value,
              })
            }
          ></input>
          <select
            name="shipping"
            id="options"
            placeholder="Shipping Options"
            onChange={(e) =>
              setShippingData({
                ...shippingData,
                shippingOption: e.target.value,
              })
            }
          >
            <option selected value={45}>
              Fast Shipping - 45€
            </option>
            <option value={7}>Normal Shipping - 7€</option>
          </select>
        </div>
      </div>
      <div>
        {!context.mainState.orderData.orderDataEntered && submitAttempt ? (
          <p className="mt-3 text-danger mb-0">
            We need your address for send your goods!
          </p>
        ) : null}
      </div>
      <div className="address__buttons my-5 w-75  mx-auto">
        <NavLink to="/chart">
          <button className="back__cart__button">Back to Cart</button>
        </NavLink>

        <input
          type="submit"
          className="address__button"
          // onClick={() => {
          //   props.toPayment();
          //   orderAddressData(context.myDispatch);
          // }}
          value="Payment"
        ></input>
      </div>
    </form>
  );
}

export default AddressForm;
