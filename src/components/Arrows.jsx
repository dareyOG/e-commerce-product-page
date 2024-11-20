import icon_previous from '../assets/images/icon-previous.svg';
import icon_next from '../assets/images/icon-next.svg';

function Arrows() {
  return (
    <div className="flex justify-between mx-10 ">
      <button onClick={() => {}}>
        {' '}
        <img
          src={icon_previous}
          alt="previous"
          className="bg-neutral-white w-auto px-4 py-3 absolute top-[40%] left-[5%] rounded-[50%]"
        />
      </button>

      <button onClick={() => {}}>
        <img
          src={icon_next}
          alt="next"
          className="bg-neutral-white w-auto px-4 py-3 absolute top-[40%] right-[5%] rounded-[50%]"
        />
      </button>
    </div>
  );
}

export default Arrows;
