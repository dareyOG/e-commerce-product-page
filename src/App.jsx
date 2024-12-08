import NavList from "./components/NavList";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Carousel from "./components/Carousel";
import Product from "./components/Product";
import ProductInfo from "./components/ProductInfo";
import ProductCounter from "./components/ProductCounter";
import CartModal from "./components/CartModal";
import ProductModal from "./components/ProductModal";
import images from "./images";
import { useReducer, useState } from "react";

function App() {
  const initialState = {
    isNavActive: false,
    count: 0,
    activeIndex: 0,
    cartlist: [],
    isProductModalActive: false,
    isCartModalActive: false,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "toggle_navMenu":
        return {
          ...state,
          isNavActive: state.isNavActive ? false : true,
        };

      case "previous_slide":
        return {
          ...state,
          activeIndex:
            state.activeIndex === 0 ? images.length - 1 : state.activeIndex - 1,
        };

      case "next_slide":
        return {
          ...state,
          activeIndex:
            state.activeIndex === images.length - 1 ? 0 : state.activeIndex + 1,
        };

      case "increase_count":
        return { ...state, count: state.count + 1 };

      case "decrease_count":
        return { ...state, count: state.count < 1 ? 0 : state.count - 1 };

      case "add_product_to_cart":
        return {
          ...state,
          cartlist: state.count ? [action.payload] : [],
        };

      case "delete_product_from_cart":
        return {
          ...state,
          count: 0,
          cartlist: state.cartlist.filter(
            cartedProduct => cartedProduct.name !== action.payload.name,
          ),
        };

      case "toggle_cart": {
        return {
          ...state,
          isCartModalActive: state.isCartModalActive ? false : true,
        };
      }

      case "toggle_product_modal":
        return {
          ...state,
          isProductModalActive: state.isProductModalActive ? false : true,
        };

      case "checkout":
        return { ...state, isCartModalActive: false };

      default:
        throw new Error("unknown action");
    }
  }

  const [
    {
      isNavActive,
      count,
      activeIndex,
      cartlist,
      isProductModalActive,
      isCartModalActive,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  // const [isNavActive, setIsNavActive] = useState(false);

  // const [count, setCount] = useState(0);
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [isProductModalActive, setIsProductModalActive] = useState(false);
  // const [isCartModalActive, setIsCartModalActive] = useState(false);
  // const [cartlist, setCartlist] = useState([]);

  // decrease product count
  // const handleDec = () => {
  //   setCount(count => {
  //     if (count < 1) return 0;
  //     return count - 1;
  //   });
  // };

  // increase product count
  // const handleInc = () => {
  //   setCount(count => count + 1);
  // };

  // add to cart
  // const handleAddtoCart = cartItem => {
  //   if (!productCount) return;
  //   const updatedCart = cartlist
  //     .map(cartItem => cartItem.name)
  //     .includes("fall limited edition sneakers")
  //     ? {
  //         ...cartItem,
  //         totalPrice: cartItem.unitPrice * cartItem.quantity,
  //       }
  //     : cartItem;
  //   setCartlist([updatedCart]);
  // };

  // prevSlide
  // const handlePrevSlide = () => {
  //   setActiveIndex(curr_index =>
  //     curr_index === 0 ? images.length - 1 : curr_index - 1,
  //   );
  // };

  // nextSlide
  // const handleNextSlide = () => {
  //   setActiveIndex(curr_index =>
  //     curr_index === images.length - 1 ? 0 : curr_index + 1,
  //   );
  // };

  // show product modal
  // const handleShowProductModal = () => {
  //   setIsProductModalActive(true);
  // };

  // toggleCart;
  // const handleToggleCart = () => {
  // setIsCartModalActive(show => !show);
  // };

  // remove product modal
  // const handleRemoveProductModal = () => {
  //   setIsProductModalActive(false);
  // };

  // delete product item
  // const handleDeleteItem = () => {
  //   setCartlist([]);
  // };

  // checkout
  // const handleCheckout = () => {
  //   setIsCartModalActive(false);
  // };

  // format currency

  const formatCurrency = amount =>
    amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  return (
    <main>
      <NavBar cartlist={cartlist} dispatch={dispatch} />
      {isNavActive && <NavList dispatch={dispatch} />}
      <Main>
        <Carousel activeIndex={activeIndex} dispatch={dispatch} />
        <Product>
          <ProductInfo formatCurrency={formatCurrency} />
          <ProductCounter count={count} dispatch={dispatch} />
        </Product>
      </Main>
      {isCartModalActive && (
        <CartModal
          cartlist={cartlist}
          dispatch={dispatch}
          formatCurrency={formatCurrency}
        />
      )}
      {isProductModalActive && (
        <ProductModal activeIndex={activeIndex} dispatch={dispatch} />
      )}
    </main>
  );
}

export default App;
