import React, { Component } from 'react';

export default class Overview extends Component {
  render() {
    const { object, sticky } = this.props;
    const { personal, experience, education } = object;

    const temp = {
      personal: {
        firstName: 'Johnathan',
        lastName: 'Doeman',
        email: 'johnathan@doeman.net',
        address: '12345 Longlonglong St, San Longcity, CA',
        phone: '(123)-456-7890',
      },
      experience: {
        name: 'Company name',
        city: 'City',
        state: 'State',
        position: 'Postion',
        from: 'From',
        until: 'Until',
      },
      education: {
        name: 'College name',
        city: 'City',
        state: 'State',
        degree: 'Degree',
        subject: 'Subject',
      },
    };

    return (
      <div id='overview' className={sticky ? 'sticky' : null}>
        <div className='overview-personal'>
          <div className='overview-name'>
            {personal.firstName ? personal.firstName : temp.personal.firstName}{' '}
            {personal.lastName ? personal.lastName : temp.personal.lastName}
          </div>
          <div className='overview-card'>
            <div className='overview-address'>
              {personal.address ? personal.address : temp.personal.address}
            </div>
            <div className='overview-contact'>
              <div className='overview-phone'>
                {personal.phone ? personal.phone : temp.personal.phone}
              </div>
              <div className='overview-email'>
                {personal.email ? personal.email : temp.personal.email}
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
                  {item.from ? item.from : temp.experience.from} -{' '}
                  {item.until ? item.until : temp.experience.until}
                </div>

                <div className='experience-position'>
                  {item.position ? item.position : temp.experience.position}
                </div>
                <div className='experience-location'>
                  {item.name ? item.name : temp.experience.name} -{' '}
                  <span className='experience-city'>
                    {item.city ? item.city : temp.experience.city},{' '}
                    {item.state ? item.state : temp.experience.state}
                  </span>
                </div>
                <div className='experience-summary'>{item.summary}</div>
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
                  {item.name ? item.name : temp.education.name}

                  <span className='education-location'>
                    {' - '}
                    {item.city ? item.city : temp.education.city},{' '}
                    {item.state ? item.state : temp.education.state}
                  </span>
                </div>

                <div className='education-degree'>
                  {item.degree ? item.degree : temp.education.degree} -{' '}
                  {item.subject ? item.subject : temp.education.subject}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}
