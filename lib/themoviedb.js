/*
 * themoviedb
 * https://github.com/chrisenytc/themoviedb
 *
 * Copyright (c) 2015, Christopher EnyTC
 * Licensed under the BSD license.
 */

'use strict';

/*
 * Module Dependencies
 */

var P = require('bluebird'),
    request = require('superagent'),
    _ = require('underscore');

/**
 * @class TheMovieDb
 *
 * @constructor
 *
 * TheMovieDb
 *
 * @example
 *
 * var api = new TheMovieDb('API_KEY', 'en');
 *
 * @param {String} apiKey The TMDb api key
 * @param {String} [language] The language to use in the request
 * @license BSD
 */

var TheMovieDb = module.exports = function TheMovieDb(apiKey, language) {
    if (!apiKey || apiKey === '') {
        throw new Error('apiKey is required!');
    }
    //Consts
    this.API_KEY = apiKey;
    this.LANG = language;
    this.API_URI = 'https://api.themoviedb.org/3/';
    this.IMAGE_URL = 'http://image.tmdb.org/t/p/original';
    //Get handler
    this.get = function(path, query, callback) {
        if (!callback) {
            callback = query;
        }
        if (typeof callback !== 'function') {
            throw new Error('callback must be a function');
        }
        request
            .get(this.API_URI + path)
            .type('json')
            .set('Accept', 'application/json')
            .query({
                api_key: this.API_KEY,
                language: this.LANG
            })
            .query(query)
            .end(callback);
    }.bind(this);
    //Post handler
    this.post = function(path, body, query, callback) {
        if (!callback) {
            callback = query;
        }
        if (typeof callback !== 'function') {
            throw new Error('callback must be a function');
        }
        request
            .post(this.API_URI + path)
            .type('json')
            .set('Accept', 'application/json')
            .query({
                api_key: this.API_KEY,
                language: this.LANG
            })
            .query(query)
            .send(body)
            .end(callback);
    }.bind(this);
    //Put handler
    this.put = function(path, body, query, callback) {
        if (!callback) {
            callback = query;
        }
        if (typeof callback !== 'function') {
            throw new Error('callback must be a function');
        }
        request
            .put(this.API_URI + path)
            .type('json')
            .set('Accept', 'application/json')
            .query({
                api_key: this.API_KEY,
                language: this.LANG
            })
            .query(query)
            .send(body)
            .end(callback);
    }.bind(this);
    //Delete handler
    this.delete = function(path, query, callback) {
        if (!callback) {
            callback = query;
        }
        if (typeof callback !== 'function') {
            throw new Error('callback must be a function');
        }
        request
            .del(this.API_URI + path)
            .type('json')
            .set('Accept', 'application/json')
            .query({
                api_key: this.API_KEY,
                language: this.LANG
            })
            .query(query)
            .end(callback);
    }.bind(this);
};

/*
 * Public Methods
 */

/**
 * Method responsible to set the current language
 *
 * @example
 *
 * client.setLanguage('en');
 *
 * @method setLanguage
 * @public
 * @param {String} language The language to use in the request
 */

TheMovieDb.prototype.setLanguage = function(language) {
    this.LANG = language;
    return true;
};

/**
 * Method responsible for search movies
 *
 * @example
 *
 * client.searchMovies({query: 'The Hobbit: The Battle of the Five Armies', sortBy: 'popularity.desc', includeAdult: false}, function(err, movies) {
 *      console.log(movies);
 * });
 *
 * @method searchMovies
 * @public
 * @param {Mixed} query A string or object with the search terms
 * @param {Function} cb A callback with a array of movies
 */

TheMovieDb.prototype.searchMovies = function(query, cb) {
    var that = this;

    if (typeof query === 'string') {
        query = {
            query: query
        };
    }

    return new P(function(resolve, reject) {
        that.get('search/movie', {
            query: query.query,
            sort_by: query.sortBy || 'popularity.desc',
            include_adult: query.includeAdult,
            primary_release_year: query.primaryReleaseYear,
            year: query.year,
            search_type: query.searchType
        }, function(err, res) {
            if (err) {
                reject(err);
            } else {
                var movies = _.map(res.body.results, function(m) {
                    return {
                        id: m.id,
                        title: m.title,
                        originalTitle: m.original_title,
                        release: new Date(m.release_date),
                        year: new Date(m.release_date).getFullYear(),
                        popularity: m.popularity,
                        voteAverage: m.vote_average,
                        votes: m.vote_count,
                        isAdult: m.adult,
                        video: m.video,
                        poster: that.IMAGE_URL + m.poster_path,
                        backdrop: that.IMAGE_URL + m.backdrop_path
                    };
                });
                resolve(movies);
            }
        });
    }).nodeify(cb);
};

/**
 * Method responsible for get the list of popular movies on The Movie Database. This list refreshes every day
 *
 * @example
 *
 * client.popularMovies(function(err, movies) {
 *      console.log(movies);
 * });
 *
 * @method popularMovies
 * @public
 * @param {Mixed} [query] A object with the query options
 * @param {Function} cb A callback with a array of movies
 */

TheMovieDb.prototype.popularMovies = function(query, cb) {
    var that = this;

    if (!cb) {
        cb = query;
        query = {};
    }

    return new P(function(resolve, reject) {
        that.get('movie/popular', {
            page: query.page,
            sort_by: query.sortBy || 'popularity.desc'
        }, function(err, res) {
            if (err) {
                reject(err);
            } else {
                var movies = _.map(res.body.results, function(m) {
                    return {
                        id: m.id,
                        title: m.title,
                        originalTitle: m.original_title,
                        release: new Date(m.release_date),
                        year: new Date(m.release_date).getFullYear(),
                        popularity: m.popularity,
                        voteAverage: m.vote_average,
                        votes: m.vote_count,
                        isAdult: m.adult,
                        video: m.video,
                        poster: that.IMAGE_URL + m.poster_path,
                        backdrop: that.IMAGE_URL + m.backdrop_path
                    };
                });
                resolve(movies);
            }
        });
    }).nodeify(cb);
};

/**
 * Method responsible for get the list of top rated movies. By default, this list will only include movies that have 10 or more votes. This list refreshes every day
 *
 * @example
 *
 * client.topRatedMovies(function(err, movies) {
 *      console.log(movies);
 * });
 *
 * @method topRatedMovies
 * @public
 * @param {Mixed} [query] A object with the query options
 * @param {Function} cb A callback with a array of movies
 */

TheMovieDb.prototype.topRatedMovies = function(query, cb) {
    var that = this;

    if (!cb) {
        cb = query;
        query = {};
    }

    return new P(function(resolve, reject) {
        that.get('movie/top_rated', {
            page: query.page,
            sort_by: query.sortBy || 'popularity.desc'
        }, function(err, res) {
            if (err) {
                reject(err);
            } else {
                var movies = _.map(res.body.results, function(m) {
                    return {
                        id: m.id,
                        title: m.title,
                        originalTitle: m.original_title,
                        release: new Date(m.release_date),
                        year: new Date(m.release_date).getFullYear(),
                        popularity: m.popularity,
                        voteAverage: m.vote_average,
                        votes: m.vote_count,
                        isAdult: m.adult,
                        video: m.video,
                        poster: that.IMAGE_URL + m.poster_path,
                        backdrop: that.IMAGE_URL + m.backdrop_path
                    };
                });
                resolve(movies);
            }
        });
    }).nodeify(cb);
};

/**
 * Method responsible for get the basic movie information for a specific movie id
 *
 * @example
 *
 * client.getMovie(122917, function(err, movie) {
 *      console.log(movie);
 * });
 *
 * @method getMovie
 * @public
 * @param {Mixed} query A integer or object with TMDb movie id
 * @param {Function} cb A callback with the movie data
 */

TheMovieDb.prototype.getMovie = function(query, cb) {
    var that = this;

    if (typeof query === 'number') {
        query = {
            id: query
        };
    }

    return new P(function(resolve, reject) {
        that.get('movie/' + query.id, {
            append_to_response: query.appendToResponse || 'credits,videos,images,releases'
        }, function(err, res) {
            if (err) {
                reject(new Error(JSON.parse(res.error.text).status_message));
            } else {
                var movie = {
                    id: res.body.id,
                    imdbId: res.body.imdb_id,
                    title: res.body.title,
                    originalTitle: res.body.original_title,
                    description: res.body.tagline,
                    overview: res.body.overview,
                    release: new Date(res.body.release_date),
                    year: new Date(res.body.release_date).getFullYear(),
                    duration: res.body.runtime,
                    popularity: res.body.popularity,
                    voteAverage: res.body.vote_average,
                    votes: res.body.vote_count,
                    isAdult: res.body.adult,
                    video: res.body.video,
                    budget: res.body.budget,
                    revenue: res.body.revenue,
                    status: res.body.status,
                    poster: that.IMAGE_URL + res.body.poster_path,
                    backdrop: that.IMAGE_URL + res.body.backdrop_path,
                    genres: res.body.genres,
                    spokenLanguages: res.body.spoken_languages,
                    productionCompanies: res.body.production_companies,
                    productionCountries: res.body.production_countries
                };
                if (res.body.belongs_to_collection) {
                    movie.belongsToCollection = {
                        id: res.body.belongs_to_collection.id,
                        name: res.body.belongs_to_collection.name,
                        poster: that.IMAGE_URL + res.body.belongs_to_collection.poster_path,
                        backdrop: that.IMAGE_URL + res.body.belongs_to_collection.backdrop_path
                    };
                } else {
                    movie.belongsToCollection = null;
                }
                if (res.body.credits) {
                    movie.credits = {
                        id: res.body.credits.id
                    };
                    movie.credits.cast = _.map(res.body.credits.cast, function(c) {
                        return {
                            id: c.id,
                            castId: c.credit_id,
                            creditId: c.credit_id,
                            character: c.character,
                            name: c.name,
                            order: c.order,
                            profilePicture: that.IMAGE_URL + c.profile_path
                        };
                    });
                    movie.credits.crew = _.map(res.body.credits.crew, function(c) {
                        return {
                            id: c.id,
                            creditId: c.credit_id,
                            name: c.name,
                            department: c.department,
                            job: c.job,
                            profilePicture: that.IMAGE_URL + c.profile_path
                        };
                    });
                } else {
                    movie.credits = null;
                }
                if (res.body.videos) {
                    movie.videos = {};
                    movie.videos = _.map(res.body.videos.results, function(v) {
                        var vObj = {
                            id: v.id,
                            name: v.name,
                            size: v.size,
                            iso_639_1: v.iso_639_1,
                        };
                        if (v.site === 'YouTube') {
                            vObj.url = 'https://www.youtube.com/watch?v=' + v.key;
                        } else {
                            vObj.url = v.key;
                        }
                        return vObj;
                    });
                } else {
                    movie.videos = null;
                }
                if (res.body.images) {
                    movie.images = {};
                    movie.images.backdrops = _.map(res.body.images.backdrops, function(i) {
                        return {
                            width: i.width,
                            height: i.height,
                            voteAverage: i.vote_average,
                            votes: i.vote_count,
                            aspectRatio: i.aspect_ratio,
                            iso_639_1: i.iso_639_1,
                            url: that.IMAGE_URL + i.file_path
                        };
                    });
                    movie.images.posters = _.map(res.body.images.posters, function(i) {
                        return {
                            width: i.width,
                            height: i.height,
                            voteAverage: i.vote_average,
                            votes: i.vote_count,
                            aspectRatio: i.aspect_ratio,
                            iso_639_1: i.iso_639_1,
                            url: that.IMAGE_URL + i.file_path
                        };
                    });
                } else {
                    movie.images = null;
                }
                if (res.body.releases) {
                    var releasesObj = _.findWhere(res.body.releases.countries, {
                        primary: true
                    });
                    movie.rating = releasesObj.certification;
                } else {
                    movie.rating = null;
                }
                resolve(movie);
            }
        });
    }).nodeify(cb);
};

/**
 * Method responsible for get the similar movies for a specific movie id
 *
 * @example
 *
 * client.getSimilarMovies(122917, function(err, movies) {
 *      console.log(movies);
 * });
 *
 * @method getSimilarMovies
 * @public
 * @param {Mixed} query A integer or object with TMDb movie id
 * @param {Function} cb A callback with a array of movies
 */

TheMovieDb.prototype.getSimilarMovies = function(query, cb) {
    var that = this;

    if (typeof query === 'number') {
        query = {
            id: query
        };
    }

    return new P(function(resolve, reject) {
        that.get('movie/' + query.id + '/similar', {
            page: query.page,
            sort_by: query.sortBy || 'popularity.desc',
            append_to_response: query.appendToResponse
        }, function(err, res) {
            if (err) {
                reject(new Error(JSON.parse(res.error.text).status_message));
            } else {
                var movies = _.map(res.body.results, function(m) {
                    return {
                        id: m.id,
                        title: m.title,
                        originalTitle: m.original_title,
                        release: new Date(m.release_date),
                        year: new Date(m.release_date).getFullYear(),
                        popularity: m.popularity,
                        voteAverage: m.vote_average,
                        votes: m.vote_count,
                        isAdult: m.adult,
                        video: m.video,
                        poster: that.IMAGE_URL + m.poster_path,
                        backdrop: that.IMAGE_URL + m.backdrop_path
                    };
                });
                resolve(movies);
            }
        });
    }).nodeify(cb);
};

/**
 * Method responsible for get the cast and crew information for a specific movie id
 *
 * @example
 *
 * client.getCreditsOfMovie(122917, function(err, credits) {
 *      console.log(credits);
 * });
 *
 * @method getCreditsOfMovie
 * @public
 * @param {Mixed} query A integer or object with TMDb movie id
 * @param {Function} cb A callback with the movie credits
 */

TheMovieDb.prototype.getCreditsOfMovie = function(query, cb) {
    var that = this;

    if (typeof query === 'number') {
        query = {
            id: query
        };
    }

    return new P(function(resolve, reject) {
        that.get('movie/' + query.id + '/credits', {
            append_to_response: query.appendToResponse
        }, function(err, res) {
            if (err) {
                reject(new Error(JSON.parse(res.error.text).status_message));
            } else {
                var credits = {
                    id: res.body.id
                };
                credits.cast = _.map(res.body.cast, function(c) {
                    return {
                        id: c.id,
                        castId: c.cast_id,
                        creditId: c.credit_id,
                        character: c.character,
                        name: c.name,
                        order: c.order,
                        profilePicture: that.IMAGE_URL + c.profile_path
                    };
                });
                credits.crew = _.map(res.body.crew, function(c) {
                    return {
                        id: c.id,
                        creditId: c.credit_id,
                        name: c.name,
                        department: c.department,
                        job: c.job,
                        profilePicture: that.IMAGE_URL + c.profile_path
                    };
                });
                resolve(credits);
            }
        });
    }).nodeify(cb);
};

/**
 * Method responsible for get the videos for a specific movie id
 *
 * @example
 *
 * client.getVideosOfMovie(122917, function(err, videos) {
 *      console.log(videos);
 * });
 *
 * @method getVideosOfMovie
 * @public
 * @param {Mixed} query A integer or object with TMDb movie id
 * @param {Function} cb A callback with the movie videos
 */

TheMovieDb.prototype.getVideosOfMovie = function(query, cb) {
    var that = this;

    if (typeof query === 'number') {
        query = {
            id: query
        };
    }

    return new P(function(resolve, reject) {
        that.get('movie/' + query.id + '/videos', {
            append_to_response: query.appendToResponse
        }, function(err, res) {
            if (err) {
                reject(new Error(JSON.parse(res.error.text).status_message));
            } else {
                var credits = {
                        id: res.body.id
                    },
                    vObj;
                credits.videos = _.map(res.body.results, function(v) {
                    vObj = {
                        id: v.id,
                        name: v.name,
                        size: v.size,
                        iso_639_1: v.iso_639_1,
                    };
                    if (v.site === 'YouTube') {
                        vObj.url = 'https://www.youtube.com/watch?v=' + v.key;
                    } else {
                        vObj.url = v.key;
                    }
                    return vObj;
                });
                resolve(credits);
            }
        });
    }).nodeify(cb);
};

/**
 * Method responsible for get the images (posters and backdrops) for a specific movie id
 *
 * @example
 *
 * client.getImagesOfMovie(122917, function(err, images) {
 *      console.log(images);
 * });
 *
 * @method getImagesOfMovie
 * @public
 * @param {Mixed} query A integer or object with TMDb movie id
 * @param {Function} cb A callback with the movie images
 */

TheMovieDb.prototype.getImagesOfMovie = function(query, cb) {
    var that = this;

    if (typeof query === 'number') {
        query = {
            id: query
        };
    }

    return new P(function(resolve, reject) {
        that.get('movie/' + query.id + '/images', {
            append_to_response: query.appendToResponse,
            include_image_language: query.includeImageLanguage
        }, function(err, res) {
            if (err) {
                reject(new Error(JSON.parse(res.error.text).status_message));
            } else {
                var images = {
                    id: res.body.id
                };
                images.backdrops = _.map(res.body.backdrops, function(i) {
                    return {
                        width: i.width,
                        height: i.height,
                        voteAverage: i.vote_average,
                        votes: i.vote_count,
                        aspectRatio: i.aspect_ratio,
                        iso_639_1: i.iso_639_1,
                        url: that.IMAGE_URL + i.file_path
                    };
                });
                images.posters = _.map(res.body.posters, function(i) {
                    return {
                        width: i.width,
                        height: i.height,
                        voteAverage: i.vote_average,
                        votes: i.vote_count,
                        aspectRatio: i.aspect_ratio,
                        iso_639_1: i.iso_639_1,
                        url: that.IMAGE_URL + i.file_path
                    };
                });
                resolve(images);
            }
        });
    }).nodeify(cb);
};

/**
 * Method responsible for search tv shows
 *
 * @example
 *
 * client.searchTVShows({query: 'The Flash', sortBy: 'popularity.desc', firstAirDate: '2014-10-07'}, function(err, tvshows) {
 *      console.log(tvshows);
 * });
 *
 * @method searchTVShows
 * @public
 * @param {Mixed} query A string or object with the search terms
 * @param {Function} cb A callback with a array of tv shows
 */

TheMovieDb.prototype.searchTVShows = function(query, cb) {
    var that = this;

    if (typeof query === 'string') {
        query = {
            query: query
        };
    }

    return new P(function(resolve, reject) {
        that.get('search/tv', {
            query: query.query,
            sort_by: query.sortBy || 'popularity.desc',
            first_air_date: query.firstAirDate,
            search_type: query.searchType
        }, function(err, res) {
            if (err) {
                reject(err);
            } else {
                var tvshows = _.map(res.body.results, function(t) {
                    return {
                        id: t.id,
                        name: t.name,
                        originalName: t.original_name,
                        firstAirDate: new Date(t.first_air_date),
                        year: new Date(t.first_air_date).getFullYear(),
                        originCountry: t.origin_country,
                        popularity: t.popularity,
                        voteAverage: t.vote_average,
                        votes: t.vote_count,
                        poster: that.IMAGE_URL + t.poster_path,
                        backdrop: that.IMAGE_URL + t.backdrop_path
                    };
                });
                resolve(tvshows);
            }
        });
    }).nodeify(cb);
};

/**
 * Method responsible for get the list of popular tv shows on The TVShow Database. This list refreshes every day
 *
 * @example
 *
 * client.popularTVShows(function(err, tvshows) {
 *      console.log(tvshows);
 * });
 *
 * @method popularTVShows
 * @public
 * @param {Mixed} [query] A object with the query options
 * @param {Function} cb A callback with a array of tv shows
 */

TheMovieDb.prototype.popularTVShows = function(query, cb) {
    var that = this;

    if (!cb) {
        cb = query;
        query = {};
    }

    return new P(function(resolve, reject) {
        that.get('tv/popular', {
            page: query.page,
            sort_by: query.sortBy || 'popularity.desc'
        }, function(err, res) {
            if (err) {
                reject(err);
            } else {
                var tvshows = _.map(res.body.results, function(t) {
                    return {
                        id: t.id,
                        name: t.name,
                        originalName: t.original_name,
                        firstAirDate: new Date(t.first_air_date),
                        year: new Date(t.first_air_date).getFullYear(),
                        originCountry: t.origin_country,
                        popularity: t.popularity,
                        voteAverage: t.vote_average,
                        votes: t.vote_count,
                        poster: that.IMAGE_URL + t.poster_path,
                        backdrop: that.IMAGE_URL + t.backdrop_path
                    };
                });
                resolve(tvshows);
            }
        });
    }).nodeify(cb);
};

/**
 * Method responsible for get the list of TV shows that are currently on the air. This query looks for any TV show that has an episode with an air date in the next 7 days
 *
 * @example
 *
 * client.onTheAirTVShows(function(err, tvshows) {
 *      console.log(tvshows);
 * });
 *
 * @method onTheAirTVShows
 * @public
 * @param {Mixed} [query] A object with the query options
 * @param {Function} cb A callback with a array of tv shows
 */

TheMovieDb.prototype.onTheAirTVShows = function(query, cb) {
    var that = this;

    if (!cb) {
        cb = query;
        query = {};
    }

    return new P(function(resolve, reject) {
        that.get('tv/on_the_air', {
            page: query.page,
            timezone: query.timezone,
            sort_by: query.sortBy || 'popularity.desc'
        }, function(err, res) {
            if (err) {
                reject(err);
            } else {
                var tvshows = _.map(res.body.results, function(t) {
                    return {
                        id: t.id,
                        name: t.name,
                        originalName: t.original_name,
                        firstAirDate: new Date(t.first_air_date),
                        year: new Date(t.first_air_date).getFullYear(),
                        originCountry: t.origin_country,
                        popularity: t.popularity,
                        voteAverage: t.vote_average,
                        votes: t.vote_count,
                        poster: that.IMAGE_URL + t.poster_path,
                        backdrop: that.IMAGE_URL + t.backdrop_path
                    };
                });
                resolve(tvshows);
            }
        });
    }).nodeify(cb);
};

/**
 * Method responsible for get the list of TV shows that air today. Without a specified timezone, this query defaults to EST (Eastern Time UTC-05:00)
 *
 * @example
 *
 * client.airingTodayTVShows(function(err, tvshows) {
 *      console.log(tvshows);
 * });
 *
 * @method airingTodayTVShows
 * @public
 * @param {Mixed} [query] A object with the query options
 * @param {Function} cb A callback with a array of tv shows
 */

TheMovieDb.prototype.airingTodayTVShows = function(query, cb) {
    var that = this;

    if (!cb) {
        cb = query;
        query = {};
    }

    return new P(function(resolve, reject) {
        that.get('tv/airing_today', {
            page: query.page,
            sort_by: query.sortBy || 'popularity.desc'
        }, function(err, res) {
            if (err) {
                reject(err);
            } else {
                var tvshows = _.map(res.body.results, function(t) {
                    return {
                        id: t.id,
                        name: t.name,
                        originalName: t.original_name,
                        firstAirDate: new Date(t.first_air_date),
                        year: new Date(t.first_air_date).getFullYear(),
                        originCountry: t.origin_country,
                        popularity: t.popularity,
                        voteAverage: t.vote_average,
                        votes: t.vote_count,
                        poster: that.IMAGE_URL + t.poster_path,
                        backdrop: that.IMAGE_URL + t.backdrop_path
                    };
                });
                resolve(tvshows);
            }
        });
    }).nodeify(cb);
};

/**
 * Method responsible for get the list of top rated TV shows. By default, this list will only include TV shows that have 2 or more votes. This list refreshes every day
 *
 * @example
 *
 * client.topRatedTVShows(function(err, tvshows) {
 *      console.log(tvshows);
 * });
 *
 * @method topRatedTVShows
 * @public
 * @param {Mixed} [query] A object with the query options
 * @param {Function} cb A callback with a array of tv shows
 */

TheMovieDb.prototype.topRatedTVShows = function(query, cb) {
    var that = this;

    if (!cb) {
        cb = query;
        query = {};
    }

    return new P(function(resolve, reject) {
        that.get('tv/top_rated', {
            page: query.page,
            sort_by: query.sortBy || 'popularity.desc'
        }, function(err, res) {
            if (err) {
                reject(err);
            } else {
                var tvshows = _.map(res.body.results, function(t) {
                    return {
                        id: t.id,
                        name: t.name,
                        originalName: t.original_name,
                        firstAirDate: new Date(t.first_air_date),
                        year: new Date(t.first_air_date).getFullYear(),
                        originCountry: t.origin_country,
                        popularity: t.popularity,
                        voteAverage: t.vote_average,
                        votes: t.vote_count,
                        poster: that.IMAGE_URL + t.poster_path,
                        backdrop: that.IMAGE_URL + t.backdrop_path
                    };
                });
                resolve(tvshows);
            }
        });
    }).nodeify(cb);
};

/**
 * Method responsible for get the basic tv show information for a specific tvshow id
 *
 * @example
 *
 * client.getTVShow(60735, function(err, tvshow) {
 *      console.log(tvshow);
 * });
 *
 * @method getTVShow
 * @public
 * @param {Mixed} query A integer or object with TMDb tvshow id
 * @param {Function} cb A callback with the tv show data
 */

TheMovieDb.prototype.getTVShow = function(query, cb) {
    var that = this;

    if (typeof query === 'number') {
        query = {
            id: query
        };
    }

    return new P(function(resolve, reject) {
        that.get('tv/' + query.id, {
            append_to_response: query.appendToResponse || 'external_ids,credits,videos,images,content_ratings'
        }, function(err, res) {
            if (err) {
                reject(new Error(JSON.parse(res.error.text).status_message));
            } else {
                var tvshow = {
                    id: res.body.id,
                    name: res.body.name,
                    originalName: res.body.original_name,
                    overview: res.body.overview,
                    homepage: res.body.homepage,
                    firstAirDate: new Date(res.body.first_air_date),
                    lastAirDate: new Date(res.body.last_air_date),
                    year: new Date(res.body.first_air_date).getFullYear(),
                    duration: res.body.episode_run_time[0],
                    inProduction: res.body.in_production,
                    numberOfSeasons: res.body.number_of_seasons,
                    numberOfEpisodes: res.body.number_of_episodes,
                    originCountry: res.body.origin_country[0],
                    networks: res.body.networks,
                    popularity: res.body.popularity,
                    voteAverage: res.body.vote_average,
                    votes: res.body.vote_count,
                    status: res.body.status,
                    type: res.body.type,
                    productionCompanies: res.body.production_companies,
                    poster: that.IMAGE_URL + res.body.poster_path,
                    backdrop: that.IMAGE_URL + res.body.backdrop_path,
                    genres: res.body.genres,
                    languages: res.body.languages,
                    originalLanguage: res.body.original_language
                };
                if (res.body.created_by) {
                    tvshow.createdBy = _.map(res.body.created_by, function(c) {
                        return {
                            id: c.id,
                            name: c.name,
                            profilePicture: that.IMAGE_URL + c.profile_path
                        };
                    });
                } else {
                    tvshow.createdBy = null;
                }
                if (res.body.seasons) {
                    tvshow.seasons = _.map(res.body.seasons, function(s) {
                        return {
                            id: s.id,
                            season: s.season_number,
                            episodes: s.episodes_count,
                            airDate: new Date(s.air_date),
                            poster: that.IMAGE_URL + s.poster_path
                        };
                    });
                } else {
                    tvshow.seasons = null;
                }
                if (res.body.external_ids) {
                    tvshow.externalIds = {
                        id: res.body.external_ids.id,
                        imdbId: res.body.external_ids.imdb_id,
                        tvdbId: res.body.external_ids.tvdb_id,
                        tvRageId: res.body.external_ids.tvrage_id,
                        freebaseId: res.body.external_ids.freebase_id,
                        freebaseMid: res.body.external_ids.freebase_mid
                    };
                } else {
                    tvshow.externalIds = null;
                }
                if (res.body.credits) {
                    tvshow.credits = {
                        id: res.body.credits.id
                    };
                    tvshow.credits.cast = _.map(res.body.credits.cast, function(c) {
                        return {
                            id: c.id,
                            castId: c.credit_id,
                            creditId: c.credit_id,
                            character: c.character,
                            name: c.name,
                            order: c.order,
                            profilePicture: that.IMAGE_URL + c.profile_path
                        };
                    });
                    tvshow.credits.crew = _.map(res.body.credits.crew, function(c) {
                        return {
                            id: c.id,
                            creditId: c.credit_id,
                            name: c.name,
                            department: c.department,
                            job: c.job,
                            profilePicture: that.IMAGE_URL + c.profile_path
                        };
                    });
                } else {
                    tvshow.credits = null;
                }
                if (res.body.videos) {
                    tvshow.videos = {};
                    tvshow.videos = _.map(res.body.videos.results, function(v) {
                        var vObj = {
                            id: v.id,
                            name: v.name,
                            size: v.size,
                            iso_639_1: v.iso_639_1,
                        };
                        if (v.site === 'YouTube') {
                            vObj.url = 'https://www.youtube.com/watch?v=' + v.key;
                        } else {
                            vObj.url = v.key;
                        }
                        return vObj;
                    });
                } else {
                    tvshow.videos = null;
                }
                if (res.body.images) {
                    tvshow.images = {};
                    tvshow.images.backdrops = _.map(res.body.images.backdrops, function(i) {
                        return {
                            width: i.width,
                            height: i.height,
                            voteAverage: i.vote_average,
                            votes: i.vote_count,
                            aspectRatio: i.aspect_ratio,
                            iso_639_1: i.iso_639_1,
                            url: that.IMAGE_URL + i.file_path
                        };
                    });
                    tvshow.images.posters = _.map(res.body.images.posters, function(i) {
                        return {
                            width: i.width,
                            height: i.height,
                            voteAverage: i.vote_average,
                            votes: i.vote_count,
                            aspectRatio: i.aspect_ratio,
                            iso_639_1: i.iso_639_1,
                            url: that.IMAGE_URL + i.file_path
                        };
                    });
                } else {
                    tvshow.images = null;
                }
                if (res.body.content_ratings.results.length) {
                    tvshow.rating = res.body.content_ratings.results[0].rating;
                } else {
                    tvshow.rating = null;
                }
                resolve(tvshow);
            }
        });
    }).nodeify(cb);
};

/**
 * Method responsible for get the primary information about a season of the show by its season number
 *
 * @example
 *
 * client.getSeasonOfTVShow(60735, 1, function(err, season) {
 *      console.log(season);
 * });
 *
 * @method getSeasonOfTVShow
 * @public
 * @param {Mixed} query A integer or object with TMDb tvshow id
 * @param {Number} season A integer of the season number
 * @param {Function} cb A callback with the tv show data
 */

TheMovieDb.prototype.getSeasonOfTVShow = function(query, season, cb) {
    var that = this;

    if (typeof query === 'number') {
        query = {
            id: query
        };
    }

    return new P(function(resolve, reject) {
        that.get('tv/' + query.id + '/season/' + season, {
            append_to_response: query.appendToResponse
        }, function(err, res) {
            if (err) {
                reject(new Error(JSON.parse(res.error.text).status_message));
            } else {
                var tvshow = {
                    id: res.body.id,
                    name: res.body.name,
                    overview: res.body.overview,
                    airDate: new Date(res.body.air_date),
                    season: res.body.season_number,
                    poster: that.IMAGE_URL + res.body.poster_path
                };
                tvshow.episodes = _.map(res.body.episodes, function(s) {
                    var seasonObj = {
                        id: s.id,
                        name: s.name,
                        overview: s.overview,
                        airDate: new Date(s.air_date),
                        season: s.season_number,
                        episode: s.episode_number,
                        productionCode: s.production_code,
                        voteAverage: s.vote_average,
                        votes: s.vote_count,
                        still: that.IMAGE_URL + s.still_path
                    };
                    if (s.guest_stars) {
                        seasonObj.guestStars = _.map(s.guest_stars, function(g) {
                            return {
                                id: g.id,
                                creditId: g.credit_id,
                                character: g.character,
                                name: g.name,
                                order: g.order,
                                profilePicture: that.IMAGE_URL + g.profile_path
                            };
                        });
                    } else {
                        seasonObj.guestStars = null;
                    }
                    if (s.crew) {
                        seasonObj.crew = _.map(s.crew, function(c) {
                            return {
                                id: c.id,
                                creditId: c.credit_id,
                                name: c.name,
                                department: c.department,
                                job: c.job,
                                profilePicture: that.IMAGE_URL + c.profile_path
                            };
                        });
                    } else {
                        seasonObj.crew = null;
                    }
                    return seasonObj;
                });
                resolve(tvshow);
            }
        });
    }).nodeify(cb);
};

/**
 * Method responsible for get the primary information about a episode of the show by combination of a season and episode number
 *
 * @example
 *
 * client.getEpisodeOfTVShow(60735, 1, 1, function(err, episode) {
 *      console.log(episode);
 * });
 *
 * @method getEpisodeOfTVShow
 * @public
 * @param {Mixed} query A integer or object with TMDb tvshow id
 * @param {Number} season A integer of the season number
 * @param {Number} episode A integer of the episode number
 * @param {Function} cb A callback with the tv show data
 */

TheMovieDb.prototype.getEpisodeOfTVShow = function(query, season, episode, cb) {
    var that = this;

    if (typeof query === 'number') {
        query = {
            id: query
        };
    }

    return new P(function(resolve, reject) {
        that.get('tv/' + query.id + '/season/' + season + '/episode/' + episode, {
            append_to_response: query.appendToResponse
        }, function(err, res) {
            if (err) {
                reject(new Error(JSON.parse(res.error.text).status_message));
            } else {
                var tvshow = {
                    id: res.body.id,
                    name: res.body.name,
                    overview: res.body.overview,
                    airDate: new Date(res.body.air_date),
                    season: res.body.season_number,
                    episode: res.body.episode_number,
                    productionCode: res.body.production_code,
                    voteAverage: res.body.vote_average,
                    votes: res.body.vote_count,
                    still: that.IMAGE_URL + res.body.still_path
                };
                if (res.body.guest_stars) {
                    tvshow.guestStars = _.map(res.body.guest_stars, function(g) {
                        return {
                            id: g.id,
                            creditId: g.credit_id,
                            character: g.character,
                            name: g.name,
                            order: g.order,
                            profilePicture: that.IMAGE_URL + g.profile_path
                        };
                    });
                } else {
                    tvshow.guestStars = null;
                }
                if (res.body.crew) {
                    tvshow.crew = _.map(res.body.crew, function(c) {
                        return {
                            id: c.id,
                            creditId: c.credit_id,
                            name: c.name,
                            department: c.department,
                            job: c.job,
                            profilePicture: that.IMAGE_URL + c.profile_path
                        };
                    });
                } else {
                    tvshow.crew = null;
                }
                resolve(tvshow);
            }
        });
    }).nodeify(cb);
};

/**
 * Method responsible for get the similar tv shows for a specific tvshow id
 *
 * @example
 *
 * client.getSimilarTVShows(60735, function(err, tvshows) {
 *      console.log(tvshows);
 * });
 *
 * @method getSimilarTVShows
 * @public
 * @param {Mixed} query A integer or object with TMDb tvshow id
 * @param {Function} cb A callback with a array of tv shows
 */

TheMovieDb.prototype.getSimilarTVShows = function(query, cb) {
    var that = this;

    if (typeof query === 'number') {
        query = {
            id: query
        };
    }

    return new P(function(resolve, reject) {
        that.get('tv/' + query.id + '/similar', {
            page: query.page,
            sort_by: query.sortBy || 'popularity.desc',
            append_to_response: query.appendToResponse
        }, function(err, res) {
            if (err) {
                reject(new Error(JSON.parse(res.error.text).status_message));
            } else {
                var tvshows = _.map(res.body.results, function(t) {
                    return {
                        id: t.id,
                        name: t.name,
                        originalName: t.original_name,
                        firstAirDate: new Date(t.first_air_date),
                        year: new Date(t.first_air_date).getFullYear(),
                        originCountry: t.origin_country,
                        popularity: t.popularity,
                        voteAverage: t.vote_average,
                        votes: t.vote_count,
                        poster: that.IMAGE_URL + t.poster_path,
                        backdrop: that.IMAGE_URL + t.backdrop_path
                    };
                });
                resolve(tvshows);
            }
        });
    }).nodeify(cb);
};

/**
 * Method responsible for get the cast and crew information for a specific tvshow id
 *
 * @example
 *
 * client.getCreditsOfTVShow(60735, function(err, credits) {
 *      console.log(credits);
 * });
 *
 * @method getCreditsOfTVShow
 * @public
 * @param {Mixed} query A integer or object with TMDb tvshow id
 * @param {Function} cb A callback with the tv show credits
 */

TheMovieDb.prototype.getCreditsOfTVShow = function(query, cb) {
    var that = this;

    if (typeof query === 'number') {
        query = {
            id: query
        };
    }

    return new P(function(resolve, reject) {
        that.get('tv/' + query.id + '/credits', {
            append_to_response: query.appendToResponse
        }, function(err, res) {
            if (err) {
                reject(new Error(JSON.parse(res.error.text).status_message));
            } else {
                var credits = {
                    id: res.body.id
                };
                credits.cast = _.map(res.body.cast, function(c) {
                    return {
                        id: c.id,
                        castId: c.cast_id,
                        creditId: c.credit_id,
                        character: c.character,
                        name: c.name,
                        order: c.order,
                        profilePicture: that.IMAGE_URL + c.profile_path
                    };
                });
                credits.crew = _.map(res.body.crew, function(c) {
                    return {
                        id: c.id,
                        creditId: c.credit_id,
                        name: c.name,
                        department: c.department,
                        job: c.job,
                        profilePicture: that.IMAGE_URL + c.profile_path
                    };
                });
                resolve(credits);
            }
        });
    }).nodeify(cb);
};

/**
 * Method responsible for get the videos for a specific tvshow id
 *
 * @example
 *
 * client.getVideosOfTVShow(60735, function(err, videos) {
 *      console.log(videos);
 * });
 *
 * @method getVideosOfTVShow
 * @public
 * @param {Mixed} query A integer or object with TMDb tvshow id
 * @param {Function} cb A callback with the tv show videos
 */

TheMovieDb.prototype.getVideosOfTVShow = function(query, cb) {
    var that = this;

    if (typeof query === 'number') {
        query = {
            id: query
        };
    }

    return new P(function(resolve, reject) {
        that.get('tv/' + query.id + '/videos', {
            append_to_response: query.appendToResponse
        }, function(err, res) {
            if (err) {
                reject(new Error(JSON.parse(res.error.text).status_message));
            } else {
                var credits = {
                        id: res.body.id
                    },
                    vObj;
                credits.videos = _.map(res.body.results, function(v) {
                    vObj = {
                        id: v.id,
                        name: v.name,
                        size: v.size,
                        iso_639_1: v.iso_639_1,
                    };
                    if (v.site === 'YouTube') {
                        vObj.url = 'https://www.youtube.com/watch?v=' + v.key;
                    } else {
                        vObj.url = v.key;
                    }
                    return vObj;
                });
                resolve(credits);
            }
        });
    }).nodeify(cb);
};

/**
 * Method responsible for get the images (posters and backdrops) for a specific tvshow id
 *
 * @example
 *
 * client.getImagesOfTVShow(60735, function(err, images) {
 *      console.log(images);
 * });
 *
 * @method getImagesOfTVShow
 * @public
 * @param {Mixed} query A integer or object with TMDb tvshow id
 * @param {Function} cb A callback with the tv show images
 */

TheMovieDb.prototype.getImagesOfTVShow = function(query, cb) {
    var that = this;

    if (typeof query === 'number') {
        query = {
            id: query
        };
    }

    return new P(function(resolve, reject) {
        that.get('tv/' + query.id + '/images', {
            append_to_response: query.appendToResponse,
            include_image_language: query.includeImageLanguage
        }, function(err, res) {
            if (err) {
                reject(new Error(JSON.parse(res.error.text).status_message));
            } else {
                var images = {
                    id: res.body.id
                };
                images.backdrops = _.map(res.body.backdrops, function(i) {
                    return {
                        width: i.width,
                        height: i.height,
                        voteAverage: i.vote_average,
                        votes: i.vote_count,
                        aspectRatio: i.aspect_ratio,
                        iso_639_1: i.iso_639_1,
                        url: that.IMAGE_URL + i.file_path
                    };
                });
                images.posters = _.map(res.body.posters, function(i) {
                    return {
                        width: i.width,
                        height: i.height,
                        voteAverage: i.vote_average,
                        votes: i.vote_count,
                        aspectRatio: i.aspect_ratio,
                        iso_639_1: i.iso_639_1,
                        url: that.IMAGE_URL + i.file_path
                    };
                });
                resolve(images);
            }
        });
    }).nodeify(cb);
};
