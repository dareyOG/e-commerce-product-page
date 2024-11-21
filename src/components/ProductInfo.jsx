import Carousel from "./Carousel";

function ProductInfo() {
  return (
    <section className='p-10 text-[1.9rem]'>
      <header className='font-bold'>
        <div className='text-[1.4rem] uppercase text-neutral-grayishBlue-300'>
          sneaker company
        </div>
        <h1 className='text-[2.7rem] font-bold capitalize text-neutral-black'>
          Fall Limited Edition <br /> Sneakers
        </h1>
      </header>
      <p className='py-5 text-[1.4rem] text-neutral-grayishBlue-300'>
        {" "}
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className='flex items-center justify-between font-bold text-neutral-grayishBlue-400'>
        <div className=''>
          <span className='mr-8 text-[3rem]'>$125.00</span>
          <span className='rounded-md bg-neutral-black px-3 py-1 text-[2rem] text-neutral-grayishBlue-100'>
            50%
          </span>
        </div>
        <div className='text-[2rem] text-neutral-grayishBlue-300 line-through'>
          $250.00
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;
