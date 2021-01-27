import React from 'react';
import DisplayTag from './DisplayTag';
import EditTag from './EditTag';
import edit from '../img/edit.svg';
import save from '../img/check-box.svg';

function DisplayEdit(props) {
  const { value, editMode } = props.data;
  const rowsCount = props.rows ? props.rows : '';

  if (editMode) {
    return (
      <div className="w-100">
        <EditTag
          tagName={props.editTagName}
          value={value}
          type={props.type}
          placeholder={props.placeholder}
          className={props.className}
          rows={rowsCount}
          onChange={(event) => {
            props.onContentChange(
              event,
              props.targetedState,
              props.targetedSection
            );
          }}
        />
        <button
          onClick={() => {
            props.onToggleEditMode(props.targetedState, props.targetedSection);
          }}
          className="bg-transparent border-0 p-0 m-0"
          id={props.saveBtnID}
        >
          <img src={save} alt="edit" />
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <DisplayTag
          displayValue={value}
          tagName={props.displayTag.tagName}
          classNames={props.displayTag.classNames}
        />
        <button
          onClick={() => {
            props.onToggleEditMode(props.targetedState, props.targetedSection);
          }}
          className="bg-transparent border-0 p-0 m-0"
          id={props.editBtnID}
        >
          <img src={edit} alt="edit" />
        </button>
      </div>
    );
  }
}

export default DisplayEdit;
