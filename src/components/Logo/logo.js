import React, { useContext } from "react";
import { PageContext } from "../../pageContextProvider";

const Logo = (props) => {
  const { slideNumber, setSlideNumber } = useContext(PageContext);
  const data = props.props;
  const handleChoose = (event) => {
    setSlideNumber((prev) => parseInt(event.target.getAttribute("id")));
  };
  return (
    data.length > 0 && (
      <div class="carousel__snapper__div">
        <ol className="carousel__navigation-list">
          {data.map((e) => (
            <li key={e.id} className="carousel__navigation-item">
              <a
                key={e.id}
                className="carousel__navigation-button"
                href={`#carousel__slide${e.id}`}
                onClick={handleChoose}
              >
                <img
                  id={e.id}
                  key={e.id}
                  className="carousel__navigation-item-img"
                  src={`${e.thumbnailUrl}`}
                  alt={`${e.title}`}
                />
              </a>
              <span className="carousel__navigation-caption">
                {e.title.split(" ")[0]}
              </span>
            </li>
          ))}
        </ol>
      </div>
    )
  );
};

export default Logo;
