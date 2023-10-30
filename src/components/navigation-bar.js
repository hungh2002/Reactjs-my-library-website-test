import { Link } from "react-router-dom";

import './../scss/navigation-bar.scss';
import Menu from './menu.js';

const NavigationBar = () => {
  return (
    <nav id="navigationBar">
    <ul>
      <li className="home">
        <Link to={'/'}>
          Home
        </Link>
      </li>
      <Menu />
    </ul>
    </nav>
  );
}

export default NavigationBar;