import React from "react";

const Menu = ({ menu, setMenu }) => {
  return (
    <div className={"menu " + (menu && "active")}>
      <ul>
        <li onClick={() => setMenu(!menu)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenu(!menu)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenu(!menu)}>
          <a href="#testemonials">Testemonials</a>
        </li>
        <li onClick={() => setMenu(!menu)}>
          <a href="#work">Work</a>
        </li>
        <li onClick={() => setMenu(!menu)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
