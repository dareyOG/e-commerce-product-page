import images from "../images";
import { useState } from "react";

function ProductModal({
  activeIndex,
  handlePrevSlide,
  handleNextSlide,
  handleRemoveProductModal,
}) {
  return (
    <div className='hidden lg:block'>
      <div className='fixed left-0 top-0 z-30 h-screen w-screen bg-neutral-black opacity-85'></div>
      <section className='fixed left-[50%] top-[10%] z-40 flex w-[42rem] translate-x-[-50%] flex-col items-center justify-center gap-8'>
        <div className='relative space-y-8'>
          <div
            role='button'
            aria-label='close modal'
            className='flex items-center justify-end'
          >
            <img
              src='/images/icon-close.svg'
              alt='close'
              onClick={handleRemoveProductModal}
            />
          </div>
          <div className=''>
            {images.map((image, index) => (
              <div key={image.id}>
                <img
                  src={image.url}
                  alt={`product image-${index + 1}`}
                  className={`w-full ${index === activeIndex ? "block" : "hidden"} lg:rounded-[2rem]`}
                />
              </div>
            ))}
          </div>
          <div className='absolute left-1/2 top-1/2 mx-auto flex w-full -translate-x-1/2 -translate-y-1/2 justify-between'>
            <button
              className='relative left-[-2.5%] rounded-[2rem] bg-neutral-white px-3 py-2'
              onClick={handlePrevSlide}
            >
              <img src='/images/icon-previous.svg' />
            </button>
            <button
              className='relative right-[-2.5%] rounded-[2rem] bg-neutral-white px-3 py-2'
              onClick={handleNextSlide}
            >
              <img src='/images/icon-next.svg' />
            </button>
          </div>
        </div>
        <div className='flex items-center justify-center gap-x-[1.5rem] px-[3rem]'>
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`w-50 ${index === activeIndex ? "border-[2.7px] border-primary-orange-200" : ""} cursor-pointer rounded-[1.5rem] hover:border-transparent`}
            >
              <span
                className={`fixed aspect-square w-[18.45%] rounded-[1.25rem] ${index === activeIndex ? "bg-neutral-white opacity-45" : ""} opacity-45 hover:bg-neutral-white`}
              ></span>
              <img
                src={image.url}
                alt={`product image-${index + 1}`}
                className='rounded-[1.25rem] object-cover'
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
