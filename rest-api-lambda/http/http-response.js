class HttpResponse {
  constructor(statusCode, body = '', headers = {}, isBase64Encoded = false) {
    this.statusCode = statusCode;
    this.body = body;
    this.headers = headers;
    this.isBase64Encoded = isBase64Encoded;
  }

  toEvent() {
    return {
      statusCode: this.statusCode,
      body: this.body,
      headers: this.headers,
      isBase64Encoded: this.isBase64Encoded,
    };
  }
}

module.exports = { HttpResponse };
