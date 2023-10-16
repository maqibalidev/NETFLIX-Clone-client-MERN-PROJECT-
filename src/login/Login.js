import "./login.scss";
import Logo from "../logo.png";
const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img src={Logo} alt="" />
        </div>
      </div>

      <div className="container">
        <form className="form">
          <h1>Sign In</h1>
          <input type="email" placeholder="email or phone number" />
          <input type="password" placeholder="password" />
          <button className="loginButton">Sign In</button>
          <span>
            New to Netflix?
            <b> Sign up now</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
