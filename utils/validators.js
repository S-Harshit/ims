userNameValidator = function userNameValidator(username) {
  const NO_SPECIAL_CHARACTER = /^[a-zA-Z0-9]{4,10}$/
  return NO_SPECIAL_CHARACTER.test(username);
}

emailValidator = function emailValidator(email) {
  const EMAIL_VALIDATOR = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return EMAIL_VALIDATOR.test(email);
}

module.exports = {
  userNameValidator,
  emailValidator
}