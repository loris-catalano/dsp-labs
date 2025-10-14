'use strict';


/**
 * Add a new film to the system.
 * Add a new film to the system.
 *
 * body Film Create a new film in the system
 * returns Film
 **/
exports.addFilm = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "owner" : "owner",
  "private" : true,
  "watchDate" : "2000-01-23",
  "rating" : 0,
  "self" : "http://example.com/aeiou",
  "id" : "id",
  "title" : "title",
  "favorite" : false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new film to the system.
 * Add a new film to the system.
 *
 * body Film Create a new film in the system
 * returns Film
 **/
exports.addFilm = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "owner" : "owner",
  "private" : true,
  "watchDate" : "2000-01-23",
  "rating" : 0,
  "self" : "http://example.com/aeiou",
  "id" : "id",
  "title" : "title",
  "favorite" : false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete film by ID.
 * Delete film in the system by ID. You can only delete films you own.
 *
 * id String The ID that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteFilm = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all films you created.
 * Get all films you created in the system.
 *
 * returns List
 **/
exports.getAllFilmsCreated = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "owner" : "owner",
  "private" : true,
  "watchDate" : "2000-01-23",
  "rating" : 0,
  "self" : "http://example.com/aeiou",
  "id" : "id",
  "title" : "title",
  "favorite" : false
}, {
  "owner" : "owner",
  "private" : true,
  "watchDate" : "2000-01-23",
  "rating" : 0,
  "self" : "http://example.com/aeiou",
  "id" : "id",
  "title" : "title",
  "favorite" : false
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all films you are invited to review.
 * Get all films you are invited to review in the system.
 *
 * returns List
 **/
exports.getAllFilmsInvited = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "owner" : "owner",
  "private" : true,
  "watchDate" : "2000-01-23",
  "rating" : 0,
  "self" : "http://example.com/aeiou",
  "id" : "id",
  "title" : "title",
  "favorite" : false
}, {
  "owner" : "owner",
  "private" : true,
  "watchDate" : "2000-01-23",
  "rating" : 0,
  "self" : "http://example.com/aeiou",
  "id" : "id",
  "title" : "title",
  "favorite" : false
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get film by ID.
 * Get film detail based on film ID.
 *
 * id String The ID that needs to be fetched. Use 'tt0111161' for testing
 * returns Film
 **/
exports.getFilmById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "owner" : "owner",
  "private" : true,
  "watchDate" : "2000-01-23",
  "rating" : 0,
  "self" : "http://example.com/aeiou",
  "id" : "id",
  "title" : "title",
  "favorite" : false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Patch an existing film in the system.
 * Patch an existing film in the system. Changing visibility from public to private is not allowed.
 *
 * body Film Patch an existent film in the store (optional)
 * no response value expected for this operation
 **/
exports.patchFilm = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Patch an existing film in the system.
 * Patch an existing film in the system. Changing visibility from public to private is not allowed.
 *
 * body Film Patch an existent film in the store (optional)
 * no response value expected for this operation
 **/
exports.patchFilm = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

