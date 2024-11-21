import EmptyBasket from "./EmptyBasket";
import FilledBasket from "./FilledBasket";

function CartModal() {
  return (
    <main className='shadow-3xl mx-auto flex w-[80%] flex-col rounded-[2rem] border-0 border-neutral-grayishBlue-300'>
      <h1 className='border-b border-neutral-grayishBlue-200 py-12 pl-8 text-[2rem] font-bold text-neutral-grayishBlue-400'>
        Cart
      </h1>
      <>
        <FilledBasket />
        {/* <EmptyBasket /> */}
      </>
    </main>
  );
}

export default CartModal;
