import { useContext } from "react";
import "./CartItem.css";
import ContextData from "../../context/ContextProvider";
function CartItem(props) {
  const context = useContext(ContextData);
  const removeFromChartFunction = (dispatch) => {
    dispatch({
      type: "REMOVE_FROM_CHART",
      payload: { id: props.id, price: props.itemPrice },
    });
  };
  return (
    <div className="card d-flex justify-content-between align-items-center flex-column">
      <img className="w-100" src={props.itemImg} alt="item image"></img>
      <div className="car__info d-flex justify-content-between align-items-center w-100 px-1">
        <h6 className="item__name w-75">{props.itemName}</h6>
        <p className="item__price">{props.itemPrice} €</p>
      </div>
      <div className="cart__actions">
        {/* <div className="d-flex align-items-center amount__actions">
          <button>-</button>
          <p className="mb-0">0</p>
          <button>+</button>
        </div> */}
        <button
          className="remove__button"
          onClick={() => {
            removeFromChartFunction(context.myDispatch);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
