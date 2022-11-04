import React, { useState } from "react";

import "./Tour.scss";

const Tour = ({ tour }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleInfo = () => {
   setShowInfo(!showInfo);
  };

  const { city, img, name, info } = tour;
  return (
    <article className="tour">
      <div className="img-container">
        <img width="200" src={img} alt="" />
      </div>
      <div className="tour-info">
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          info
          <span onClick={handleInfo}>
            <i className="fas fa-caret-square-down" />
          </span>
        </h5>
        {showInfo && <p>{info}</p>}
      </div>
    </article>
  );
};
export default Tour;
