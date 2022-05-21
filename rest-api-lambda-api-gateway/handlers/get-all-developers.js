const { addSomeRandomDelayJustForFun } = require('../util/add-some-random-delay-just-for-fun');
const developers = require('../fixture/developers.json');

async function getAllDevelopers() {
  await addSomeRandomDelayJustForFun();

  return developers.map(({
    id, name, email, github, commitMessages,
  }) => ({
    id,
    name,
    email,
    githubProfile: `https://github.com/${github}`,
    commitMessages,
  }));
}

module.exports = { getAllDevelopers };
