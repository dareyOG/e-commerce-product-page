function NavList({ toggleMenu }) {
  return (
    <nav className='h-[100vh] w-[60vw] bg-primary-orange-200 pl-10 pt-10'>
      <button onClick={toggleMenu}>
        <img src='/images/icon-close.svg' />
      </button>
      <ul className='mt-20 flex flex-col gap-10 font-bold capitalize'>
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
    </nav>
  );
}

export default NavList;
