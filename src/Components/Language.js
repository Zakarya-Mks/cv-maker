import React, { Component } from 'react';
import DisplayTag from './DisplayTag';
import SingleLineListItem from './SingleLineListItem';
import addImg from '../img/add.svg';
import Rating from './Rating';

class Language extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      languages: { value: ['French', 'English', 'Arabic', 'Japanese'] },
    };
  }

  ContentChanged = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  removeLanguage = (id, target) => {
    const parsedId = parseInt(id.split('-')[1]);
    const languagesArr = this.state.languages;
    let removed;
    for (let [index] of languagesArr.value.entries()) {
      if (index === parsedId) {
        removed = languagesArr.value.splice(index, 1);
        break;
      }
    }

    if (removed) {
      this.setState({ [target]: languagesArr });
    }
  };

  displayLanguages = () => {
    return this.state.languages.value.map((skill, index) => (
      <SingleLineListItem
        key={`${index}-${Date.now()}`}
        id={`language-${index}`}
        target="language"
        value={skill}
        className="d-flex align-items-center position-relative mb-4"
        onRemoveBtnClick={this.removeLanguage}
        includeRating={true}
      />
    ));
  };

  addLanguage = () => {
    const parsedTarget = this.state.inputValue;

    if (parsedTarget.trim() !== '') {
      const language = this.state.languages;
      language.value.push(parsedTarget);
      this.setState({
        inputValue: '',
        languages: language,
      });
    }
  };

  render() {
    return (
      <div className="editable-Language">
        <div className="w-100 border-bottom position-relative mb-4">
          <DisplayTag
            tagName="h3"
            classNames={'primary-text-color mb-0'}
            displayValue="Languages"
          />
        </div>
        <div className="d-flex flex-column position-relative languages-section">
          <ul className="pl-0 mb-0">{this.displayLanguages()}</ul>
          <div className="collapseToggle custom-height d-flex mr-4 ">
            <input
              className="form-control form-control-sm"
              placeholder="New Language"
              onChange={this.ContentChanged}
              value={this.state.inputValue}
            />
            <button
              onClick={this.addLanguage}
              className="btn btn-sm btn-outline-info d-flex align-items-center ml-1"
              id="addNewSkillBtn"
            >
              <img src={addImg} alt="add" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Language;
