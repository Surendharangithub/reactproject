import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Products from "./components/products/Products";
import CreateProducts from "./components/products/CreateProducts";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin/products/create" element={<CreateProducts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
