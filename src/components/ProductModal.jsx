import images from "../images";
import { useState } from "react";
import EmptyBasket from "./EmptyBasket";
import FilledBasket from "./FilledBasket";

function ProductModal({ cartList }) {
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
    <div className='hidden lg:block'>
      <div className='fixed left-0 top-0 z-30 h-[100vh] w-[100vw] bg-neutral-black/70'></div>
      <section className='fixed left-[50%] top-[10%] z-40 flex w-[50rem] translate-x-[-50%] flex-col items-center justify-center gap-8'>
        <div className='relative'>
          <div>&times;</div>
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
        <div className='flex items-center justify-center gap-x-[1.5rem] px-[3rem]'>
          {images.map((image, index) => (
            <div key={image.id} className='w-50 bg-neutral-white'>
              {/* <div className=''>rgrqt</div> */}
              <img
                src={image.url}
                alt={`product image-${index + 1}`}
                className={`w-80 border-4 ${index === activeIndex ? "border-primary-orange-200 bg-neutral-white" : "border-transparent"} cursor-pointer rounded-[1.2rem]`}
                onClick={() => {}}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductModal;
// fixed left-[50%] top-0 flex h-[100vh] translate-x-[-50%] items-center
