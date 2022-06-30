import React, { useContext } from "react";
import { PageContext } from "../../pageContextProvider";

const Slider = (props) => {
  const { slideNumber, setSlideNumber } = useContext(PageContext);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  let currentSlide = slideNumber;
  const logos = props.props;
  const lastIndexOfArray = logos.length - 1;

  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 150) {
      handleNext();
    }

    if (touchStart - touchEnd < -150) {
      handlePrev();
    }
  }

  const handleNext = () => {
    currentSlide =
      currentSlide === logos[lastIndexOfArray].id ? 1 : currentSlide + 1;
    setSlideNumber(currentSlide);
  };
  const handlePrev = () => {
    currentSlide =
      currentSlide === logos[0].id ? lastIndexOfArray + 1 : currentSlide - 1;
    setSlideNumber(currentSlide);
  };
  const getPrev = () => {
    return (
      currentSlide === logos[0].id ? lastIndexOfArray + 1 : currentSlide - 1
    ).toString();
  };
  const getNext = () => {
    return (
      currentSlide === logos[lastIndexOfArray].id ? 1 : currentSlide + 1
    ).toString();
  };
  return (
    logos.length > 0 && (
      <div class="carousel__snapper__innerdiv">
        <section class="carousel" aria-label="Gallery">
          <ol class="carousel__viewport">
            <li
              id={`carousel__slide${currentSlide}`}
              key={currentSlide}
              tabIndex={currentSlide - 1}
              className="carousel__slide"
            >
              <div className="carousel__snapper">
                <img
                  key={logos[currentSlide - 1].id}
                  className="carousel__snapper carousel__navigation-slider-img"
                  src={`${logos[currentSlide - 1].url}`}
                  alt={`${logos[currentSlide - 1].title}`}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={() => handleTouchEnd()}
                />
                <a
                  key={getPrev}
                  className="carousel__prev"
                  href={`#carousel__slide${getPrev}`}
                  onClick={handlePrev}
                >
                  {currentSlide === logos[0].id
                    ? "Go to last slide"
                    : "Go to previous slide"}
                </a>
                <a
                  key={getNext}
                  className="carousel__next"
                  href={`#carousel__slide${getNext}`}
                  onClick={handleNext}
                >
                  {slideNumber === logos[lastIndexOfArray].id
                    ? "Go to first slide"
                    : "Go to next slide"}
                </a>
              </div>
            </li>
          </ol>
        </section>
      </div>
    )
  );
};

export default Slider;
