// Constructor function
// These methods arent in __proto__ like they are in classes. They are directly in the constructor
// Attach method to User prototype and not object (Object, Array, Date - has prototype)
// Defining the method once with proto so you dont need to create a method for each object being created
function User(name, email) {
  this.name = name;
  this.email = email;
  this.online = false;
  // bad practice
//   this.login = function () {
//     console.log(`${this.name}'s logged in`);
//   };
}

User.prototype.login = function () {
  this.online = true;
  console.log(`${this.name}'s logged in`);
};

User.prototype.logout = function () {
  this.online = false;
  console.log(`${this.name}'s logged out`);
};

const userOne = new User('Dylan', 'dylan.gangat@gmail.com', true);
const userTwo = new User('Kyle', 'kyle.gangat@gmail.com', false);

console.log(userOne);
userOne.login();
