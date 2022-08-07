import React from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Cart />
      <Header />
      <Meals />
    </CartProvider>
  );
}

export default App;
