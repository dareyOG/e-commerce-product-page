import { createContext, useContext, useReducer } from "react";
import images from "../images";

const SneakerContext = createContext();

const initialState = {
  isNavActive: false,
  count: 0,
  activeIndex: 0,
  cartlist: [],
  isSneakerModal: false,
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

    case "display_sneaker":
      return { ...state, activeIndex: action.payload };

    case "increase_count":
      return { ...state, count: state.count + 1 };

    case "decrease_count":
      return { ...state, count: state.count < 1 ? 0 : state.count - 1 };

    case "add_to_cart":
      return {
        ...state,
        cartlist: state.count ? [action.payload] : [],
      };

    case "remove_from_cart":
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

    case "close_empty_cart": {
      return {
        ...state,
        isCartModalActive: false,
      };
    }

    case "toggle_sneaker_modal":
      return {
        ...state,
        isSneakerModal: state.isSneakerModal ? false : true,
      };

    case "checkout":
      return { ...state, isCartModalActive: false };

    default:
      throw new Error("unknown action");
  }
}

function SneakerProvider({ children }) {
  const [
    {
      isNavActive,
      count,
      activeIndex,
      cartlist,
      isSneakerModal,
      isCartModalActive,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <SneakerContext.Provider
      value={{
        isNavActive,
        count,
        activeIndex,
        cartlist,
        isSneakerModal,
        isCartModalActive,
        dispatch,
      }}
    >
      {children}
    </SneakerContext.Provider>
  );
}

function useSneaker() {
  const context = useContext(SneakerContext);
  if (!context) throw new Error("Context is placed ouside of useSneaker scope");
  return context;
}

export { SneakerProvider, useSneaker };
