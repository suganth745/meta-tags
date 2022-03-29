import './App.css';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import ShareProduct from './components/social-share/Products/shareProduct';
import ProductListing from './components/social-share/Products/ProductListing';
import HelmetMetaData from "./components/social-share/Helmat"
function App() {
  return (
    <div className="App">
      {/* <HelmetMetaData
        title={"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}
        image={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
        description={"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"}
      ></HelmetMetaData> */}
      <Router>
          <Routes>
            <Route exact path="/" element={<ProductListing/>} />
            <Route exact path="/listproduct" element={<ProductListing/>} />
            <Route exact path="/product/:id" element={<ShareProduct/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
