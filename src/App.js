import { Outlet } from "react-router-dom";

import './scss/App.scss';
import NavigationBar from './components/navigation-bar.js';

const App = () => {
  
  return (
    <div className="App grid-container">
      <NavigationBar />
      <div id="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
