import React, { Component } from 'react';

class ExperienceFrom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: '',
      endDate: '',
      title: '',
      description: '',
    };
  }

  addExperience = (event) => {
    event.preventDefault();
    const stateData = { ...this.state };
    if (stateData.startDate && stateData.title && stateData.description) {
      stateData.endDate =
        stateData.endDate === '' ? '- Present -' : stateData.endDate;

      this.props.onSubmit(stateData);

      for (let item in this.state) {
        this.setState({ [item]: '' });
      }
    }
  };

  contentChanged = (target, event) => {
    this.setState({
      [target]: event.target.value,
    });
  };

  render() {
    return (
      <div className="collapseToggle custom-height">
        <form
          onSubmit={this.addExperience}
          className="border  border-info p-2 rounded "
        >
          <div className="row">
            <div className="col-6 mb-2">
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">Start</div>
                </div>
                <input
                  value={this.state.startDate}
                  onChange={(event) => {
                    this.contentChanged('startDate', event);
                  }}
                  type="month"
                  className="form-control"
                />
              </div>
            </div>
            <div
              className={`col-6 mb-2 ${
                this.props.doNotIncludeEndDate && 'd-none'
              }`}
            >
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">End</div>
                </div>
                <input
                  value={this.state.endDate}
                  onChange={(event) => {
                    this.contentChanged('endDate', event);
                  }}
                  type="month"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col">
              <input
                value={this.state.title}
                onChange={(event) => {
                  this.contentChanged('title', event);
                }}
                type="text"
                className="form-control"
                placeholder={this.props.titlePlaceholder}
              />
            </div>
            <div className="col-5">
              <input
                value={this.state.description}
                onChange={(event) => {
                  this.contentChanged('description', event);
                }}
                type="text"
                className="form-control"
                placeholder={this.props.descriptionPlaceholder}
              />
            </div>
            <div className="col d-flex">
              <button
                type="submit"
                className="btn btn-outline-info px-4  ml-auto"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ExperienceFrom;
