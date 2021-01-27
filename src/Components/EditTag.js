import React from 'react';

function EditTag(props) {
  if (props.tagName === 'input') {
    const { tagName, value, onChange, className, placeholder, type } = props;
    return React.createElement(tagName, {
      className,
      value,
      onChange,
      placeholder,
      type,
    });
  } else if (props.tagName === 'textarea') {
    const {
      tagName,
      value,
      onChange,
      className,
      rows,
      placeholder,
      type,
    } = props;
    return React.createElement(tagName, {
      value,
      onChange,
      className,
      rows,
      placeholder,
      type,
    });
  }
}

export default EditTag;
