const validator = require("validator");
const isEmpty = require("../validation/is_empty");

module.exports = function (data) {
  let errors = {};

  if (isEmpty(data.email)) {
    errors.email = " email is empty ";
  }
  if (!validator.isEmail(data.email)) {
    errors.email = " email is invalid ";
  }
  if (isEmpty(data.password)) {
    errors.password = " password is empty ";
  }
  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = " password must be at least 6 characters ";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
