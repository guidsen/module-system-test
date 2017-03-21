const userService = require('./user-service');

const get = (text) => {
  console.log('In object service');
  const user = userService.get(text);

  return text;
};

const update = (text) => {
  console.log('Updating object', text);
};

module.exports = { get, update };
