const validator = require("validator");
const isEmpty = require("../validation/is_empty");

module.exports = function (data) {
  let errors = {};
  data.handle = isEmpty(data.handle) ? data.handle : "";
  data.skills = isEmpty(data.skills) ? data.skills : "";
  data.status = isEmpty(data.status) ? data.status : "";
  /*
  if (!validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "handle needs to be between 2 and 4 chars";
  }
  if (validator.isEmpty(data.handle)) {
    errors.handle = "profile handle required";
  }
  if (validator.isEmpty(data.status)) {
    errors.status = "profile status required";
  }
  if (validator.isEmpty(data.skills)) {
    errors.skills = "profile skills required";
  }
  
  if (!validator.isEmpty(data.website)) {
    if (!validator.isURL(data.website)) {
      errors.website = "URL not valid";
    }
  }
  if (!validator.isEmpty(data.youtube)) {
    if (!validator.isURL(data.youtube)) {
      errors.youtube = "youtube link not valid";
    }
  }
  if (!validator.isEmpty(data.facebook)) {
    if (!validator.isURL(data.facebook)) {
      errors.facebook = "facebook link not valid";
    }
  }
  if (!validator.isEmpty(data.linkedin)) {
    if (!validator.isURL(data.linkedin)) {
      errors.linkedin = "linkedin link not valid";
    }
  }
  if (!validator.isEmpty(data.twitter)) {
    if (!validator.isURL(data.twitter)) {
      errors.twitter = "twitter link not valid";
    }
  }
*/
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
