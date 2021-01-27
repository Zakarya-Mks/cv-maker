import React from 'react';

function Rating() {
  const fill = (event) => {
    let targetReached = false;
    const parent = event.target.parentNode;

    [...parent.children].forEach((child) => {
      if (!targetReached) {
        child.classList.add('bg-info');
      } else {
        child.classList.remove('bg-info');
      }

      if (child === event.target) {
        targetReached = true;
      }
    });
  };

  return (
    <div className="d-flex ratingContainer">
      <div
        onClick={fill}
        className="border border-info rounded-circle w-15By15 mr-1 bg-info"
      ></div>
      <div
        onClick={fill}
        className="border border-info rounded-circle w-15By15 mr-1 bg-info"
      ></div>
      <div
        onClick={fill}
        className="border border-info rounded-circle w-15By15 mr-1 bg-info"
      ></div>
      <div
        onClick={fill}
        className="border border-info rounded-circle w-15By15 mr-1"
      ></div>
      <div
        onClick={fill}
        className="border border-info rounded-circle w-15By15 mr-1"
      ></div>
    </div>
  );
}

export default Rating;
