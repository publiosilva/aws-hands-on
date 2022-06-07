const { getAllDevelopers } = require('./handlers/get-all-developers');
const { getThreeRandomDeveloperCommitMessages } = require('./handlers/get-three-random-developer-commit-messages');
const { log } = require('./helpers/log');
const { HttpError } = require('./http/http-error');

async function handler(requestEvent) {
  log(JSON.stringify({ requestEvent }, null, 2));

  try {
    const { rawPath } = requestEvent;
    const requestHandlers = {
      '/commits': getThreeRandomDeveloperCommitMessages,
      '/developers': getAllDevelopers,
    };
    const requestHandler = requestHandlers[rawPath];

    if (!requestHandler) {
      return HttpError.notFound('Not found').toHttpResponse();
    }

    const responseEvent = await requestHandler(requestEvent);

    log(JSON.stringify({ responseEvent }, null, 2));

    return responseEvent;
  } catch (error) {
    log(JSON.stringify(error, Object.getOwnPropertyNames(error), 2));

    return HttpError.internalServer().toHttpResponse();
  }
}

module.exports = { handler };
