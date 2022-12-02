import { v4 as uuidv4 } from 'uuid';

export default class Education {
  constructor() {
    this.uuid = uuidv4();
    this.name = '';
    this.city = '';
    this.state = '';
    this.degree = '';
    this.subject = '';
  }
}
