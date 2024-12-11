import { useSneaker } from "../context/SneakerContext";
import CartButton from "./CartButton";
import { Minus, Plus, ShoppingCart } from "lucide-react";

function Counter() {
  const { count, dispatch } = useSneaker();

  const productCount = count;

  const cartProduct = {
    name: "fall limited edition sneakers",
    thumbnail: "/images/image-product-1-thumbnail.jpg",
    unitPrice: 125,
    quantity: productCount,
  };

  return (
    <section className='flex w-full flex-col gap-5 lg:mb-0 lg:flex-row lg:gap-x-8'>
      <div className='flex items-center justify-between gap-8 rounded-[1.1rem] border-2 border-transparent bg-neutral-grayishBlue-100 p-[1.2rem] lg:w-1/2 lg:px-[2.5rem]'>
        <button
          onClick={() => {
            dispatch({ type: "decrease_count" });
          }}
        >
          <Minus className='size-8 stroke-primary-orange-200 stroke-[3px] lg:stroke-[2.5px]' />
        </button>
        <p className='font-bold text-neutral-grayishBlue-400'>{productCount}</p>
        <button
          onClick={() => {
            dispatch({ type: "increase_count" });
          }}
        >
          <Plus className='size-8 stroke-primary-orange-200 stroke-[3px] lg:stroke-[2.5px]' />
        </button>
      </div>
      <CartButton
        onClick={() => {
          dispatch({ type: "add_to_cart", payload: cartProduct });
        }}
      >
        <ShoppingCart className='size-8' />
        <span>Add to cart</span>
      </CartButton>
    </section>
  );
}

export default Counter;
