import { useSneaker } from "../context/SneakerContext";
import { X } from "lucide-react";

function NavList() {
  const { dispatch } = useSneaker();
  return (
    <nav>
      <div className='fixed left-0 top-0 z-10 h-screen w-screen bg-neutral-black opacity-80'></div>
      <div className='fixed top-0 z-30 h-screen w-[67vw] bg-neutral-white pl-10 pt-10'>
        <button
          onClick={() => {
            dispatch({ type: "toggle_navMenu" });
          }}
          className='mt-5'
        >
          <X className='size-8' />
        </button>
        <ul className='mt-20 flex flex-col gap-[2rem] text-[2rem] font-bold capitalize text-neutral-grayishBlue-400'>
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
