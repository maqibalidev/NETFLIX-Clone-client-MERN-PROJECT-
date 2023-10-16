import React, { useRef, useState } from "react";
import "./register.scss";
import Logo from "../../logo.png";
const Register = () => {
  const emailRef = useRef();
  const [email, setEmail] = useState("");
  const passwordRef = useRef();
  const [pass, setPass] = useState("");
  const handleClick = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPass(passwordRef.current.value);
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img src={Logo} alt="" />
          <button className="loginButton">Sign In</button>
        </div>
      </div>

      <div className="container">
        <h1>Unlimited movies to watch,Tv shows,and more.</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <p>
          Ready to watch? Enter your to email to create or restart your
          membership
        </p>
        {!email ? (
          <div className="input">
            <input
              type="email"
              value={email}
              ref={emailRef}
              placeholder="email address"
            />
            <button className="registerButton" onClick={handleClick}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              type="email"
              value={pass}
              ref={passwordRef}
              placeholder="password"
            />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
