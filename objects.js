// var userOne = {
//   email: 'ryu@ninjas.com',
//   name: 'Ryu',
//   login() {
//     console.log(this.email, 'has logged in');
//   },
//   logout() {
//     console.log(this.email, 'has logged out');
//   },
// };

// var userTwo = {
//   email: 'mario@ninjas.com',
//   name: 'Mario',
//   login() {
//     console.log(this.email, 'has logged in');
//   },
//   logout() {
//     console.log(this.email, 'has logged out');
//   },
// };

// var userThree = {
//   email: 'luigi@ninjas.com',
//   name: 'Luigi',
//   login() {
//     console.log(this.email, 'has logged in');
//   },
//   logout() {
//     console.log(this.email, 'has logged out');
//   },
// };

class User {
  constructor(name, email, status) {
    this.name = name;
    this.email = email;
    this.status = status;
    this.score = 0;
  }

  login() {
    console.log(this.email, 'has logged in');
    return this;
  }

  logout() {
    console.log(this.email, 'has logged out');
    return this;
  }

  updateScore() {
    this.score += 1;
    console.log(`${this.email} score is now: ${this.score}`);
    return this;
  }
  get firstName() {
    return this.name;
  }

  set firstName(firstName) {
    this.name = firstName;
  }
}

// New instances of class User Object
// Encapsulating everything in the User Object

// the 'new' keyword
// - creates a new empty object
// sets the value of this to the empty object
// invokes the constructor method

const userOne = new User('Dylan', 'dylan.gangat@gmail.com', true);
const userTwo = new User('Kyle', 'kyle.gangat@gmail.com', false);
const userThree = new User('Bob', 'bob.gangat@gmail.com', false);

userOne.logout();

userOne.firstName = 'Mario';
console.log(userOne.firstName);
console.log(userOne);

// returns object to allow method chaining (return this)
userOne.login().updateScore().updateScore().logout();
