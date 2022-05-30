async function addSomeRandomDelayJustForFun() {
  const minDelayInMilliseconds = 200;
  const maxDelayInMilliseconds = 1000;
  const delayInMilliseconds = Math.floor(
    Math.random() * (maxDelayInMilliseconds - minDelayInMilliseconds),
  ) + minDelayInMilliseconds;

  await new Promise((resolve) => {
    setTimeout(resolve, delayInMilliseconds);
  });
}

module.exports = { addSomeRandomDelayJustForFun };
