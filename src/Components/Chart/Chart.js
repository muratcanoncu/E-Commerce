import { useContext } from "react";
import ContextData from "../context/ContextProvider";

function Chart() {
  const context = useContext(ContextData);
  const EmptyCart = () => {
    return (
      <h1>You have no item in your shopping chart, please add something!</h1>
    );
  };
  const FilledCart = () => {
    return (
      <div className="d-flex justify-content-between flex-wrap">
        {context.mainState.userChart.map((product) => {
          return <div>{product.title}</div>;
        })}
      </div>
    );
  };
  return (
    <div className="container">
      <h2>Your Shopping Chart</h2>
      {!context.mainState.userChart.length ? (
        <EmptyCart></EmptyCart>
      ) : (
        <FilledCart></FilledCart>
      )}
    </div>
  );
}

export default Chart;
