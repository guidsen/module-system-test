const objectService = require('./object-service');

module.exports.get = (text) => {
  console.log('In user service');
  const objectResult = objectService.update(text);

  return text;
};
