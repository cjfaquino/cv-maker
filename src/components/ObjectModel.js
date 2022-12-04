import Education from './Education';
import Experience from './Experience';

class ObjectModel {
  constructor() {
    this.personal = {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      phone: '',
      summary: '',
    };
    this.experience = { name: 'experience', array: [new Experience()] };
    this.education = { name: 'education', array: [new Education()] };
  }
}

export default ObjectModel;
