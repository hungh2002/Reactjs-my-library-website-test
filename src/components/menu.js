import { Link } from "react-router-dom";

import "./../scss/menu.scss";

const Menu = () => {
  return (
    <li id="menu">
      <div className="menu-btn">Menu</div>
      <div className="menu-content">
        <Link to={"/add-book"}>Add Book</Link>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </li>
  );
};

export default Menu;
