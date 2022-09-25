
import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart((prevstate) => !prevstate);
  };
  return (
    <CartProvider>
      {showCart && <Cart showCartHandler={showCartHandler} />}
      <Header showCartHandler={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );

}

export default App;
