import { useState, useContext } from "react";
import ContextData from "../context/ContextProvider";
import "./Login.css";
import SmartLogo from "../Assets/SmartLogo.jpeg";
// Images

import SmartLoginLogo from "../Assets/smartRecruitersLoginLofo.png";
function Login() {
  const [formData, setFormData] = useState({ userEmail: "", userPassword: "" });
  const [noLoginData, setNoLoginData] = useState(false);
  const context = useContext(ContextData);

  const userLoginFormSubmit = (dispatch) => {
    if (formData.userPassword.length >= 6 && formData.userEmail.length > 0) {
      dispatch({
        type: "USER_LOGIN_TRIED",
        payload: formData,
      });
    } else {
      setNoLoginData(true);
      setTimeout(() => {
        setNoLoginData(false);
      }, 2000);
    }
  };
  return (
    <main className="login">
      <nav className="navbar d-flex justify-content-between align-items-center px-2">
        <div className="navbar__left d-flex justify-content-center align-items-center">
          <img className="navbar__logo" src={SmartLogo}></img>
          <p className="mt-2">Smart Shop</p>
          {/* <NavLink to="/">Link</NavLink> */}
        </div>
      </nav>
      <div className="content__section">
        <div className="form__side">
          <h1>Welcome to Smart Shop!</h1>
          <img src={SmartLoginLogo}></img>
          <form
            className="login__form d-flex justify-content-between flex-column align-items-center"
            onSubmit={(e) => {
              e.preventDefault();
              userLoginFormSubmit(context.myDispatch);
            }}
          >
            <h4 className="mb-2">Please Log in for shopping!</h4>
            <div className="login__email d-flex flex-column">
              <label>E-mail</label>
              <input
                type="email"
                placeholder="E-mail"
                value={formData.userEmail}
                onChange={(e) =>
                  setFormData({ ...formData, userEmail: e.target.value })
                }
              ></input>
            </div>
            <div className="login__password d-flex flex-column">
              <label>Password</label>
              <input
                type="password"
                placeholder="Please enter your password"
                value={formData.userPassword}
                onChange={(e) =>
                  setFormData({ ...formData, userPassword: e.target.value })
                }
              ></input>

              {noLoginData ? (
                <p className="false__login__alert text-danger mb-0">
                  Please enter your e-mail and password
                </p>
              ) : null}
              {context.mainState.falseUserDataTried ? (
                <p className="false__login__alert text-danger mb-0">
                  Check your E-mail and Password!
                </p>
              ) : null}

              <div className="d-flex justify-content-start align-items-center">
                <input
                  className="checkbox__input"
                  type="checkbox"
                  checked="false"
                ></input>
                <label>Keep me logged in</label>
              </div>
            </div>

            <div className="login__form__buttons d-flex justify-content-start align-items-center">
              <button>LOG IN</button>

              <a href="#">Forgot your password?</a>
            </div>
          </form>
        </div>
        <div className="content__side">
          <h1 className="mb-5">
            We Create Shopping <br /> Experience Again!
          </h1>
          <p className="mt-3 mb-5 content__side__slogan">
            You demand it, we make it!
          </p>
          <div className="content__side--images">
            <div>
              <i className="fas fa-shopping-cart"></i>
              <p>Unlimited Selection</p>
            </div>
            <div>
              <i className="fas fa-percent"></i>
              <p>Affordable Prices</p>
            </div>
            <div>
              <i className="fas fa-truck"></i>
              <p>Fast Delivery</p>
            </div>
          </div>
          {/* <button>LEARN MORE</button> */}
        </div>
      </div>
    </main>
  );
}

export default Login;
