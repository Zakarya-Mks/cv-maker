import React from 'react';
import logo from '../img/3135692.svg';

function Header() {
  let editMode = false;

  const showHideControls = () => {
    [...document.querySelectorAll('.collapseToggle')].forEach((item) => {
      item.classList.toggle('shrink');
    });

    [...document.querySelectorAll('button.bg-transparent')].forEach((item) =>
      item.classList.toggle('d-none')
    );
  };

  return (
    <div className="container">
      <div className="row bottom-triangle">
        <div className="col-12 col-lg-6 d-flex align-items-center bg-info  h-100px position-relative">
          <img width="50" src={logo} alt="CV" />
          <h1 className="text-white mb-0">CV-Maker</h1>

          <span className="editMode_toggle_label text-white">Edit Mode:</span>
          <label className="toggle-control">
            <input
              onClick={(event) => {
                event.target.checked = editMode;
                editMode = !editMode;
              }}
              type="checkbox"
              id="read_toggle"
              defaultChecked={true}
              onChange={() => {
                showHideControls();
              }}
            />
            <span className="control"></span>
          </label>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
}

export default Header;
