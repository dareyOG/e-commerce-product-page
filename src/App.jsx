import NavBar from "./components/NavBar";
import ProductInfo from "./components/ProductInfo";
import ProductCounter from "./components/ProductCounter";
import CartModal from "./components/CartModal";
import Carousel from "./components/Carousel";
import NavList from "./components/NavList";
import Main from "./components/Main";
import Product from "./components/Product";
import { useState } from "react";
import ProductModal from "./components/ProductModal";

function App() {
  const [isNavActive, setNavActive] = useState(false);

  const toggleMenu = () => setNavActive(nav => !nav);

  return (
    <main>
      {isNavActive && <NavList toggleMenu={toggleMenu} />}
      <NavBar toggleMenu={toggleMenu} />
      <Main>
        <Carousel />
        <Product>
          <ProductInfo />
          <ProductCounter />
        </Product>
      </Main>
      <CartModal />
      <ProductModal />
    </main>
  );
}

export default App;
