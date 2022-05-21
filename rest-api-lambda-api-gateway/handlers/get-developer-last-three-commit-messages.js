const { addSomeRandomDelayJustForFun } = require('../util/add-some-random-delay-just-for-fun');
const developers = require('../fixture/developers.json');
const { HttpError } = require('../http/http-error');

async function getDeveloperLastThreeCommitMessages(developerId) {
  await addSomeRandomDelayJustForFun();

  const foundDeveloper = developers.find((developer) => developer.id === developerId);

  if (!foundDeveloper) {
    throw HttpError.notFound('Developer not found');
  }

  return foundDeveloper.commitMessages.slice(-3);
}

module.exports = { getDeveloperLastThreeCommitMessages };
