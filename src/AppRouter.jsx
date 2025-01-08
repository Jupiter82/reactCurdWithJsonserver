import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Add from "./Add";
import Edit from "./Edit";
import Details from "./Details";
import Products from "./pages/admin/products/ProductsList";
import AddProducts from "./pages/admin/products/AddProduct";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/detail" element={<Details />} />
        <Route path="/create" element={<Add />} />
        <Route path="edit/:id" element={<Edit />} />
        <Route path="/product" element={<Products />} />
        <Route path="/createProduct" element={<AddProducts />} />
        {/* <Route path="edit/:id" element={<Edit />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
