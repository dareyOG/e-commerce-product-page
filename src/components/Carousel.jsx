import { useState } from 'react';
import sliderImage from '../sliderImage';
import { useEffect } from 'react';
import SliderContent from './SliderContent';

const imageIndex = sliderImage.length - 1;

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(
  //   function () {
  //     setActiveIndex(activeIndex === imageIndex ? 0 : activeIndex + 1);
  //   },
  //   [activeIndex]
  // );
  return (
    <section>
      <SliderContent />
    </section>
  );
}

export default Carousel;
