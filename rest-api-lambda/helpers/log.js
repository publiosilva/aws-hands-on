function log(message) {
  if (process.env.DEBUG === 'true') {
    // eslint-disable-next-line no-console
    console.log(message);
  }
}

module.exports = { log };
