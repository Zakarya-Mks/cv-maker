import React, { Component } from 'react';
import DisplayTag from './DisplayTag';
import MultipleInputFrom from './MultipleInputFrom';
import MultipleLineListItem from './MultipleLineListItem';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experience: [
        {
          startDate: '05 - 2018',
          endDate: '08 - 2019',
          title: '.net Developer',
          description: 'Company Name, Company Address, City ',
        },
        {
          startDate: '03 - 2016',
          endDate: '08 - 2017',
          title: 'Freelance Frontend Developer',
          description: 'Company Name, Company Address, City',
        },
        {
          startDate: '03 - 2015',
          endDate: '12 - 2015',
          title: 'Graphic Designer',
          description: 'Company Name, Company Address, City',
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

  removeExperience = (id) => {
    const parsedId = parseInt(id.split('-')[1]);
    const experienceArray = this.state.experience;
    let removed;
    for (let [index] of experienceArray.entries()) {
      if (index === parsedId) {
        removed = experienceArray.splice(index, 1);
        break;
      }
    }

    if (removed) {
      this.setState({ experience: experienceArray });
    }
  };

  addExperience = (experienceFormData) => {
    const currExperience = this.state.experience;
    experienceFormData.startDate = this.formatDate(
      experienceFormData.startDate
    );

    if (
      experienceFormData.endDate &&
      experienceFormData.endDate !== '- Present -'
    ) {
      experienceFormData.endDate = this.formatDate(experienceFormData.endDate);
    }
    currExperience.push(experienceFormData);
    this.setState({ experience: currExperience });
  };

  displayExperience = () => {
    const experiences = this.state.experience;

    return experiences.map((experience, index) => {
      return (
        <MultipleLineListItem
          key={`exper-${index}-${Date.now()}`}
          id={`exper-${index}}`}
          data={experience}
          onRemove={this.removeExperience}
        />
      );
    });
  };

  render() {
    return (
      <div className="editable-Experience mb-4">
        <div className="w-100 border-bottom position-relative mb-4">
          <div className="arrowContainer">
            <div id="base" />
          </div>
          <DisplayTag
            tagName="h3"
            classNames={'primary-text-color mb-0'}
            displayValue="Experience"
          />
        </div>
        <ul className="list-unstyled pl-0 mb-4">{this.displayExperience()}</ul>

        <MultipleInputFrom
          onSubmit={this.addExperience}
          titlePlaceholder="Job Title"
          descriptionPlaceholder="Company Infos"
        />
      </div>
    );
  }
}

export default Experience;
