const { addSomeRandomDelayJustForFun } = require('../helpers/add-some-random-delay-just-for-fun');
const developers = require('../fixture/developers.json');
const { HttpError } = require('../http/http-error');
const { HttpResponse } = require('../http/http-response');

async function getThreeRandomDeveloperCommitMessages(requestEvent) {
  await addSomeRandomDelayJustForFun();

  const { developerId } = requestEvent.queryStringParameters || {};
  const developer = developers.find((dev) => dev.id === developerId);

  if (!developer) {
    return HttpError.notFound('Developer not found').toHttpResponse().toEvent();
  }

  const data = developer.commitMessages.sort(() => Math.random() - Math.random()).slice(-3);

  return new HttpResponse(200, JSON.stringify(data)).toEvent();
}

module.exports = { getThreeRandomDeveloperCommitMessages };
