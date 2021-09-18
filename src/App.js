import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import ContextData from "./Components/context/ContextProvider";
// Components
import NavBar from "./Components/NavBar/NavBar";
import Products from "./Components/Products/Products";
function App() {
  const context = useContext(ContextData);
  // console.log(context);
  return (
    <HashRouter basename="/">
      <div className="App">
        <NavBar></NavBar>

        <Products></Products>
      </div>
    </HashRouter>
  );
}

export default App;
