import menu from "../assets/images/icon-menu.svg";
import logo from "../assets/images/logo.svg";
import cart from "../assets/images/icon-cart.svg";

function NavBar({ toggleMenu }) {
  return (
    <nav className='flex items-center justify-between p-8 lg:border-b lg:border-neutral-grayishBlue-200'>
      <div className='flex items-center gap-10'>
        <button
          className='w-[2rem] cursor-pointer lg:hidden'
          onClick={toggleMenu}
        >
          <img src={menu} alt='nav menu' />
        </button>
        <img src={logo} alt='logo' className='w-auto' />
        <ul className='hidden lg:flex lg:justify-between lg:gap-10'>
          <li>
            <a href=''>Collections</a>{" "}
          </li>
          <li>
            <a href=''>Men</a>{" "}
          </li>
          <li>
            <a href=''>Women</a>{" "}
          </li>
          <li>
            <a href=''>About</a>{" "}
          </li>
          <li>
            <a href=''>Contact</a>{" "}
          </li>
        </ul>
      </div>
      <div className='flex items-center gap-10'>
        <div className='cursor-pointer'>
          <img src={cart} className='relative' />
          <p className='absolute top-[0.8rem] translate-x-2 rounded-[4rem] bg-primary-orange-200 px-[1.1rem] py-[0.25rem] text-[0.1rem] text-neutral-white'>
            3
          </p>
        </div>
        <img
          src=' /images/image-avatar.png'
          className='w-10 rounded-[50%] border border-neutral-grayishBlue-100 hover:border-primary-orange-200'
        />
      </div>
    </nav>
  );
}

export default NavBar;
