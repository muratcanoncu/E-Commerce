import { useContext } from "react";
import ContextData from "../context/ContextProvider";
import Product from "./Product/Product";

function Products() {
  const context = useContext(ContextData);
  return (
    <main className="container-fluid px-5 h-auto">
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

export default Products;
