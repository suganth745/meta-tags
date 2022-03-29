import './App.css';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import ShareProduct from './components/social-share/Products/shareProduct';
import ProductListing from './components/social-share/Products/ProductListing';
import HelmetMetaData from "./components/social-share/Helmat"
function App() {
  return (
    <div className="App">
       <HelmetMetaData></HelmetMetaData>
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
