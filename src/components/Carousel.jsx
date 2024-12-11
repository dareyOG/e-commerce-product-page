import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSneaker } from "../context/SneakerContext";
import images from "../images";

function Carousel() {
  const { activeIndex, dispatch } = useSneaker();

  return (
    <section className='flex w-auto flex-col gap-y-[2.5rem] lg:w-[80rem]'>
      <div
        className='relative cursor-pointer'
        onClick={() => {
          dispatch({ type: "toggle_product_modal" });
        }}
      >
        {images.map((image, index) => (
          <div key={image.id}>
            <img
              src={image.url}
              alt={`product image-${index + 1}`}
              className={`w-full ${index === activeIndex ? "block" : "hidden"} lg:rounded-[2rem]`}
            />
          </div>
        ))}
        <div className='absolute left-[50%] top-[50%] mx-auto flex w-full -translate-x-1/2 -translate-y-full justify-between'>
          <button
            className='relative left-[3rem] rounded-full bg-neutral-white p-2 lg:hidden'
            onClick={() => {
              dispatch({ type: "previous_slide" });
            }}
          >
            <ChevronLeft className='size-8 stroke-[3px] hover:stroke-primary-orange-200' />
          </button>
          <button
            className='relative right-[3rem] rounded-[2rem] bg-neutral-white p-2 lg:hidden'
            onClick={() => {
              dispatch({ type: "next_slide" });
            }}
          >
            <ChevronRight className='size-8 stroke-[3px] hover:stroke-primary-orange-200' />
          </button>
        </div>
      </div>
      <div className='hidden lg:flex lg:gap-x-[3rem]'>
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`w-24 ${index === activeIndex ? "border-[2.67px] border-primary-orange-200" : "border-transparent"} cursor-pointer rounded-[1.8rem]`}
            onClick={() => {
              dispatch({ type: "show_image", payload: index });
            }}
          >
            <img
              src={image.thumbnail}
              alt={`product thumbnail-${index + 1}`}
              className={` ${index === activeIndex ? "border-primary-orange-200 opacity-50" : "border-transparent hover:opacity-50"} rounded-[1.5rem]`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Carousel;
