function CartButton({ children }) {
  return (
    <button className='mx-auto flex w-full items-center justify-center rounded-[1.1rem] bg-primary-orange-200 p-[1.2rem] text-[2rem] font-bold text-neutral-black hover:bg-primary-orange-200/80'>
      {children}
    </button>
  );
}

export default CartButton;

// p-[2.3rem]
// mx-auto
