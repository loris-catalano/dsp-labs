'use strict';

var path = require('path');
var http = require('http');
var cors = require('cors');
var fs = require('fs');
var oas3Tools = require('oas3-tools');
var { Validator, ValidationError } = require('express-json-validator-middleware');
var serverPort = 3001;
var passport = require('passport');
require('./passport-config');
var session = require('express-session');
//import methods from controllers
var FilmController = require('./controllers/Film');
var ReviewController = require('./controllers/Review');
var UserController = require('./controllers/User');


// Swagger configuration

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'));
var app = expressAppConfig.getApp();

// Creating the session

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(session({
    secret: "shhhhh... it's a secret!",
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.authenticate('session'));
// Defining authentication verification middleware 

const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ message: 'Unauthorized' });   
}

const { validate } = new Validator({ allErrors: true });

// Load the JSON schema(s) you need
const filmSchema = require('./api/schemas/film_schema.json');
const reviewSchema = require('./api/schemas/review_schema.json');
const userSchema = require('./api/schemas/user_schema.json');

/*** Route Definitions ***/

// User routes
app.get('/api/users', isLoggedIn, UserController.getUsers);
app.get('/api/users/:userId', isLoggedIn, UserController.getUserById);
app.post('/api/users/authenticator', UserController.authenticateUser);
app.delete('/api/users/authenticator', isLoggedIn, UserController.logoutUser);

// Film routes
app.post('/api/films', isLoggedIn, validate({ body: filmSchema }), FilmController.createFilm);
app.get('/api/films', isLoggedIn, FilmController.getAllFilms);
app.get('/api/films/public', FilmController.getPublicFilms);
app.get('/api/films/public/:filmId', FilmController.getSinglePublicFilm);
app.put('/api/films/public/:filmId', isLoggedIn, validate({ body: filmSchema }), FilmController.updateSinglePublicFilm);
app.delete('/api/films/public/:filmId', isLoggedIn, FilmController.deleteSinglePublicFilm);
app.get('/api/films/private', isLoggedIn, FilmController.getPrivateFilms);
app.get('/api/films/private/:filmId', isLoggedIn, FilmController.getSinglePrivateFilm);
app.put('/api/films/private/:filmId', isLoggedIn, validate({ body: filmSchema }), FilmController.updateSinglePrivateFilm);
app.delete('/api/films/private/:filmId', isLoggedIn, FilmController.deleteSinglePrivateFilm);
app.get('/api/films/invited', isLoggedIn, FilmController.getInvitedFilms);

// Review routes
app.get('/api/films/:filmId/reviews', ReviewController.getFilmReviews);
app.post('/api/films/:filmId/reviews', isLoggedIn, ReviewController.issueFilmReviews);
app.get('/api/films/:filmId/reviews/:reviewerId', ReviewController.getFilmReview);
app.put('/api/films/:filmId/reviews/:reviewerId', isLoggedIn, validate({ body: reviewSchema }), ReviewController.completeReview);
app.delete('/api/films/:filmId/reviews/:reviewerId', isLoggedIn, ReviewController.deleteReviewInvitation);


// Initialize the Swagger middleware

http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});