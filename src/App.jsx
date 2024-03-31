import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Admin from "./components/Admin";
import MyContext from "./context/MyContext";
import Cart from "./cart/Cart";

function App() {
  return (
    <div className="bg">
      <MyContext>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/admin" element={<Admin />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/fav" element={<h1>Favourite Page</h1>} />
          </Routes>
          {/* Footer Component */}
        </Router>
      </MyContext>
    </div>
  );
}

export default App;
