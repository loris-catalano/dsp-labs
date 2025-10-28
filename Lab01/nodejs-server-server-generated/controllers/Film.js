'use strict';

var utils = require('../utils/writer.js');
var Film = require('../service/FilmsService');

module.exports.createFilm = function createFilm (req, res, next) {
  const body = req.body;
  const owner = (req && req.user && req.user.id) ? req.user.id : (body && body.owner ? body.owner : undefined);
  
  Film.createFilm(body, owner)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (err) {
      console.error('createFilm error:', err);

      if (err instanceof Error) {
        utils.writeJson(res, { message: err.message }, 500);
      } else {
        utils.writeJson(res, err);
      }
    });
};

module.exports.getAllFilms = function getAllFilms (req, res, next) {
  Film.getAllFilms()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPublicFilms = function getPublicFilms (req, res, next) {
  const pageNo = req.query.pageNo;
  Film.getPublicFilms(pageNo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPrivateFilms = function getPrivateFilms (req, res, next) {
  const userId = req.user ? req.user.id : undefined;
  const pageNo = req.query.pageNo;
  Film.getPrivateFilms(userId, pageNo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getInvitedFilms = function getInvitedFilms (req, res, next) {
  const userId = req.user ? req.user.id : undefined;
  const pageNo = req.query.pageNo;
  Film.getInvitedFilms(userId, pageNo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSinglePublicFilm = function getSinglePublicFilm (req, res, next) {
  const filmId = req.params.filmId;
  Film.getSinglePublicFilm(filmId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSinglePrivateFilm = function getSinglePrivateFilm (req, res, next) {
  const filmId = req.params.filmId;
  const owner = req.user ? req.user.id : undefined;
  Film.getSinglePrivateFilm(filmId, owner)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSinglePublicFilm = function updateSinglePublicFilm (req, res, next) {
  const film = req.body;
  const filmId = req.params.filmId;
  const owner = req.user ? req.user.id : undefined;
  Film.updateSinglePublicFilm(film, filmId, owner)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSinglePrivateFilm = function updateSinglePrivateFilm (req, res, next) {
  const film = req.body;
  const filmId = req.params.filmId;
  const owner = req.user ? req.user.id : undefined;
  Film.updateSinglePrivateFilm(film, filmId, owner)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteSinglePublicFilm = function deleteSinglePublicFilm (req, res, next) {
  const filmId = req.params.filmId;
  const owner = req.user ? req.user.id : undefined;
  Film.deleteSinglePublicFilm(filmId, owner)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteSinglePrivateFilm = function deleteSinglePrivateFilm (req, res, next) {
  const filmId = req.params.filmId;
  const owner = req.user ? req.user.id : undefined;
  Film.deleteSinglePrivateFilm(filmId, owner)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
