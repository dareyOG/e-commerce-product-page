// import Carousel from './Carousel';

import Arrows from './Arrows';
import Image from './Image';

function Product() {
  return (
    <main className="">
      <Image />
      <Arrows />
      <section>
        <header>
          <div>sneaker company</div>
          <h1>
            Fall Limited Edition <br /> Sneakers
          </h1>
        </header>
        <p>
          {' '}
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable
          rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <div className="">
          <div>
            <span>$125.00</span>
            <span>50%</span>
          </div>
          <div>$250.00</div>
        </div>
      </section>
    </main>
  );
}

export default Product;
