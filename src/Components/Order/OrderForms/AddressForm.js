import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import ContextData from "../../context/ContextProvider";
function AddressForm(props) {
  const context = useContext(ContextData);
  const [shippingCountries, setShippingCountries] = useState(
    context.mainState.deliveryCountries
  );

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
    <form className="address__form">
      <h3 className="text-left">Shipping Address</h3>
      <div className="form_inputs">
        <div className="form__section--one ">
          <input
            placeholder="First name"
            value={shippingData.firstName}
            onChange={(e) =>
              setShippingData({ ...shippingData, firstName: e.target.value })
            }
          ></input>
          <input
            placeholder="Address"
            value={shippingData.address}
            onChange={(e) =>
              setShippingData({ ...shippingData, address: e.target.value })
            }
          ></input>
          <input
            placeholder="City"
            value={shippingData.city}
            onChange={(e) =>
              setShippingData({ ...shippingData, city: e.target.value })
            }
          ></input>
          <input
            list="shipping__countries"
            id="Shipping__country"
            name="country__list"
            value={shippingData.country}
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
            placeholder="Last name"
            value={shippingData.lastName}
            onChange={(e) =>
              setShippingData({
                ...shippingData,
                lastName: e.target.value,
              })
            }
          ></input>
          <input
            placeholder="E-mail"
            value={shippingData.eMail}
            onChange={(e) =>
              setShippingData({
                ...shippingData,
                eMail: e.target.value,
              })
            }
          ></input>
          <input
            placeholder="ZIP"
            value={shippingData.ZIP}
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
      <div className="address__buttons my-5 w-75  mx-auto">
        <NavLink to="/chart">
          <button className="back__cart__button my-2">Back to Cart</button>
        </NavLink>

        <input
          type="submit"
          className="address__button"
          onClick={() => {
            props.toPayment();
            orderAddressData(context.myDispatch);
          }}
          value="Payment"
        ></input>
      </div>
    </form>
  );
}

export default AddressForm;
