import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header';
import Home from './screens/home';
import ProductDetails from './screens/productDetails';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/product/:id' component={ProductDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
