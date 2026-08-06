import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  // saved the link styles in a function to make it easier to apply conditional styling based on the active state of the link.
  const navStyle = ({ isActive }) => ({
    color: isActive ? "#801A86" : "#141414",
    fontWeight: isActive ? "600" : "400",
    textDecoration: "none",
    marginRight: "20px",
  });
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          borderBottom: "1px solid #eee",
        }}
      >
        <span style={{ fontSize: "18px", fontWeight: "600", color: "#141414" }}>
          VICTORY KALU
        </span>
        {/* nav links. */}
        <div>
          <NavLink to="/" style={navStyle}>
            Home
          </NavLink>
          <NavLink to="/about" style={navStyle}>
            About
          </NavLink>
          <NavLink to="/contact" style={navStyle}>
            Contact
          </NavLink>
          <NavLink to="/work" style={navStyle}>
            Work
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
