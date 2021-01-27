import React, { Component } from 'react';
import Certifications from './Certifications';
import Education from './Education';
import Experience from './Experience';
import Interests from './Interests';
import Language from './Language';
import PersonalInfo from './PersonalInfo';
import Skills from './Skills';

class Body extends Component {
  render() {
    return (
      <div className="container pb-5 ">
        <div className="row">
          <div className="col-12 col-lg-5">
            <PersonalInfo />
            <Skills />
            <Language />
          </div>
          <div className="col-12 col-lg-7 border-left pl-5 mt-4 mt-lg-0">
            <Experience />
            <Education />
            <Certifications />
            <Interests />
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
