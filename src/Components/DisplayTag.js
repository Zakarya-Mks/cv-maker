import React from 'react';

function DisplayTag(props) {
  const { tagName, classNames, displayValue } = props;

  return React.createElement(
    tagName,
    {
      className: classNames,
    },
    displayValue
  );
}

export default DisplayTag;
