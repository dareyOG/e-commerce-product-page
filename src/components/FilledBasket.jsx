import CartButton from "./CartButton";
import icon_delete from "../assets/images/icon-delete.svg";
import formatCurrency from "../formatCurrency";
import { useSneaker } from "../context/SneakerContext";

function FilledBasket() {
  const { cartlist, dispatch } = useSneaker();

  return (
    <div className='m-8 mb-16 grid grid-flow-dense gap-y-5'>
      <div className='flex items-center justify-between gap-x-[0.15rem]'>
        <img
          src={cartlist.at(0).thumbnail}
          alt='product-1-thumbnail'
          className='w-[4rem] rounded-[.5rem] md:w-[5rem]'
        />
        <div className='capitalize text-neutral-grayishBlue-300'>
          <p>{cartlist.at(0).name}</p>
          <span>
            {formatCurrency(cartlist.at(0).unitPrice)}{" "}
            <span className='text-[0.8rem]'>x</span> {cartlist.at(0).quantity}
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
              type: "delete_product_from_cart",
              payload: cartlist.at(0),
            });
          }}
        >
          <img src={icon_delete} className='w-[1.5rem]' />
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
