import NavList from "./components/NavList";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Carousel from "./components/Carousel";
import Product from "./components/Product";
import ProductInfo from "./components/ProductInfo";
import ProductCounter from "./components/ProductCounter";
import CartModal from "./components/CartModal";
import ProductModal from "./components/ProductModal";
import { useReducer, useState } from "react";

function App() {
  // const initialState = {
  //   isNavActive: false,
  //   value: 0,
  //   cartList: [],
  //   isProductModalActive: false,
  // };

  // function reducer(state, action) {
  //   switch (action.type) {
  //     case "toggle_Nav":
  //       return { ...state, isNavActive: action.payload };

  //     case "increase_count":
  //       return { ...state };

  //     case "decrease_count":
  //       return { ...state };

  //     case "add_product_to_cart":
  //       return {
  //         ...state,
  //         cartList: [...state.cartList, action.payload],
  //       };

  //     case "remove_product_from_cart":
  //       return { ...state, cartList: [] };

  //     case "open_product_modal":
  //       return { ...state, isProductModalActive: true };

  //     case "close_product_modal":
  //       return { ...state, isProductModalActive: false };

  //     default:
  //       throw new Error("unknown action");
  //   }
  // }

  // const [{ isNavActive, value, cartList, isProductModalActive }, dispatch] =
  //   useReducer(reducer, initialState);

  // cartList = {
  //   img,
  //   name,
  //   price,
  //   quantity,
  // };

  const [isNavActive, setIsNavActive] = useState(false);
  const [count, setCount] = useState(0);
  const [isProductModalActive, setIsProductModalActive] = useState(false);
  const [isCartModalActive, setIsCartModalActive] = useState(false);
  const [cartlist, setCartlist] = useState([]);

  // toggle menu
  const handleToggleMenu = () => {
    setIsNavActive(nav => !nav);
  };

  // show product modal
  const handleShowProductModal = () => {
    setIsProductModalActive(true);
  };

  // remove product modal
  const handleRemoveProductModal = () => {
    setIsProductModalActive(false);
  };

  // add to cart
  const handleAddtoCart = cart => {
    setCartlist(cartlist => [...cartlist, cart]);
  };

  // checkout
  const handleCheckout = () => {
    setCartlist([]);
    setIsCartModalActive(false);
  };

  return (
    <main>
      <NavBar handleToggleMenu={handleToggleMenu} />
      {isNavActive && <NavList handleToggleMenu={handleToggleMenu} />}
      <Main>
        <Carousel handleShowProductModal={handleShowProductModal} />
        <Product>
          <ProductInfo />
          <ProductCounter
            count={count}
            setCount={setCount}
            handleAddtoCart={handleAddtoCart}
          />
        </Product>
      </Main>
      {(cartlist || isCartModalActive) && (
        <CartModal count={count} handleCheckout={handleCheckout} />
      )}
      {isProductModalActive && (
        <ProductModal handleRemoveProductModal={handleRemoveProductModal} />
      )}
    </main>
  );
}

export default App;
