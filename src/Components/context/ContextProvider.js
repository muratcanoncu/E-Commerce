import React, { useReducer, createContext, useEffect } from "react";
import axios from "axios";
import Reducer from "./Reducer";
import InitialState from "./State";
const UserContext = createContext();
const productsApi = "https://fakestoreapi.com/products";
export function ContextProvider(props) {
  const [state, dispatch] = useReducer(Reducer, InitialState);
  useEffect(async () => {
    const products = await axios.get(productsApi);
    // const countries = axios.get(
    //   "https://restcountries.eu/rest/v2/region/europe"
    // );
    console.log("fetched");
    if (products.status === 200) {
      dispatch({
        type: "PRODUCTS_DOWNLOADED",
        payload: products.data,
        // payloadTwo: countries.data,
        payloadTwo: [],
      });
    }
  }, []);
  return (
    <UserContext.Provider value={{ mainState: state, myDispatch: dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
