import './../scss/menu.scss';

const Menu =() => {
  return (
    <li id="menu">
      <div class="menu-btn">
        Menu
      </div>
      <div class="menu-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </li>
  );
}

export default Menu;