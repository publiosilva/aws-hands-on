async function addSomeRandomDelayJustForFun() {
  const minDelayInMilliseconds = 500;
  const maxDelayInMilliseconds = 1500;
  const delayInMilliseconds = Math.floor(
    Math.random() * (maxDelayInMilliseconds - minDelayInMilliseconds),
  ) + minDelayInMilliseconds;

  await new Promise((resolve) => {
    setTimeout(resolve, delayInMilliseconds);
  });
}

module.exports = { addSomeRandomDelayJustForFun };
