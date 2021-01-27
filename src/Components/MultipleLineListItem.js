import React from 'react';
import removeImg from '../img/remove.svg';

function ExperienceListItem(props) {
  const { startDate, endDate, title, description } = props.data;

  return (
    <li id={props.id} className="position-relative mb-4">
      <div className="row">
        <div className="col-3 pr-0 pt-2">
          <h5 className="font-weight-normal text-muted">{startDate}</h5>
          <h5 className="font-weight-normal text-muted mb-0">{endDate}</h5>
        </div>
        <div className="col-9 d-flex flex-column justify-content-center pl-0">
          <h4 className="font-weight-normal text-capitalize">{title}</h4>
          <h5 className="font-weight-light font-italic text-capitalize mb-0">
            {description}
          </h5>
        </div>
      </div>
      <button
        onClick={() => {
          props.onRemove(props.id);
        }}
        className="ml-auto bg-transparent border-0 p-0 remove-Btn"
      >
        <img src={removeImg} alt="remove" />
      </button>
    </li>
  );
}

export default ExperienceListItem;
