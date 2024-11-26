import images from "../images";
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
    <section className='flex w-auto flex-col gap-y-[2.5rem] lg:w-[120rem]'>
      <div className='relative'>
        {images.map((image, index) => (
          <div key={image.id}>
            <img
              src={image.url}
              alt={`product image-${index + 1}`}
              className={`w-full ${index === activeIndex ? "block" : "hidden"} lg:rounded-[2rem]`}
            />
          </div>
        ))}
        <div className='absolute left-[50%] top-[50%] mx-auto flex w-full translate-x-[-50%] translate-y-[-100%] justify-between'>
          <button
            className='relative left-[5rem] rounded-[2rem] bg-neutral-white px-3 py-2 lg:hidden'
            onClick={handlePrevSlide}
          >
            <img src='/images/icon-previous.svg' />
          </button>
          <button
            className='relative right-[5rem] rounded-[2rem] bg-neutral-white px-3 py-2 lg:hidden'
            onClick={handleNextSlide}
          >
            <img src='/images/icon-next.svg' />
          </button>
        </div>
      </div>
      <div className='hidden lg:flex lg:gap-x-[3rem]'>
        {images.map((image, index) => (
          <div key={image.id}>
            <img
              src={image.url}
              alt={`product image-${index + 1}`}
              className={`border-4 ${index === activeIndex ? "border-primary-orange-200 opacity-50" : "border-transparent"} cursor-pointer rounded-[1.2rem]`}
              onClick={() => {}}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Carousel;
