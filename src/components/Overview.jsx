import React, { Component } from 'react';

export default class Overview extends Component {
  render() {
    const { object } = this.props;
    const { personal, experience, education } = object;
    return (
      <div id='overview'>
        <div className='overview-personal'>
          <div className='overview-name'>
            {personal.firstName ? personal.firstName : 'Johnathan'}{' '}
            {personal.lastName ? personal.lastName : 'Doeman'}
          </div>
          <div className='overview-card'>
            <div className='overview-address'>
              {personal.address
                ? personal.address
                : '12345 Longlonglong St, San Longcity, CA'}
            </div>
            <div className='overview-contact'>
              <div className='overview-phone'>
                {personal.phone ? personal.phone : '(123)-456-7890'}
              </div>
              <div className='overview-email'>
                {personal.email ? personal.email : 'johnathan@doeman.net'}
              </div>
            </div>
          </div>
        </div>

        {personal.summary !== '' ? (
          <div>
            <hr className='overview-lines' />
            <h3 className='overview-desc-label'>Summary</h3>
            <div className='overview-summary'>{personal.summary}</div>
          </div>
        ) : null}

        {!(experience.array.length === 0) ? (
          <div>
            <hr className='overview-lines' />
            <h3 className='overview-exp'>Experience</h3>
            {experience.array.map((item) => (
              <div key={item.uuid} className='experience-item'>
                <div className='experience-dates'>
                  {item.from ? item.from : 'From'} -{' '}
                  {item.until ? item.until : 'Until'}
                </div>

                <div className='experience-position'>
                  {item.position ? item.position : 'Position'}
                </div>
                <div className='experience-location'>
                  {item.name ? item.name : 'Company name'} -{' '}
                  <span className='experience-city'>
                    {item.city ? item.city : 'City'},{' '}
                    {item.state ? item.state : 'State'}
                  </span>
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
                  {item.name ? item.name : 'College name'}
                  {', '}
                  <span className='education-location'>
                    {item.city ? item.city : 'City'},{' '}
                    {item.state ? item.state : 'State'}
                  </span>
                </div>

                <div className='education-degree'>
                  {item.degree ? item.degree : 'Degree'} -{' '}
                  {item.subject ? item.subject : 'Subject'}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}
