import images from "../images";
// import icon_previous from "../assets/images/icon-previous.svg";
import icon_next from "../assets/images/icon-next.svg";
import { useState } from "react";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevSlide = () => {
    setActiveIndex(curr_index =>
      curr_index === 0 ? images.length - 1 : curr_index - 1,
    );
  };

  const handleNextSlide = () => {
    setActiveIndex(curr_index =>
      curr_index === images.length - 1 ? 0 : curr_index + 1,
    );
  };

  return (
    <section className='relative'>
      {images.map((image, index) => (
        <div key={image.id}>
          <img
            src={image.url}
            alt={`product image-${index + 1}`}
            className={`${index === activeIndex ? "block" : "hidden"}`}
          />
        </div>
      ))}
      <div className='absolute left-[50%] top-[50%] mx-auto flex w-[40rem] translate-x-[-50%] translate-y-[-50%] justify-between'>
        <button
          className='relative left-[4rem] rounded-[2.5rem] bg-neutral-white px-8 py-6'
          onClick={handlePrevSlide}
        >
          <img src='/public/images/icon-previous.svg' />
        </button>
        <button
          className='relative right-[4rem] rounded-[2.5rem] bg-neutral-white px-8 py-6'
          onClick={handleNextSlide}
        >
          <img src='/public/images/icon-next.svg' />
        </button>
      </div>
    </section>
  );
}

export default Carousel;
