import { useContext } from "react";
import ContextData from "../context/ContextProvider";
import Product from "./Product/Product";

function Products() {
  const context = useContext(ContextData);

  if (context.mainState.productList.length === 0) {
    return (
      <main className="product__container container-fluid px-5 pt-5 pb-5">
        <h1 style={{ color: "#198754", fontSize: "4rem" }} className="mb-4">
          Loading...
        </h1>
        <div class="spinner-border text-success" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </main>
    );
  } else {
    return (
      <main className="product__container container-fluid px-5 pt-5 pb-5 h-auto">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          {context.mainState.productList.map((product) => {
            return (
              <Product
                key={product.id}
                id={product.id}
                productImg={product.image}
                productName={product.title}
                productPrice={`${product.price}€`}
                category={product.category}
                count={product.rating.count}
              ></Product>
            );
          })}
        </div>
      </main>
    );
  }
}

export default Products;
