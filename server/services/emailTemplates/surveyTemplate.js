const keys = require("../../config/keys");

module.exports = (survey) => {
  const { body } = survey;
  return `
  <div style="text-align: center;">
    <h3>We would like to hear from you</h3>
    <p>Click on one of the following ansers:</p>
    <p>${body}</p>
    <div>
      <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
    </div>
    <div>
      <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
    </div>
  </div>
`;
};
