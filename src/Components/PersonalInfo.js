import React, { Component } from 'react';
import DisplayEdit from './DisplayEditToggler';
import DisplayTag from './DisplayTag';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfoHeader: {
        name: { value: 'Full Name', editMode: false },
        job: { value: 'Front End Web Developer', editMode: false },
      },
      personalInfos: {
        dateOfBirth: { value: '2019-11-30', editMode: false },
        phone: { value: '(+123) 618-726-2514', editMode: false },
        email: { value: 'MyEmail@gmail.com', editMode: false },
        linkedIn: { value: 'linkedin.com/in/test_123', editMode: false },
      },
    };
  }

  toggleEditMode = (target, targetedSection) => {
    const state = { ...this.state[target] };
    state[targetedSection].editMode = !state[targetedSection].editMode;
    this.setState(state);
  };

  ContentChanged = (event, target, targetedSection) => {
    const state = { ...this.state[target] };
    state[targetedSection].value = event.target.value;
    this.setState({
      target: state,
    });
  };

  render() {
    const name = this.state.personalInfoHeader.name;
    const job = this.state.personalInfoHeader.job;
    const dateOfBirth = this.state.personalInfos.dateOfBirth;
    const phone = this.state.personalInfos.phone;
    const email = this.state.personalInfos.email;
    const linkedIn = this.state.personalInfos.linkedIn;

    return (
      <div className="mb-4">
        <div className="editable-personalInfosHeader mb-5">
          <div className="position-relative d-flex justify-content-center align-items-center w-100 name-section pr-4">
            <DisplayEdit
              onToggleEditMode={this.toggleEditMode}
              onContentChange={this.ContentChanged}
              data={name}
              type="text"
              displayTag={{ tagName: 'h1', classNames: 'text-info mb-0' }}
              editTagName="input"
              className="form-control"
              placeholder="Enter Name"
              saveBtnID="PIH-name-saveBtn"
              editBtnID="PIH-name-editBtn"
              targetedState="personalInfoHeader"
              targetedSection="name"
            />
          </div>
          <div className="position-relative d-flex justify-content-center align-items-center w-100 job-section pr-4">
            <DisplayEdit
              onToggleEditMode={this.toggleEditMode}
              onContentChange={this.ContentChanged}
              data={job}
              type="text"
              displayTag={{
                tagName: 'h2',
                classNames: ['secondary-text-color light-text mb-0'],
              }}
              editTagName="input"
              className="form-control"
              placeholder="Enter Job"
              saveBtnID="PIH-job-saveBtn"
              editBtnID="PIH-job-editBtn"
              targetedState="personalInfoHeader"
              targetedSection="job"
            />
          </div>
        </div>

        <div className="editable-personalInfos">
          <div className="w-100 border-bottom position-relative mb-4">
            <DisplayTag
              tagName="h3"
              classNames={'primary-text-color mb-0'}
              displayValue="Personal info"
            />
          </div>
          <div className="d-flex flex-column position-relative birthDay-section mb-2">
            <DisplayTag
              tagName="h4"
              classNames={'primary-text-color font-weight-normal mb-0'}
              displayValue="Date of birth"
            />
            <DisplayEdit
              onToggleEditMode={this.toggleEditMode}
              onContentChange={this.ContentChanged}
              data={dateOfBirth}
              type="date"
              displayTag={{ tagName: 'h5', classNames: 'font-weight-light' }}
              editTagName="input"
              className="form-control"
              placeholder="Enter Date Of Birth"
              saveBtnID="PI-birthDate-saveBtn"
              editBtnID="PI-birthDate-editBtn"
              targetedState="personalInfos"
              targetedSection="dateOfBirth"
            />
          </div>
          <div className="d-flex flex-column position-relative phone-section mb-2">
            <DisplayTag
              tagName="h4"
              classNames={'primary-text-color font-weight-normal mb-0'}
              displayValue="Phone"
            />
            <DisplayEdit
              onToggleEditMode={this.toggleEditMode}
              onContentChange={this.ContentChanged}
              data={phone}
              type="tel"
              displayTag={{ tagName: 'h5', classNames: 'font-weight-light' }}
              editTagName="input"
              className="form-control"
              placeholder="Enter Phone Number"
              saveBtnID="PI-phone-saveBtn"
              editBtnID="PI-phone-editBtn"
              targetedState="personalInfos"
              targetedSection="phone"
            />
          </div>
          <div className="d-flex flex-column position-relative email-section mb-2">
            <DisplayTag
              tagName="h4"
              classNames={'primary-text-color font-weight-normal mb-0'}
              displayValue="Email"
            />
            <DisplayEdit
              onToggleEditMode={this.toggleEditMode}
              onContentChange={this.ContentChanged}
              data={email}
              type="email"
              displayTag={{ tagName: 'h5', classNames: 'font-weight-light' }}
              editTagName="input"
              className="form-control"
              placeholder="Enter Email Address"
              saveBtnID="PI-email-saveBtn"
              editBtnID="PI-email-editBtn"
              targetedState="personalInfos"
              targetedSection="email"
            />
          </div>
          <div className="d-flex flex-column position-relative linkedIn-section mb-2">
            <DisplayTag
              tagName="h4"
              classNames={'primary-text-color font-weight-normal mb-0'}
              displayValue="LinkedIn"
            />
            <DisplayEdit
              onToggleEditMode={this.toggleEditMode}
              onContentChange={this.ContentChanged}
              data={linkedIn}
              type="text"
              displayTag={{ tagName: 'h5', classNames: 'font-weight-light' }}
              editTagName="input"
              className="form-control"
              placeholder="Enter Your LinkedIn"
              saveBtnID="PI-linkedIn-saveBtn"
              editBtnID="PI-linkedIn-editBtn"
              targetedState="personalInfos"
              targetedSection="linkedIn"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
