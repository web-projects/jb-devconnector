const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatorEducationInput(data) {
  let errors = {};

  // Setup for validation
  data.school = !isEmpty(data.school) ? data.school : '';
  data.degree = !isEmpty(data.degree) ? data.degree : '';
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  // job school validator
  if (Validator.isEmpty(data.school)) {
    errors.school = 'School field is required';
  }

  // degree validator
  if (Validator.isEmpty(data.degree)) {
    errors.degree = 'Degree field is required';
  }

  // Field of Study validator
  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = 'Field of study field is required';
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
