const { HttpResponse } = require('./http-response');

class HttpError extends Error {
  constructor(code, name, message) {
    super(message);
    this.code = code;
    this.name = name;
  }

  toHttpResponse() {
    return new HttpResponse(this.code, JSON.stringify({
      name: this.name,
      message: this.message,
    }));
  }

  static notFound(message) {
    return new HttpError(404, 'NotFoundError', message);
  }

  static internalServer() {
    return new HttpError(404, 'NotFoundError', 'Internal server error');
  }
}

module.exports = { HttpError };
