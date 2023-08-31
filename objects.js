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

class Admin extends User {
  deleteUser(user) {
    users = users.filter(u => u.email !== user.email);
  }
}

const userOne = new User('Dylan', 'dylan.gangat@gmail.com', true);
const userTwo = new User('Kyle', 'kyle.gangat@gmail.com', false);
const admin = new Admin('Bob', 'bob.gangat@gmail.com', false);

let users = [userOne, userTwo, admin];

console.log(users);

admin.deleteUser(userOne);

console.log(users);
