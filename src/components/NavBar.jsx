import menu from "../assets/images/icon-menu.svg";
import logo from "../assets/images/logo.svg";
import cart from "../assets/images/icon-cart.svg";

function NavBar({ toggleMenu }) {
  return (
    <nav className='flex h-[10rem] items-center justify-between p-10 *:border-b-primary-orange-200 lg:mx-[13rem] lg:border-b-[0.1rem] lg:border-neutral-grayishBlue-200 lg:px-0 lg:hover:text-neutral-grayishBlue-400'>
      <div className='group flex w-auto items-center justify-between gap-x-[2rem]'>
        <div
          aria-label='menu'
          className='w-auto group-has-[button]:cursor-pointer lg:hidden'
          onClick={toggleMenu}
        >
          <img src={menu} alt='nav menu' className='w-[2rem]' />
        </div>
        <div className='flex items-center justify-between gap-x-[5rem]'>
          <img src={logo} alt='logo' className='w-auto' />
          <ul className='hidden items-center gap-x-[3.5rem] text-[1.8rem] *:text-neutral-grayishBlue-300 lg:flex'>
            <li className='flex h-[10rem] items-center justify-center hover:border-b-[0.2rem] hover:border-b-primary-orange-200'>
              <a href='' className='hover:text-neutral-grayishBlue-400'>
                Collections
              </a>{" "}
            </li>
            <li className='flex h-[10rem] items-center hover:border-b-[0.2rem] hover:border-b-primary-orange-200'>
              <a href='' className='hover:text-neutral-grayishBlue-400'>
                Men
              </a>{" "}
            </li>
            <li className='flex h-[10rem] items-center hover:border-b-[0.2rem] hover:border-b-primary-orange-200'>
              <a href='' className='hover:text-neutral-grayishBlue-400'>
                Women
              </a>{" "}
            </li>
            <li className='flex h-[10rem] items-center hover:border-b-[0.2rem] hover:border-b-primary-orange-200'>
              <a href='' className='hover:text-neutral-grayishBlue-400'>
                About
              </a>{" "}
            </li>
            <li className='flex h-[10rem] items-center hover:border-b-[0.2rem] hover:border-b-primary-orange-200'>
              <a href='' className='hover:text-neutral-grayishBlue-400'>
                Contact
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className='flex items-center justify-center gap-x-[2rem] *:cursor-pointer'>
        <div>
          <img src={cart} className='relative' />
          <p className='absolute top-[2.5rem] translate-x-2 rounded-[4rem] bg-primary-orange-200 px-[1.1rem] py-[0.25rem] text-[0.1rem] text-neutral-white'>
            3
          </p>
        </div>
        <img
          src=' /images/image-avatar.png'
          className='border-transparent w-[4rem] rounded-[50%] border-2 hover:border-primary-orange-200'
        />
      </div>
    </nav>
  );
}

export default NavBar;
