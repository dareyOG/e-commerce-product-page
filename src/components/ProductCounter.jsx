import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";

import CartButton from "./CartButton";

function ProductCounter({ count, cartlist, setCount, setCartlist }) {
  const productCount = count;
  const cartProduct = {
    name: "fall limited edition sneakers",
    thumbnail: "/images/image-product-1-thumbnail.jpg",
    unitPrice: 125,
    quantity: productCount,
  };

  // decrease product count
  const handleDec = () => {
    setCount(count => {
      if (count < 1) return 0;
      return count - 1;
    });
  };

  // increase product count
  const handleInc = () => {
    setCount(count => count + 1);
  };

  // add to cart
  const handleAddtoCart = cartItem => {
    if (!productCount) return;
    const updatedCart = cartlist
      .map(cartItem => cartItem.name)
      .includes("fall limited edition sneakers")
      ? {
          ...cartItem,
          totalPrice: cartItem.unitPrice * cartItem.quantity,
        }
      : cartItem;
    setCartlist([updatedCart]);
  };

  return (
    <section className='mb-8 grid w-full gap-12 lg:mb-0 lg:grid-flow-col lg:gap-x-8'>
      <div className='flex items-center justify-between gap-8 rounded-[1.1rem] border-2 border-transparent bg-neutral-grayishBlue-100 p-[1.2rem] lg:px-[2.5rem]'>
        <button onClick={handleDec}>
          <img src={minus} alt='decrement' />
        </button>
        <p className='font-bold text-neutral-grayishBlue-400'>{productCount}</p>
        <button onClick={handleInc}>
          <img src={plus} alt='increment' />
        </button>
      </div>
      <CartButton onclick={() => handleAddtoCart(cartProduct)}>
        <svg
          className='fill-neutral-grayishBlue-400'
          width='22'
          height='20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
            // fill="#69707D"
            fillRule='nonzero'
          />
        </svg>
        <span>Add to cart</span>
      </CartButton>
    </section>
  );
}

export default ProductCounter;
