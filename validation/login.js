const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatorLoginInput(data) {
  let errors = {};

  // Setup for validation
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  // email validation
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  // password validator
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
