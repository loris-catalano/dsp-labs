'use strict';

var utils = require('../utils/writer.js');
var Film = require('../service/FilmService');

module.exports.addFilm = function addFilm (req, res, next, body) {
  Film.addFilm(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addFilm = function addFilm (req, res, next, body) {
  Film.addFilm(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteFilm = function deleteFilm (req, res, next, id) {
  Film.deleteFilm(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllFilmsCreated = function getAllFilmsCreated (req, res, next) {
  Film.getAllFilmsCreated()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllFilmsInvited = function getAllFilmsInvited (req, res, next) {
  Film.getAllFilmsInvited()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFilmById = function getFilmById (req, res, next, id) {
  Film.getFilmById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchFilm = function patchFilm (req, res, next, body) {
  Film.patchFilm(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchFilm = function patchFilm (req, res, next, body) {
  Film.patchFilm(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
