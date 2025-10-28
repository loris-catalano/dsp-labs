var ResponsePayload = function(code, payload) {
  this.code = code;
  this.payload = payload;
}

exports.respondWithCode = function(code, payload) {
  return new ResponsePayload(code, payload);
}

var writeJson = exports.writeJson = function(response, arg1, arg2) {
  var code;
  var payload;

  if(response && response.headersSent) {
    return;
  }

  if(arg1 && arg1 instanceof ResponsePayload) {
    writeJson(response, arg1.payload, arg1.code);
    return;
  }

  if(arg2 && Number.isInteger(arg2)) {
    code = arg2;
  }
  else {
    if(arg1 && Number.isInteger(arg1)) {
      code = arg1;
    }
  }
  if(code && arg1) {
    payload = arg1;
  }
  else if(arg1) {
    payload = arg1;
  }

  if(!code) {
    // if no response code given, we default to 200
    code = 200;
  }
  if(typeof payload === 'object') {
    payload = JSON.stringify(payload, null, 2);
  }
  // Support both Node's http.ServerResponse and Express response objects.
  if(response && typeof response.writeHead === 'function') {
    response.writeHead(code, {'Content-Type': 'application/json'});
    response.end(payload);
  }
  else if(response && typeof response.status === 'function') {
    // Express response: set content type and send payload
    // payload is already a JSON string; send as-is to preserve formatting.
    response.status(code).set('Content-Type', 'application/json').send(payload);
  }
  else {
    // Fallback: try to call end if available
    if(response && typeof response.end === 'function') {
      try {
        response.end(payload);
      }
      catch(e) {
        
      }
    }
  }
}
