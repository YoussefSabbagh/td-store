import { useState, useRef, useEffect } from 'react';

const Hero = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    timeout.current = setTimeout(nextSlide, 7000);

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrentSlide((current) => (current === length - 1 ? 0 : current + 1));
  };
  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrentSlide((current) => (current === 0 ? length - 1 : current - 1));
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section id="hero" className="h-[400px] w-full relative overflow-hidden">
      <div className="w-full h-full relative flex flex-col justify-center items-center overflow-hidden  ">
        {slides.map((slide, i) => {
          return (
            <div className="w-full h-full" key={i}>
              {i === currentSlide && (
                <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center z-0 ">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="absolute left-0 top-0 object-cover object-[center] block w-full "
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center bg-red-50 p-8 text-2xl rounded-lg">
                    <h1 className="text-3xl font-bold mb-4">{slide.title}</h1>
                    <h2>{slide.subtitle0}</h2>
                    <h2>{slide.subtitle1}</h2>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
