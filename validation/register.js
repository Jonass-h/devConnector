const validator = require("validator");
const isEmpty = require("../validation/is_empty");

module.exports = function (data) {
  let errors = {};
  if (!validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = " name must be between 2 and 30 characters ";
  }
  if (isEmpty(data.name)) {
    errors.name = " name is empty ";
  }
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
  if (isEmpty(data.password2)) {
    errors.password2 = " confirm password is required ";
  }
  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "password doesn't match";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
