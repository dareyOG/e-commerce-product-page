function Main({ children }) {
  return (
    <main className='flex flex-col lg:mx-40 lg:flex-row lg:gap-x-[15rem] lg:p-32'>
      {children}
    </main>
  );
}

export default Main;
