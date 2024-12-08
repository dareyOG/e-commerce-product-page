import images from "../images";

function Carousel({ activeIndex, dispatch }) {
  const handlePrevSlide = () => {
    dispatch({ type: "previous_slide" });
  };

  const handleNextSlide = () => {
    dispatch({ type: "next_slide" });
  };

  const handleToggleProductModal = () => {
    dispatch({ type: "toggle_product_modal" });
  };

  return (
    <section className='flex w-auto flex-col gap-y-[2.5rem] lg:w-[80rem]'>
      <div
        className='relative cursor-pointer'
        onClick={handleToggleProductModal}
      >
        {images.map((image, index) => (
          <div key={image.id} onClick={() => {}}>
            <img
              src={image.url}
              alt={`product image-${index + 1}`}
              className={`w-full ${index === activeIndex ? "block" : "hidden"} lg:rounded-[2rem]`}
            />
          </div>
        ))}
        <div className='absolute left-[50%] top-[50%] mx-auto flex w-full -translate-x-1/2 -translate-y-full justify-between'>
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
          <div
            key={image.id}
            className={`w-50 ${index === activeIndex ? "border-2 border-primary-orange-200" : "border-neutral-black"} cursor-pointer rounded-[1.5rem] hover:border-transparent`}
          >
            <img
              src={image.url}
              alt={`product image-${index + 1}`}
              className={` ${index === activeIndex ? "border-primary-orange-200 opacity-50" : "border-transparent"} cursor-pointer rounded-[1.2rem]`}
              // onClick={() => {}}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Carousel;

//   <div
//   key={image.id}
//   className={`w-50 ${index === activeIndex ? "border-[2.7px] border-primary-orange-200" : ""} cursor-pointer rounded-[1.5rem] hover:border-transparent`}
// >
//   <span
//     className={`fixed aspect-square w-[18.45%] rounded-[1.25rem] ${index === activeIndex ? "bg-neutral-white opacity-45" : ""} opacity-45 hover:bg-neutral-white`}
//   ></span>
//   <img
//     src={image.url}
//     alt={`product image-${index + 1}`}
//     className='rounded-[1.25rem] object-cover'
//     onClick={() => {}}
//   />
// </div>;
