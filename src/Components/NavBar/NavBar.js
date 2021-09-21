import { useContext } from "react";
import ContextData from "../context/ContextProvider";
import "./NavBar.css";
import SmartLogo from "../Assets/SmartLogo.jpeg";
import { NavLink, useLocation } from "react-router-dom";
function NavBar() {
  const context = useContext(ContextData);
  const location = useLocation();
  const logOutFunc = (dispatch) => {
    dispatch({
      type: "USER_LOGOUT",
    });
  };
  return (
    <nav className="navbar d-flex justify-content-between align-items-center">
      <NavLink to="/">
        <div className="navbar__left d-flex justify-content-center align-items-center ">
          <img className="navbar__logo" src={SmartLogo}></img>
          <p className="mt-2">Smart Shop</p>
          {/* <NavLink to="/">Link</NavLink> */}
        </div>
      </NavLink>

      <div className="navbar__cart__button px-1">
        {location.pathname === "/" ? (
          <NavLink to="/chart">
            <div className="navbar__right" title="Chart">
              <div className="navbar__productAmount d-flex justify-content-center pt-1">
                <p>{context.mainState.loggedInUser.userCart.length}</p>
              </div>
              <i className="fas fa-shopping-cart"></i>
            </div>
          </NavLink>
        ) : null}

        <div>
          <NavLink to="/">
            <button
              className="logout__button"
              onClick={() => logOutFunc(context.myDispatch)}
            >
              Log Out
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
