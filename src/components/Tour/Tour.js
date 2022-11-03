import React from "react";

import "./Tour.scss";

const Tour = ({tour}) => {
    const {city, img, name, info} = tour;
    return (
      <article className="tour">
        <div className="img-container">
          <img width="200" src={img} alt="" />
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            {info}
            <span>
                <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium tenetur consectetur corporis commodi vitae expedita doloribus, perspiciatis est quia ipsa laborum iste mollitia exercitationem reprehenderit incidunt cupiditate recusandae nostrum quae.</p>
        </div>
      </article>
    );
  }
export default Tour;
