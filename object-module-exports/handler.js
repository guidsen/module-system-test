const objectService = require('./object-service');
const userService = require('./user-service');

const handle = (text) => {
  return objectService.get(text);
};

module.exports = { handle };
