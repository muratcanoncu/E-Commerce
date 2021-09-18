import { useContext } from "react";
import ContextData from "../context/ContextProvider";
import "./NavBar.css";
import SmartLogo from "../Assets/SmartLogo.jpeg";
// import { NavLink } from "react-router-dom";
function NavBar() {
  const context = useContext(ContextData);
  //   console.log(context.mainState);
  return (
    <nav className="navbar d-flex justify-content-between align-items-center px-2">
      <div className="navbar__left d-flex justify-content-center align-items-center">
        <img className="navbar__logo" src={SmartLogo}></img>
        <p className="mt-2">Smart Shop</p>
        {/* <NavLink to="/">Link</NavLink> */}
      </div>
      <div className="navbar__right pb-3">
        <div className="navbar__productAmount d-flex justify-content-center pt-1">
          <p>{context.mainState.userChart.length}</p>
        </div>
        <i className="fas fa-shopping-cart"></i>
      </div>
    </nav>
  );
}

export default NavBar;
