import React from "react";

function Product(props) {
  return (
    <div>
      <img src={props.productImg}></img>
      <div>
        <div>
          <p>{props.productName}</p>
          <p>{props.productPrice}</p>
        </div>
        <div>{props.description}</div>
        <div>
          <button>Ad to chart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
