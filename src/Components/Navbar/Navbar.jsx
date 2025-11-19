import React from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png"
import notification from "../../assets/notification.png"
import search from "../../assets/search.png"
import upload from "../../assets/upload.png"
import more from "../../assets/more.png"
import profile_icon from "../../assets/jack.png"


const Navbar = ({setSidebar}) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img className="menu-icon" src={menu_icon} onClick={()=>setSidebar(prev=>prev===false?true:false)} alt="menu_icon" />
        <img className="logo" src={logo} alt="logo" />

      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img className="search" src={search} alt="search" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={upload} alt="upload" />
        <img src={more} alt="more" />
        <img src={notification} alt="notification" />
        <img src={profile_icon} className="profile_pic user-icon" alt="profile_icon" />

      </div>
    </nav>
  )
}

export default Navbar;
