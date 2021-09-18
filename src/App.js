import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import ContextData from "./Components/context/ContextProvider";
// Components
import Login from "./Components/Login/Login";
import NavBar from "./Components/NavBar/NavBar";
import Products from "./Components/Products/Products";
import Chart from "./Components/Chart/Chart";
function App() {
  const context = useContext(ContextData);
  if (!context.mainState.userLoggedIn) {
    return (
      <div className="App">
        <Login></Login>
      </div>
    );
  } else {
    return (
      <HashRouter basename="/">
        <div className="App">
          <NavBar></NavBar>

          <Products></Products>
          <Chart></Chart>
        </div>
      </HashRouter>
    );
  }
}

export default App;
