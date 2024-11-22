function NavList({ toggleMenu }) {
  return (
    <nav>
      <div className='fixed left-0 top-0 z-10 h-[100vh] w-[100vw] bg-neutral-black/50'></div>
      <div className='fixed top-0 z-30 h-[100vh] w-[67vw] bg-neutral-white pl-10 pt-10'>
        <button onClick={toggleMenu}>
          <img src='/images/icon-close.svg' alt='close menu' />
        </button>
        <ul className='mt-20 flex flex-col gap-10 text-[2rem] font-bold capitalize text-neutral-grayishBlue-400'>
          <li>
            <a href=''>collections</a>
          </li>
          <li>
            <a href=''>men</a>
          </li>
          <li>
            <a href=''>women</a>
          </li>
          <li>
            <a href=''>about</a>
          </li>
          <li>
            <a href=''>contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavList;
