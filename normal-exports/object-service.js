const userService = require('./user-service');

const get = (text) => {
  console.log('Get object');
  const user = userService.get(text);

  return text;
};

const foo = (text) => console.log('Hodor');

const update = (text) => {
  foo(text);
  console.log('Updating object', text);
};

exports.get = get;
exports.update = update;
exports.foo = foo;
