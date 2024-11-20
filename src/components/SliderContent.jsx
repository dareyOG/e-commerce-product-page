import sliderImage from '../sliderImage';

function SliderContent() {
  return (
    <section>
      {sliderImage.map(image => (
        <img src={image.url} alt={image.title} key={image.title} className="" />
      ))}
    </section>
  );
}

export default SliderContent;
