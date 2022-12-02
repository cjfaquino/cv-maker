import React, { Component } from 'react';

export default class Overview extends Component {
  render() {
    const { object } = this.props;
    const { personal, experience, education } = object;
    return (
      <div id='overview'>
        <div className='overview-personal'>
          <div className='overview-name'>
            {personal.firstName} {personal.lastName}
          </div>
          <div className='overview-card'>
            <div className='overview-address'>{personal.address}</div>
            <div className='overview-contact'>
              <div className='overview-phone'>{personal.phone}</div>
              <div className='overview-email'>{personal.email}</div>
            </div>
          </div>
        </div>

        {personal.description !== '' ? (
          <div>
            <hr className='overview-lines' />
            <h3 className='overview-desc-label'>Description</h3>
            <div className='overview-description'>{personal.description}</div>
          </div>
        ) : null}

        {!(experience.array.length === 0) ? (
          <div>
            <hr className='overview-lines' />
            <h3 className='overview-exp'>Experience</h3>
            {experience.array.map((item) => (
              <div key={item.uuid} className='experience-item'>
                {item.from !== '' || item.until !== '' ? (
                  <div className='experience-dates'>
                    {item.from} - {item.until}
                  </div>
                ) : null}
                <div className='experience-position'>{item.position}</div>
                {item.name !== '' || item.city !== '' || item.state !== '' ? (
                  <div className='experience-location'>
                    {item.name} - {item.city}, {item.state}
                  </div>
                ) : null}
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
                {item.name !== '' || item.city !== '' ? (
                  <div className='education-name'>
                    {item.name}
                    {', '}
                    <span className='education-location'>
                      {item.city}, {item.state}
                    </span>
                  </div>
                ) : null}
                {item.degree !== '' || item.subject !== '' ? (
                  <div className='education-degree'>
                    {item.degree} - {item.subject}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}
