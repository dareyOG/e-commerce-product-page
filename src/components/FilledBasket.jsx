import CartButton from "./CartButton";
import icon_delete from "../assets/images/icon-delete.svg";

function FilledBasket({
  cartlist,
  handleDeleteProduct,
  handleCheckout,
  formatCurrency,
}) {
  const { name, thumbnail, quantity, unitPrice, totalPrice } = cartlist.at(0);

  return (
    <div className='m-8 mb-16 grid grid-flow-dense gap-y-5'>
      <div className='flex items-center justify-between gap-x-[0.15rem]'>
        <img
          src={thumbnail}
          alt='product-1-thumbnail'
          className='w-[4rem] rounded-[.5rem] md:w-[5rem]'
        />
        <div className='capitalize text-neutral-grayishBlue-300'>
          <p>{name}</p>
          <span>
            {formatCurrency(unitPrice)} <span className='text-[0.8rem]'>x</span>{" "}
            {quantity}
          </span>
          <span className='font-bold text-neutral-grayishBlue-400'>
            {" "}
            {formatCurrency(totalPrice || quantity * unitPrice)}
          </span>
        </div>
        <button onClick={handleDeleteProduct}>
          <img src={icon_delete} className='w-[1.5rem]' />
        </button>
      </div>
      <CartButton onClick={handleCheckout}>Checkout</CartButton>
    </div>
  );
}

export default FilledBasket;
