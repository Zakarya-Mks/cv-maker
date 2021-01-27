import React, { Component } from 'react';
import DisplayTag from './DisplayTag';
import SingleLineListItem from './SingleLineListItem';
import addImg from '../img/add.svg';

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInputValue: '',
      professionalInputValue: '',
      skills: {
        personal: {
          value: ['Communication skills', 'Team player'],
        },
        professional: {
          value: [
            'Windows / Linux',
            'HTML/CSS/SASS/Bootstrap',
            'javascripte / React js',
            'GIT / Github',
          ],
        },
      },
    };
  }

  ContentChanged = (event, target) => {
    this.setState({
      [`${target}InputValue`]: event.target.value,
    });
  };

  removeSkill = (id, target) => {
    const parsedId = parseInt(id.split('-')[1]);
    const skillsArray = this.state.skills[target];
    let removed;
    for (let [index] of skillsArray.value.entries()) {
      if (index === parsedId) {
        removed = skillsArray.value.splice(index, 1);
        break;
      }
    }

    if (removed) {
      this.setState({ [target]: skillsArray });
    }
  };

  displaySkills = (target) => {
    return this.state.skills[target].value.map((skill, index) => (
      <SingleLineListItem
        key={`${index}-${Date.now()}`}
        id={`skill-${index}`}
        target={target}
        value={skill}
        className="d-flex align-items-center mb-3"
        onRemoveBtnClick={this.removeSkill}
      />
    ));
  };

  addSkill = (target) => {
    const parsedTarget = this.state[`${target}InputValue`];

    if (parsedTarget.trim() !== '') {
      const skills = this.state.skills[target];
      skills.value.push(parsedTarget);
      this.setState({
        [`${target}InputValue`]: '',
        [target]: skills,
      });
    }
  };

  render() {
    return (
      <div className="editable-skills mb-4">
        <div className="w-100 border-bottom position-relative mb-4">
          <DisplayTag
            tagName="h3"
            classNames={'primary-text-color mb-0'}
            displayValue="Skills"
          />
        </div>
        <div className="d-flex flex-column position-relative personalSkills-section mb-4">
          <DisplayTag
            tagName="h5"
            classNames={
              'secondary-text-color font-weight-light font-italic mb-3'
            }
            displayValue="- Personal"
          />
          <ul className="pl-3 mb-0">{this.displaySkills('personal')}</ul>
          <div className="collapseToggle custom-height d-flex mr-4 ">
            <input
              className="form-control form-control-sm"
              placeholder="New Personal Skill"
              onChange={(event) => {
                this.ContentChanged(event, 'personal');
              }}
              value={this.state.personalInputValue}
            />
            <button
              onClick={() => {
                this.addSkill('personal');
              }}
              className="btn btn-sm btn-outline-info d-flex align-items-center ml-1"
              id="addNewSkillBtn"
            >
              <img src={addImg} alt="add" />
            </button>
          </div>
        </div>
        <div className="d-flex flex-column position-relative professionalSkills-section">
          <DisplayTag
            tagName="h5"
            classNames={
              'secondary-text-color font-weight-light font-italic mb-3'
            }
            displayValue="- Professional"
          />
          <ul className="pl-3 mb-0">{this.displaySkills('professional')}</ul>
          <div className="collapseToggle custom-height d-flex mr-4 ">
            <input
              className="form-control form-control-sm"
              placeholder="New Professional Skill"
              onChange={(event) => {
                this.ContentChanged(event, 'professional');
              }}
              value={this.state.professionalInputValue}
            />
            <button
              onClick={() => {
                this.addSkill('professional');
              }}
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

export default Skills;
