import React from "react";
import "./Login.css";
import SmartLogo from "../Assets/SmartLogo.jpeg";
function Login() {
  return (
    <main>
      <nav className="navbar d-flex justify-content-between align-items-center px-2">
        <div className="navbar__left d-flex justify-content-center align-items-center">
          <img className="navbar__logo" src={SmartLogo}></img>
          <p className="mt-2">Smart Shop</p>
          {/* <NavLink to="/">Link</NavLink> */}
        </div>
      </nav>
      <h1>
        Welcome to Smart Shop! <br /> Our aim is Success of Shopping
      </h1>

      <form className="login__form d-flex justify-content-between flex-column align-items-center">
        <h4 className="mb-0">Please Log in for shopping!</h4>
        <div className="login__email d-flex flex-column">
          <label>E-mail</label>
          <input type="email" placeholder="E-mail"></input>
        </div>
        <div className="login__password d-flex flex-column">
          <label>Password</label>
          <input
            type="password"
            placeholder="Please enter your password"
          ></input>
          <div className="mt-2 d-flex justify-content-start align-items-center">
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
    </main>
  );
}

export default Login;
