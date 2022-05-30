const { HttpError } = require('./http/http-error');
const { getAllDevelopers } = require('./handlers/get-all-developers');
const { getDeveloperLastThreeCommitMessages } = require('./handlers/get-developer-last-three-commit-messages');
const { log } = require('./helpers/log');

async function handler(requestEvent) {
  log(JSON.stringify({ requestEvent }, null, 2));

  try {
    const { rawPath } = requestEvent;
    const requestHandlers = {
      '/commits': getDeveloperLastThreeCommitMessages,
      '/developers': getAllDevelopers,
    };
    const requestHandler = requestHandlers[rawPath];

    if (!requestHandler) {
      return HttpError.notFound('Not found').toHttpResponse().toEvent();
    }

    const responseEvent = await requestHandler(requestEvent);

    log(JSON.stringify({ responseEvent }, null, 2));

    return responseEvent;
  } catch (error) {
    log(JSON.stringify(error, Object.getOwnPropertyNames(error), 2));

    return HttpError.internalServer().toHttpResponse().toEvent();
  }
}

module.exports = { handler };
