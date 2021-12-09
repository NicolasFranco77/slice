import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

//components
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Checkout from  './components/Checkout/Checkout'

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Navbar setSearch={setSearch}  search={search} />

      <Routes>
        <Route
          path="/"
          element={<Products setSearch={setSearch} search={search} />}
        />
        <Route path="/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
