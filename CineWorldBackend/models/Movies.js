import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    releaseDate: Date,
    availableTickets: Number,
    showtimes:[Date],
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;
