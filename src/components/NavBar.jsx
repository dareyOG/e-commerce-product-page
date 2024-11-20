import menu from '../assets/images/icon-menu.svg';
import logo from '../assets/images/logo.svg';
import cart from '../assets/images/icon-cart.svg';

function NavBar() {
  return (
    <nav className="flex justify-between items-center p-16 lg:border-b lg:border-neutral-grayishBlue-200">
      <div className="flex items-center gap-10">
        <img src={menu} className="w-[2rem] lg:hidden cursor-pointer" />
        <img src={logo} className="w-auto cursor-pointer" />
        <ul className="hidden lg:flex lg:justify-between lg:gap-10 ">
          <li>
            <a href="">Collections</a>{' '}
          </li>
          <li>
            <a href="">Men</a>{' '}
          </li>
          <li>
            <a href="">Women</a>{' '}
          </li>
          <li>
            <a href="">About</a>{' '}
          </li>
          <li>
            <a href="">Contact</a>{' '}
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-10">
        <img src={cart} className="cursor-pointer" />
        <img src=" /images/image-avatar.png" className="w-10" />
      </div>
    </nav>
  );
}

export default NavBar;
