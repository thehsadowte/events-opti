'use strict';

class User {
  constructor() {
    this.username = 'Oleksii';
  }

  showName() {
    return this.username;
  }
}

const user = new User();

const message = 'Hello';

console.log(message);
