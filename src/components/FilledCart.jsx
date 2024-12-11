import { useSneaker } from "../context/SneakerContext";
import CartButton from "./CartButton";
import formatCurrency from "../formatCurrency";
import { Trash2 } from "lucide-react";

function FilledBasket() {
  const { cartlist, dispatch } = useSneaker();

  return (
    <div className='m-8 grid grid-flow-dense gap-y-9'>
      <div className='flex items-center justify-between gap-x-[0.2rem]'>
        <img
          src={cartlist.at(0).thumbnail}
          alt='product-1-thumbnail'
          className='w-[4rem] rounded-[.5rem]'
        />
        <div className='text-[1.25rem] capitalize text-neutral-grayishBlue-300 lg:text-[1.6rem]'>
          <p>{cartlist.at(0).name}</p>
          <span>
            {formatCurrency(cartlist.at(0).unitPrice)}{" "}
            <span className='text-[0.5rem]'>x</span> {cartlist.at(0).quantity}
          </span>
          <span className='font-bold text-neutral-grayishBlue-400'>
            {" "}
            {formatCurrency(
              cartlist.at(0).totalPrice ||
                cartlist.at(0).quantity * cartlist.at(0).unitPrice,
            )}
          </span>
        </div>
        <button
          onClick={() => {
            dispatch({
              type: "remove_from_cart",
              payload: cartlist.at(0),
            });
          }}
        >
          <Trash2 className='size-8 stroke-neutral-grayishBlue-300' />
        </button>
      </div>
      <CartButton
        onClick={() => {
          dispatch({ type: "checkout" });
        }}
      >
        Checkout
      </CartButton>
    </div>
  );
}

export default FilledBasket;
