import { v4 as uuidv4 } from 'uuid';

export default class Experience {
  constructor() {
    this.uuid = uuidv4();
    this.name = '';
    this.city = '';
    this.state = '';
    this.position = '';
    this.from = '';
    this.until = '';
    this.summary = '';
  }
}
