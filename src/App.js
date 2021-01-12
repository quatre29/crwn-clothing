import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import { Route, Link, Switch } from 'react-router-dom'



function App() {
  return (
    <Switch>
      <div>
        <Route  exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
      </div>
    </Switch>

  );
}

export default App;
