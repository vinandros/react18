import React from 'react';
import { NavLink, Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <NavLink 
        to="/"
        style={({ isActive }) => {
          return {
            textDecoration: 'none',
            color: isActive ? "#064663" : "#000",
          };
        }}
      >
       <h1 className='App_title'>PokeCards</h1>
      </NavLink>
     <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/pokemon">Pokemon</Link> |{" "}
        <Link to="/counter">Redux counter</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
