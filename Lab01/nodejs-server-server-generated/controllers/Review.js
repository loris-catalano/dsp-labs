'use strict';

var utils = require('../utils/writer.js');
var Review = require('../service/ReviewService');

module.exports.autoAssignReviews = function autoAssignReviews (req, res, next, body) {
  Review.autoAssignReviews(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.completeReview = function completeReview (req, res, next, body, filmId, reviewerId) {
  Review.completeReview(body, filmId, reviewerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteReviewInvitation = function deleteReviewInvitation (req, res, next, filmId, reviewerId) {
  Review.deleteReviewInvitation(filmId, reviewerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFilmReview = function getFilmReview (req, res, next, filmId, reviewerId) {
  Review.getFilmReview(filmId, reviewerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFilmReviews = function getFilmReviews (req, res, next, filmId) {
  Review.getFilmReviews(filmId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.issueFilmReviews = function issueFilmReviews (req, res, next, body, filmId) {
  Review.issueFilmReviews(body, filmId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
