import React, { Component } from 'react';
import DisplayTag from './DisplayTag';
import SingleLineListItem from './SingleLineListItem';
import addImg from '../img/add.svg';

class Interests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      interests: { value: ['Reading, traveling, music'] },
    };
  }

  ContentChanged = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  removeInterests = (id, target) => {
    const parsedId = parseInt(id.split('-')[1]);
    const interestsArr = this.state.interests;
    let removed;
    for (let [index] of interestsArr.value.entries()) {
      if (index === parsedId) {
        removed = interestsArr.value.splice(index, 1);
        break;
      }
    }

    if (removed) {
      this.setState({ [target]: interestsArr });
    }
  };

  displayInterests = () => {
    return this.state.interests.value.map((skill, index) => (
      <SingleLineListItem
        key={`${index}-${Date.now()}`}
        id={`language-${index}`}
        target="language"
        value={skill}
        className="d-flex align-items-center mb-4"
        onRemoveBtnClick={this.removeInterests}
      />
    ));
  };

  addInterests = () => {
    const parsedTarget = this.state.inputValue;

    if (parsedTarget.trim() !== '' && this.state.interests.value.length === 0) {
      const language = this.state.interests;
      language.value.push(parsedTarget);
      this.setState({
        inputValue: '',
        interests: language,
      });
    }
  };

  render() {
    return (
      <div className="editable-Interests">
        <div className="w-100 border-bottom position-relative mb-4">
          <div className="arrowContainer">
            <div id="base" />
          </div>
          <DisplayTag
            tagName="h3"
            classNames={'primary-text-color mb-0'}
            displayValue="Interestss"
          />
        </div>
        <div className="d-flex flex-column position-relative interests-section">
          <ul className="pl-0 mb-0">{this.displayInterests()}</ul>
          <div className="collapseToggle custom-height d-flex mr-4 ">
            <input
              className="form-control form-control-sm"
              placeholder="Interests Separated By ( , )"
              onChange={this.ContentChanged}
              value={this.state.inputValue}
            />
            <button
              onClick={this.addInterests}
              className="btn btn-sm btn-outline-info d-flex align-items-center ml-1"
              id="addNewSkillBtn"
            >
              <img src={addImg} alt="add" />
            </button>
          </div>
          <div className="collapseToggle custom-height">
            <small className="pl-4 text-muted">
              * Only one list of interests separated by ( , ) is allowed
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default Interests;
