import formatCurrency from "../formatCurrency";

function ProductInfo() {
  return (
    <section className=''>
      <header className='font-bold'>
        <div className='w-fit text-[1.4rem] uppercase text-neutral-grayishBlue-300 lg:text-[1.6rem]'>
          sneaker company
        </div>
        <h1 className='w-fit text-[2.7rem] font-bold capitalize text-neutral-black lg:text-[3.5rem]'>
          Fall Limited Edition <br /> Sneakers
        </h1>
      </header>
      <p className='py-[2rem] text-[1.4rem] text-neutral-grayishBlue-300 lg:text-[1.6rem]'>
        {" "}
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className='flex items-center justify-between font-bold text-neutral-grayishBlue-400 lg:w-fit lg:flex-col lg:items-start lg:justify-start lg:gap-y-4'>
        <div className='flex items-center gap-8'>
          <span className='text-[3rem]'>{formatCurrency(125)}</span>
          <span className='rounded-[0.5rem] bg-neutral-black px-3 py-1 text-[1.5rem] text-neutral-grayishBlue-100'>
            50%
          </span>
        </div>
        <div className='text-[2rem] text-neutral-grayishBlue-300 line-through'>
          {formatCurrency(250)}
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;
