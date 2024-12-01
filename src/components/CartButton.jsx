function CartButton({ children, onclick }) {
  return (
    <button
      className='mx-auto flex w-full items-center justify-center gap-x-4 rounded-[1.1rem] bg-primary-orange-200 px-[5rem] py-[1.2rem] font-bold text-neutral-black hover:bg-primary-orange-200/80'
      onClick={onclick}
    >
      {children}
    </button>
  );
}

export default CartButton;
