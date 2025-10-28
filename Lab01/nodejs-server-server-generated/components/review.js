class Review{    
    constructor(filmId, reviewerId, completed, reviewDate, rating, review) {
        this.filmId = filmId;
        this.reviewerId = reviewerId;
        this.completed = completed;

        if(reviewDate)
            this.reviewDate = reviewDate;
        if(rating)
            this.rating = rating;
        if(review)
            this.review = review;

        this.self =  `/api/films/${this.filmId}/reviews/${this.reviewerId}`;
    }
}

module.exports = Review;


