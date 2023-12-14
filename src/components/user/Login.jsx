import React, { useState } from "react";
import Header from "../layouts/Header";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clickHandler = () => {
    alert(`Email : ${email}\nPassword : ${password}`);
  };

  return (
    <>
      <Header />
      <div className="login">
        <div className="login-main">
          <div className="login-img">
            <img src="./images/all-clothes.jpg" alt="login-page" />
          </div>
          <div className="login-content">
            <div>
              <h2>Hello User &#128075;</h2>
            </div>
            <div className="login-page">
              <h2>
                <span>Login</span> Here
              </h2>
            </div>
            <div className="form-control">
              <label>Email</label>
              <br />
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label>Password</label>
              <br />
              <input
                type="password"
                maxLength={10}
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="login-btn">
              <button onClick={clickHandler}>Login</button>
            </div>
            <div className="ordiv">or</div>
            <div>
              <button className="google">
                {" "}
                <i class="fa-brands fa-google"></i>Continue with Google
              </button>
            </div>
            <div>
              <button className="twitter">
                {" "}
                <i class="fa-brands fa-x-twitter"></i> Continue with Twitter
              </button>
            </div>
            <div>
              <button className="apple">
                <i class="fa-brands fa-apple"></i> Continue with Apple
              </button>
            </div>
            <p>
              New user? <Link to={"/register"}>Register</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
