# Bruno HTTP Tests for Film Manager API

This folder contains Bruno HTTP test files for all the Film Manager API endpoints.

## Test Files Overview

### Film APIs (11 tests)
1. **Create Film.bru** - POST /api/films - Create a new film
2. **Get All Films.bru** - GET /api/films/public - Get all public films
3. **Get Single Public Film.bru** - GET /api/films/public/:filmId - Get a specific public film
4. **Update Public Film.bru** - PUT /api/films/public/:filmId - Update a public film
5. **Delete Public Film.bru** - DELETE /api/films/public/:filmId - Delete a public film
6. **Get Private Films.bru** - GET /api/films/private - Get all private films
7. **Get Single Private Film.bru** - GET /api/films/private/:filmId - Get a specific private film
8. **Update Private Film.bru** - PUT /api/films/private/:filmId - Update a private film
9. **Delete Private Film.bru** - DELETE /api/films/private/:filmId - Delete a private film
10. **Get Invited Films.bru** - GET /api/films/invited - Get films user is invited to review

### Review APIs (5 tests)
11. **Get Film Reviews.bru** - GET /api/films/:filmId/reviews - Get all reviews for a film
12. **Issue Review Invitation.bru** - POST /api/films/:filmId/reviews - Issue review invitations
13. **Get Single Review.bru** - GET /api/films/:filmId/reviews/:reviewerId - Get a specific review
14. **Complete Review.bru** - PUT /api/films/:filmId/reviews/:reviewerId - Complete/update a review
15. **Delete Review Invitation.bru** - DELETE /api/films/:filmId/reviews/:reviewerId - Delete a review invitation

### User APIs (4 tests)
16. **Get All Users.bru** - GET /api/users - Get all users
17. **Get User By ID.bru** - GET /api/users/:userId - Get a specific user
18. **Login User.bru** - POST /api/users/authenticator - Login a user
19. **Logout User.bru** - DELETE /api/users/authenticator - Logout current user

## Prerequisites

1. Make sure the server is running on port 3001:
   ```bash
   cd nodejs-server-server-generated
   node index.js
   ```

2. Install Bruno HTTP client from https://www.usebruno.com/

## Usage

1. Open Bruno and load this folder as a collection
2. The tests are numbered in sequence (seq) for logical ordering
3. Run tests individually or as a collection
4. Some tests require authentication - run "Login User" first for those

## Test Data

The tests use the following sample data:
- Film IDs: 1, 2, 3 (existing films in database)
- User IDs: 1, 2, 3, 4, 5 (existing users)
- Login credentials: user.dsp@polito.it / password

## Notes

- Tests with authentication requirements will return authorization errors if not logged in
- The server uses session-based authentication with cookies
- Make sure to run login test before testing protected endpoints
- Some DELETE operations may fail if the resource doesn't exist or user is not authorized
