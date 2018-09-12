const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatorExperienceInput(data) {
  let errors = {};

  // Setup for validation
  data.title = !isEmpty(data.title) ? data.title : '';
  data.company = !isEmpty(data.company) ? data.company : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  // job title validator
  if (Validator.isEmpty(data.title)) {
    errors.title = 'Job title field is required';
  }

  // company validator
  if (Validator.isEmpty(data.company)) {
    errors.company = 'Company field is required';
  }

  // from validator
  if (Validator.isEmpty(data.from)) {
    errors.from = 'From date field is required';
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
