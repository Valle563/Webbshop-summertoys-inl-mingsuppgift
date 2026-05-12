import { HashRouter, Routes, Route } from "react-router";

import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function App() {
  return (
    <HashRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />

        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />

      </Routes>
    </HashRouter>
  );
}

export default App;