const { addSomeRandomDelayJustForFun } = require('../helpers/add-some-random-delay-just-for-fun');
const developers = require('../fixture/developers.json');
const { HttpResponse } = require('../http/http-response');

async function getAllDevelopers() {
  await addSomeRandomDelayJustForFun();

  const data = developers.map(({
    id, name, email, github,
  }) => ({
    id,
    name,
    email,
    githubProfile: `https://github.com/${github}`,
  }));

  return new HttpResponse(200, JSON.stringify(data));
}

module.exports = { getAllDevelopers };
