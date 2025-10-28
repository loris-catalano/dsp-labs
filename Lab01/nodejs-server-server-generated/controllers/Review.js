'use strict';

var utils = require('../utils/writer.js');
var Review = require('../service/ReviewsService');

module.exports.getFilmReviews = function getFilmReviews (req, res, next) {
  const filmId = req.params.filmId;
  const pageNo = req.query.pageNo;
  Review.getFilmReviews(pageNo, filmId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.issueFilmReviews = function issueFilmReviews (req, res, next) {
  const filmId = req.params.filmId;
  const invitations = req.body;
  const owner = req.user ? req.user.id : undefined;
  
  // Add filmId to each invitation if not present
  const invitationsWithFilmId = invitations.map(inv => ({
    ...inv,
    filmId: filmId
  }));
  
  Review.issueFilmReview(invitationsWithFilmId, owner)
    .then(function (response) {
      utils.writeJson(res, response, 201);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFilmReview = function getFilmReview (req, res, next) {
  const filmId = req.params.filmId;
  const reviewerId = req.params.reviewerId;
  Review.getSingleReview(filmId, reviewerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.completeReview = function completeReview (req, res, next) {
  const filmId = req.params.filmId;
  const reviewerId = req.params.reviewerId;
  const review = req.body;
  Review.updateSingleReview(review, filmId, reviewerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteReviewInvitation = function deleteReviewInvitation (req, res, next) {
  const filmId = req.params.filmId;
  const reviewerId = req.params.reviewerId;
  const owner = req.user ? req.user.id : undefined;
  Review.deleteSingleReview(filmId, reviewerId, owner)
    .then(function (response) {
      utils.writeJson(res, response, 204);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
