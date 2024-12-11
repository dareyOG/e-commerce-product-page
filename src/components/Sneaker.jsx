function Sneaker({ children }) {
  return (
    <main className='flex flex-col lg:mx-40 lg:flex-row lg:gap-x-[10rem] lg:p-24'>
      {children}
    </main>
  );
}

export default Sneaker;
