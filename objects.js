// Constructor function
// These methods arent in __proto__ like they are in classes. They are directly in the constructor
// Attach method to User prototype and not object (Object, Array, Date - has prototype)
// Defining the method once with proto so you dont need to create a method for each object being created
function User(name, email) {
  this.name = name;
  this.email = email;
  this.online = false;
}

User.prototype.login = function () {
  this.online = true;
  console.log(`${this.name}'s logged in`);
};

User.prototype.logout = function () {
  this.online = false;
  console.log(`${this.name}'s logged out`);
};

// Inherits properties from User 
function Admin(...args) {
  User.apply(this, args);
  this.role = 'Super admin';
}

// Inherits prototype of User 
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (u) {
  users = users.filter(u => userOne.email !== u.email);
};

const userOne = new User('Dylan', 'dylan.gangat@gmail.com');
const userTwo = new User('Kyle', 'kyle.gangat@gmail.com');
const admin = new Admin('Bob', 'bob.gangat@gmail.com');

let users = [userOne, userTwo, admin];

console.log(users);

console.log(userOne);
console.log(admin);

admin.deleteUser(userOne);
console.log(users);
