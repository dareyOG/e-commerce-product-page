import menu from "../assets/images/icon-menu.svg";
import logo from "../assets/images/logo.svg";
import cart from "../assets/images/icon-cart.svg";
import { useSneaker } from "../context/SneakerContext";

function NavBar() {
  const { cartlist, dispatch } = useSneaker();

  return (
    <nav className='flex h-[10rem] items-center justify-between p-10 *:border-b-primary-orange-200 lg:mx-[13rem] lg:border-b-[0.1rem] lg:border-neutral-grayishBlue-200 lg:px-0 lg:hover:text-neutral-grayishBlue-400'>
      <div className='group flex w-auto items-center justify-between gap-x-[2rem]'>
        <div
          aria-label='menu'
          role='button'
          className='cursor-pointer lg:hidden'
          onClick={() => {
            dispatch({ type: "toggle_navMenu" });
          }}
        >
          <img src={menu} alt='nav menu' className='w-[2rem]' />
        </div>
        <div className='flex items-center justify-between gap-x-[5rem]'>
          <img src={logo} alt='logo' className='w-auto' />
          <ul className='hidden items-center gap-x-[3.5rem] text-[1.8rem] *:text-neutral-grayishBlue-300 lg:flex'>
            <li className='navBar__list'>
              <a href=''>Collections</a>{" "}
            </li>
            <li className='navBar__list'>
              <a href=''>Men</a>{" "}
            </li>
            <li className='navBar__list'>
              <a href=''>Women</a>{" "}
            </li>
            <li className='navBar__list'>
              <a href=''>About</a>{" "}
            </li>
            <li className='navBar__list'>
              <a href=''>Contact</a>{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className='flex items-center justify-center gap-x-[2rem] *:cursor-pointer'>
        <div
          onClick={() => {
            dispatch({ type: "toggle_cart" });
          }}
        >
          <img src={cart} className='relative' />
          {cartlist?.length > 0 && (
            <div className='absolute top-[2.5rem] translate-x-2 rounded-[4rem] bg-primary-orange-200 px-[1.1rem] py-[0.25rem] text-[0.1rem] text-neutral-white'>
              {cartlist.at(0).quantity}
            </div>
          )}
        </div>
        <img
          src=' /images/image-avatar.png'
          className='w-[4rem] rounded-full border-2 border-transparent hover:border-primary-orange-200'
        />
      </div>
    </nav>
  );
}

export default NavBar;
