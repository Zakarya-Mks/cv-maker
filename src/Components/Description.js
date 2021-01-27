import React, { Component } from 'react';
import DisplayEdit from './DisplayEditToggler';

class Description extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topDescription: {
        description: {
          value: `Aspiring IT Professional, i enjoy coming up with innovative
          solutions to challenging problems, always eager to learn and use
          new technologies`,
          editMode: false,
        },
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
    const description = this.state.topDescription.description;

    return (
      <div className="container mt-4 mt-lg-0">
        <div className="row ">
          <div className="col-12 col-lg-6 offset-lg-6 editable-description pr-4 ">
            <DisplayEdit
              onToggleEditMode={this.toggleEditMode}
              onContentChange={this.ContentChanged}
              data={description}
              type=""
              displayTag={{
                tagName: 'p',
                classNames: ['secondary-text-color'],
              }}
              editTagName="textarea"
              className="form-control customScrollBar"
              rows="4"
              placeholder="Enter Short Description"
              saveBtnID="description-saveBtn"
              editBtnID="description-editBtn"
              targetedState="topDescription"
              targetedSection="description"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Description;
