class HttpResponse {
  constructor(statusCode, body = '', headers = {}, isBase64Encoded = false) {
    this.statusCode = statusCode;
    this.body = body;
    this.headers = headers;
    this.isBase64Encoded = isBase64Encoded;
  }
}

module.exports = { HttpResponse };
