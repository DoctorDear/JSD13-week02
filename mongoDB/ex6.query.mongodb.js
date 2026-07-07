use("sample_mflix")

// Find all movies in the "movies" collection released between 1950 and 1970 (inclusive) that are documented as being shown in countries located in the USA.
db.movies.find({countries: {$in : ["USA"]
}, year:{$gte: 1950, $lte: 1970}})


// What is the number of movies in the "movies" collection with genres "Drama" and "History" released after the year 1970?


// In how many films is Roy L. McCardell credited as an actor?


// How many movies did Hal Roach directed?


// What is the movie with the earliest release year directed by Hal Roach?


// How many awards did Hal Roach’s movies win?
