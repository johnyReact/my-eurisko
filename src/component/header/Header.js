import * as React from "react";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../../helpers/function";
//mui import
import MuiMenuItem from "../../layout/MUI-menu-item/MuiMenuItem";

import "./Header.scss";

export default function Header(props) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="header-container">
      <div className="header">
        <h1 onClick={() => navigate("/")}>Eurisko</h1>
        {isUserLoggedIn() === true && <MuiMenuItem logout={handleLogout} />}
      </div>
    </div>
  );
}
