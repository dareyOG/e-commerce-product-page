import EmptyBasket from "./EmptyBasket";
import FilledBasket from "./FilledBasket";

function CartModal({ cartlist, formatCurrency }) {
  return (
    <section>
      <div className='fixed left-0 top-0 z-10 h-[100vh] w-[100vw] bg-neutral-black/50 lg:hidden'></div>
      <section className='fixed left-[50%] top-[25%] z-20 mx-auto flex h-[23rem] w-[80%] translate-x-[-50%] flex-col rounded-[1.5rem] border-0 bg-neutral-white shadow-2xl md:w-[60%] lg:absolute lg:right-[-60rem] lg:top-[7.5rem] lg:w-[35rem]'>
        <h1 className='border-b border-neutral-grayishBlue-200 p-8 text-[2rem] font-bold text-neutral-grayishBlue-400'>
          Cart
        </h1>
        <div>
          {cartlist?.length > 0 ? (
            <FilledBasket cartlist={cartlist} formatCurrency={formatCurrency} />
          ) : (
            <EmptyBasket />
          )}
        </div>
      </section>
    </section>
  );
}

export default CartModal;
