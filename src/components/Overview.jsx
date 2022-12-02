import React, { Component } from 'react';

export default class Overview extends Component {
  render() {
    const { object } = this.props;
    const { personal, experience, education } = object;
    return (
      <div id='overview'>
        <div className='overview-personal'>
          <div className='overview-name'>{personal.name}</div>
          <div className='overview-contact'>
            <div className='overview-address'>{personal.address}</div>
            <div className='overview-phone'>{personal.phone}</div>
          </div>
        </div>

        {!(experience.array.length === 0) ? (
          <div>
            <hr className='overview-lines' />
            <h3 className='overview-exp'>Experience</h3>
            {experience.array.map((item) => (
              <div key={item.uuid} className='experience-item'>
                <div className='experience-dates'>
                  {item.from} - {item.until}
                </div>
                <div className='experience-position'>{item.position}</div>
                <div className='experience-location'>
                  {item.name} - {item.city}, {item.state}
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {!(education.array.length === 0) ? (
          <div>
            <hr className='overview-lines' />
            <h3 className='overview-edu'>Education</h3>
            {education.array.map((item) => (
              <div key={item.uuid} className='education-item'>
                <div className='education-name'>
                  {item.name}
                  {', '}
                  <span className='education-location'>
                    {item.city}, {item.state}
                  </span>
                </div>
                <div className='education-degree'>
                  {item.degree} - {item.subject}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}
