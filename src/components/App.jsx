import NavList from "./NavList";
import NavBar from "./NavBar";
import Main from "./Main";
import Carousel from "./Carousel";
import Product from "./Product";
import ProductInfo from "./ProductInfo";
import ProductCounter from "./ProductCounter";
import CartModal from "./CartModal";
import ProductModal from "./ProductModal";
import { useSneaker } from "../context/SneakerContext";

function App() {
  const { isNavActive, isCartModalActive, isProductModalActive } = useSneaker();
  return (
    <main>
      <NavBar />
      {isNavActive && <NavList />}
      <Main>
        <Carousel />
        <Product>
          <ProductInfo />
          <ProductCounter />
        </Product>
      </Main>
      {isCartModalActive && <CartModal />}
      {isProductModalActive && <ProductModal />}
    </main>
  );
}

export default App;
