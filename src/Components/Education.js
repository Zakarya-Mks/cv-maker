import React, { Component } from 'react';
import DisplayTag from './DisplayTag';
import MultipleInputFrom from './MultipleInputFrom';
import MultipleLineListItem from './MultipleLineListItem';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      education: [
        {
          startDate: '01 - 2012',
          endDate: '12 - 2014',
          title: 'Degree title',
          description: 'school Name, school Address, City',
        },
        {
          startDate: '01 - 2011',
          endDate: '12 - 2012',
          title: 'Degree title',
          description: 'school Name, school Address, City',
        },
        {
          startDate: '01 - 2010',
          endDate: '12 - 2011',
          title: 'Degree title',
          description: 'school Name, school Address, City',
        },
      ],
    };
  }

  formatDate = (date) => {
    const parsedDate = new Date(date);

    const month = ('0' + (parsedDate.getMonth() + 1)).slice(-2);
    const year = parsedDate.getUTCFullYear();

    return `${month} - ${year}`;
  };

  removeEducation = (id) => {
    const parsedId = parseInt(id.split('-')[1]);
    const educationArray = this.state.education;
    let removed;
    for (let [index] of educationArray.entries()) {
      if (index === parsedId) {
        removed = educationArray.splice(index, 1);
        break;
      }
    }

    if (removed) {
      this.setState({ education: educationArray });
    }
  };

  addEducation = (educationFormData) => {
    const currEducation = this.state.education;
    educationFormData.startDate = this.formatDate(educationFormData.startDate);

    if (
      educationFormData.endDate &&
      educationFormData.endDate !== '- Present -'
    ) {
      educationFormData.endDate = this.formatDate(educationFormData.endDate);
    }
    currEducation.push(educationFormData);
    this.setState({ education: currEducation });
  };

  displayEducation = () => {
    const educations = this.state.education;

    return educations.map((education, index) => {
      return (
        <MultipleLineListItem
          key={`exper-${index}-${Date.now()}`}
          id={`exper-${index}}`}
          data={education}
          onRemove={this.removeEducation}
        />
      );
    });
  };

  render() {
    return (
      <div className="editable-Education mb-4">
        <div className="w-100 border-bottom position-relative mb-4">
          <div className="arrowContainer">
            <div id="base" />
          </div>
          <DisplayTag
            tagName="h3"
            classNames={'primary-text-color mb-0'}
            displayValue="Education"
          />
        </div>
        <ul className="list-unstyled pl-0 mb-4">{this.displayEducation()}</ul>

        <MultipleInputFrom
          onSubmit={this.addEducation}
          titlePlaceholder="Education name"
          descriptionPlaceholder="Institute Infos"
        />
      </div>
    );
  }
}

export default Education;
