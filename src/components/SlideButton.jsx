function SlideButton({ children }) {
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
    <button onClick={handler} className='rounded-[3rem] bg-neutral-white p-8'>
      {children}
    </button>
  );
}

export default SlideButton;
