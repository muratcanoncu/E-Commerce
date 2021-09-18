import React from "react";
import Product from "../Product/Product";
const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running Shoes",
  },
  {
    id: 2,
    name: "Jacket",
    description: "Rain Jacket",
  },
];

function Products() {
  return (
    <main>
      <div className="container">
        {products.map((product) => {
          <Product
            key={product.id}
            name={product.name}
            description={product.description}
          ></Product>;
        })}
      </div>
    </main>
  );
}

export default Products;
