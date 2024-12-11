import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useSneaker } from "../context/SneakerContext";
import images from "../images";

function SneakerModal() {
  const { activeIndex, dispatch } = useSneaker();

  return (
    <div className='hidden lg:block'>
      <div className='fixed left-0 top-0 z-30 h-screen w-screen bg-neutral-black opacity-85'></div>
      <section className='fixed left-[50%] top-[10%] z-40 flex w-[42rem] translate-x-[-50%] flex-col items-center justify-center gap-8'>
        <div className='relative space-y-8'>
          <div
            role='button'
            aria-label='close modal'
            className='flex items-center justify-end'
            onClick={() => {
              dispatch({ type: "toggle_product_modal" });
            }}
          >
            <X className='size-8 stroke-neutral-white hover:stroke-primary-orange-200' />
          </div>
          <div className=''>
            {images.map((image, index) => (
              <div key={image.id}>
                <img
                  src={image.url}
                  alt={`product image-${index + 1}`}
                  className={`w-auto ${index === activeIndex ? "block" : "hidden"} lg:rounded-[2rem]`}
                />
              </div>
            ))}
          </div>
          <div className='absolute left-1/2 top-1/2 mx-auto flex w-full -translate-x-1/2 -translate-y-1/2 justify-between'>
            <button
              className='relative left-[-3.5%] rounded-full bg-neutral-white stroke-[2.5px] p-2'
              onClick={() => {
                dispatch({ type: "previous_slide" });
              }}
            >
              <ChevronLeft className='size-8 hover:stroke-primary-orange-200' />
            </button>
            <button
              className='relative right-[-3.5%] rounded-full bg-neutral-white stroke-[2.5px] p-2'
              onClick={() => {
                dispatch({ type: "next_slide" });
              }}
            >
              <ChevronRight className='size-8 hover:stroke-primary-orange-200' />
            </button>
          </div>
        </div>
        <div className='flex items-center justify-center gap-x-[1.5rem] px-[3rem]'>
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`w-32 border-[2.7px] ${index === activeIndex ? "border-primary-orange-200" : "border-transparent"} rounded-[1.5rem]`}
            >
              <span
                className={`fixed aspect-square w-[7.56rem] rounded-[1.2rem] ${index === activeIndex ? "bg-neutral-white opacity-55" : ""}`}
              ></span>
              <img
                src={image.url}
                alt={`product image-${index + 1}`}
                className='rounded-[1.25rem] object-cover'
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SneakerModal;
