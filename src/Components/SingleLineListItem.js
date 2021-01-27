import React from 'react';
import removeImg from '../img/remove.svg';
import Rating from './Rating';

function ListItem(props) {
  const { id, target, className, value, onRemoveBtnClick } = props;
  return (
    <li key={id} className={className} id={id}>
      <h5 className="font-weight-normal secondary-text-color mb-0">{value}</h5>
      {props.includeRating && <Rating key={`rating-${id}`} />}
      <button
        onClick={() => {
          onRemoveBtnClick(id, target);
        }}
        className="align-items-center ml-auto bg-transparent border-0 p-0 "
      >
        <img src={removeImg} alt="remove" />
      </button>
    </li>
  );
}

export default ListItem;
