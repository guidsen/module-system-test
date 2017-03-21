const objectService = require('./object-service');

const get = (text) => {
  console.log('In user service');
  const objectResult = objectService.update(text);

  return text;
};

module.exports = { get };
