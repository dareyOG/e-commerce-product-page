import NavBar from "./components/NavBar";
import ProductInfo from "./components/ProductInfo";
import Counter from "./components/Counter";
import CartModal from "./components/CartModal";
import Carousel from "./components/Carousel";
import NavList from "./components/NavList";
import { useState } from "react";

function App() {
  const [isNavActive, setNavActive] = useState(false);

  const toggleMenu = () => setNavActive(nav => !nav);

  return (
    <div className=''>
      {isNavActive && <NavList toggleMenu={toggleMenu} />}
      <NavBar toggleMenu={toggleMenu} />
      <Carousel />
      <ProductInfo />
      <Counter />
      {/* <CartModal /> */}
    </div>
  );
}

export default App;
