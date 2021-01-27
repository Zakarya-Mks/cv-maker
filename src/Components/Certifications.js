import React, { Component } from 'react';
import DisplayTag from './DisplayTag';
import MultipleInputFrom from './MultipleInputFrom';
import MultipleLineListItem from './MultipleLineListItem';

class Certifications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      certifications: [
        {
          startDate: '01 - 2018',
          title: 'Build Responsive Real World Websites with HTML5 and CSS3',
          description: 'Udemy',
        },
        {
          startDate: '03 - 2018',
          title: 'The Ultimate MySQL Bootcamp',
          description: 'Udemy',
        },
        {
          startDate: '08 - 2018',
          title: 'Learn Parallel Programming with C# and .NET',
          description: 'Udemy',
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

  removeCertifications = (id) => {
    const parsedId = parseInt(id.split('-')[1]);
    const certificationsArray = this.state.certifications;
    let removed;
    for (let [index] of certificationsArray.entries()) {
      if (index === parsedId) {
        removed = certificationsArray.splice(index, 1);
        break;
      }
    }

    if (removed) {
      this.setState({ certifications: certificationsArray });
    }
  };

  addCertifications = (certificationsFormData) => {
    const currCertifications = this.state.certifications;
    certificationsFormData.startDate = this.formatDate(
      certificationsFormData.startDate
    );

    delete certificationsFormData.endDate;
    currCertifications.push(certificationsFormData);
    this.setState({ certifications: currCertifications });
  };

  displayCertifications = () => {
    const certificationss = this.state.certifications;

    return certificationss.map((certifications, index) => {
      return (
        <MultipleLineListItem
          key={`exper-${index}-${Date.now()}`}
          id={`exper-${index}}`}
          data={certifications}
          onRemove={this.removeCertifications}
        />
      );
    });
  };

  render() {
    return (
      <div className="editable-Certifications mb-4">
        <div className="w-100 border-bottom position-relative mb-4">
          <div className="arrowContainer">
            <div id="base" />
          </div>
          <DisplayTag
            tagName="h3"
            classNames={'primary-text-color mb-0'}
            displayValue="Certifications"
          />
        </div>
        <ul className="list-unstyled pl-0 mb-4">
          {this.displayCertifications()}
        </ul>

        <MultipleInputFrom
          onSubmit={this.addCertifications}
          titlePlaceholder="Certifications name"
          descriptionPlaceholder="Institute Infos"
          doNotIncludeEndDate={true}
        />
      </div>
    );
  }
}

export default Certifications;
