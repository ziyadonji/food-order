import { Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";

function App() {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart((prevstate) => !prevstate);
  };
  return (
    <Fragment>
     {showCart&&<Cart showCartHandler={showCartHandler}></Cart>} 
      <Header showCartHandler={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>

  );
}

export default App;
