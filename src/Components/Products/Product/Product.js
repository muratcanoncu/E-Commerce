import { useContext } from "react";
import ContextData from "../../context/ContextProvider";
import "./Product.css";

function Product(props) {
  const context = useContext(ContextData);
  const addToChartFunction = (dispatch) => {
    dispatch({
      type: "ADD_TO_CHART",
      payload: props.id,
    });
  };

  //   const handleUpdateCartQuantity = async(productId,quantity)=>{
  // const response= await ax
  //   }
  return (
    <div className="product d-flex flex-column justify-content-center align-items-center p-1">
      <img
        className="product__img"
        alt="Product Image"
        src={props.productImg}
      ></img>
      <div className="pt-1">
        <div className="product__nameDiv w-100 d-flex justify-content-center px-2 mt-1">
          <h5 className="product__name mb-0">{props.productName}</h5>
        </div>
        <div className="product__detail w-100 d-flex justify-content-between align-items-center px-2">
          <div className="d-flex flex-column">
            <p className="product__category__title mb-0 ">Category</p>
            <p className="product__category mb-0">{props.category}</p>
          </div>
          <div>
            <h5 className="mb-0">Price:</h5>
            <h4 className="product__price mb-0">{props.productPrice}</h4>
          </div>
        </div>
        <div className="product__button d-flex justify-content-between">
          <div>
            <p className="product__count mb-0">
              <span>{props.count}</span> customer bought
            </p>
          </div>

          <i
            className="fas fa-cart-plus"
            onClick={() => addToChartFunction(context.myDispatch)}
            title="To Chart"
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Product;
