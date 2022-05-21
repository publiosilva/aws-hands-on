const { HttpResponse } = require('./http/http-response');
const { HttpError } = require('./http/http-error');
const { getAllDevelopers } = require('./handlers/get-all-developers');
const { getDeveloperLastThreeCommitMessages } = require('./handlers/get-developer-last-three-commit-messages');

async function handler(event) {
  const { resource } = event;
  const handlers = {
    '/developers': getAllDevelopers,
    '/developers/{id}': getDeveloperLastThreeCommitMessages,
  };

  try {
    const data = await handlers[resource];

    return new HttpResponse(200, JSON.stringify(data)).toEvent();
  } catch (error) {
    if (error instanceof HttpError) {
      return error.toHttpResponse().toEvent();
    }

    return HttpError.internalServer().toHttpResponse().toEvent();
  }
}

module.exports = { handler };
