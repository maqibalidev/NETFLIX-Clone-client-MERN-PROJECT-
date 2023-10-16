import React from "react";
import "./navbar.scss";
import Logo from "../../logo.png";
import { Search, ArrowDropDown, Notifications } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/apiCalls";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();
  console.log(isScrolled);
  const navigate = useNavigate();

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const handleLogout = () => {
    logout(dispatch);
    navigate("/login");
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={Logo} alt="" />
          <Link to={"/"}>
            <span>Homepage</span>
          </Link>
          <Link to={"/series"}>
            {" "}
            <span>Series</span>{" "}
          </Link>
          <Link to={"/movies"}>
            {" "}
            <span>Movies</span>
          </Link>
          <span>New and popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <Avatar className="avatar_img" />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>

              <span onClick={handleLogout}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
