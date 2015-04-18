/*
 * themoviedb
 * https://github.com/chrisenytc/themoviedb
 *
 * Copyright (c) 2015, Christopher EnyTC
 * Licensed under the BSD license.
 */

'use strict';

var chai = require('chai'),
    expect = chai.expect;

chai.should();

var TheMovieDb = require('../lib/themoviedb.js'),
    themoviedb = new TheMovieDb(process.env.TMDB_API_KEY);

describe('TheMovieDb movies', function() {
    describe('#searchMovies()', function() {
        it('should return a empty array using promise', function(done) {
            themoviedb.searchMovies('Testing this action')
                .then(function(data) {
                    expect(data).to.exist; // jshint ignore:line
                    expect(data).to.be.empty; // jshint ignore:line
                    expect(data).to.be.an.instanceof(Array);
                    done();
                }).catch(function(err) {
                    if (err) {
                        return done(err);
                    }
                    expect(err).to.not.exist; // jshint ignore:line
                    expect(err).to.be.an.instanceof(Error);
                    done();
                });
        });
        it('should return a empty array using callback', function(done) {
            themoviedb.searchMovies('Testing this action', function(err, data) {
                if (err) {
                    return done(err);
                }
                expect(err).to.not.exist; // jshint ignore:line
                expect(data).to.exist; // jshint ignore:line
                expect(data).to.be.empty; // jshint ignore:line
                expect(data).to.be.an.instanceof(Array);
                done();
            });
        });
        it('should return a array of movies using promise', function(done) {
            themoviedb.searchMovies('The Theory of Everything')
                .then(function(data) {
                    expect(data).to.exist; // jshint ignore:line
                    expect(data).to.not.empty; // jshint ignore:line
                    expect(data).to.be.an.instanceof(Array);
                    expect(data[0]).to.have.property('id');
                    expect(data[0]).to.have.property('title');
                    expect(data[0]).to.have.property('originalTitle');
                    expect(data[0]).to.have.property('release');
                    expect(data[0]).to.have.property('year');
                    expect(data[0]).to.have.property('popularity');
                    expect(data[0]).to.have.property('voteAverage');
                    expect(data[0]).to.have.property('votes');
                    expect(data[0]).to.have.property('isAdult');
                    expect(data[0]).to.have.property('video');
                    expect(data[0]).to.have.property('poster');
                    expect(data[0]).to.have.property('backdrop');
                    done();
                }).catch(function(err) {
                    if (err) {
                        return done(err);
                    }
                    expect(err).to.not.exist; // jshint ignore:line
                    expect(err).to.be.an.instanceof(Error);
                    done();
                });
        });
        it('should return a array of movies using callback', function(done) {
            themoviedb.searchMovies('The Theory of Everything', function(err, data) {
                if (err) {
                    return done(err);
                }
                expect(err).to.not.exist; // jshint ignore:line
                expect(data).to.exist; // jshint ignore:line
                expect(data).to.not.empty; // jshint ignore:line
                expect(data).to.be.an.instanceof(Array);
                expect(data[0]).to.have.property('id');
                expect(data[0]).to.have.property('title');
                expect(data[0]).to.have.property('originalTitle');
                expect(data[0]).to.have.property('release');
                expect(data[0]).to.have.property('year');
                expect(data[0]).to.have.property('popularity');
                expect(data[0]).to.have.property('voteAverage');
                expect(data[0]).to.have.property('votes');
                expect(data[0]).to.have.property('isAdult');
                expect(data[0]).to.have.property('video');
                expect(data[0]).to.have.property('poster');
                expect(data[0]).to.have.property('backdrop');
                done();
            });
        });
    });
    describe('#popularMovies()', function() {
        it('should return a array of popular movies using promise', function(done) {
            themoviedb.popularMovies()
                .then(function(data) {
                    expect(data).to.exist; // jshint ignore:line
                    expect(data).to.not.empty; // jshint ignore:line
                    expect(data).to.be.an.instanceof(Array);
                    expect(data[0]).to.have.property('id');
                    expect(data[0]).to.have.property('title');
                    expect(data[0]).to.have.property('originalTitle');
                    expect(data[0]).to.have.property('release');
                    expect(data[0]).to.have.property('year');
                    expect(data[0]).to.have.property('popularity');
                    expect(data[0]).to.have.property('voteAverage');
                    expect(data[0]).to.have.property('votes');
                    expect(data[0]).to.have.property('isAdult');
                    expect(data[0]).to.have.property('video');
                    expect(data[0]).to.have.property('poster');
                    expect(data[0]).to.have.property('backdrop');
                    done();
                }).catch(function(err) {
                    if (err) {
                        return done(err);
                    }
                    expect(err).to.not.exist; // jshint ignore:line
                    expect(err).to.be.an.instanceof(Error);
                    done();
                });
        });
        it('should return a array of popular movies using callback', function(done) {
            themoviedb.popularMovies(function(err, data) {
                if (err) {
                    return done(err);
                }
                expect(err).to.not.exist; // jshint ignore:line
                expect(data).to.exist; // jshint ignore:line
                expect(data).to.not.empty; // jshint ignore:line
                expect(data).to.be.an.instanceof(Array);
                expect(data[0]).to.have.property('id');
                expect(data[0]).to.have.property('title');
                expect(data[0]).to.have.property('originalTitle');
                expect(data[0]).to.have.property('release');
                expect(data[0]).to.have.property('year');
                expect(data[0]).to.have.property('popularity');
                expect(data[0]).to.have.property('voteAverage');
                expect(data[0]).to.have.property('votes');
                expect(data[0]).to.have.property('isAdult');
                expect(data[0]).to.have.property('video');
                expect(data[0]).to.have.property('poster');
                expect(data[0]).to.have.property('backdrop');
                done();
            });
        });
    });
    describe('#topRatedMovies()', function() {
        it('should return a array of top rated movies using promise', function(done) {
            themoviedb.topRatedMovies()
                .then(function(data) {
                    expect(data).to.exist; // jshint ignore:line
                    expect(data).to.not.empty; // jshint ignore:line
                    expect(data).to.be.an.instanceof(Array);
                    expect(data[0]).to.have.property('id');
                    expect(data[0]).to.have.property('title');
                    expect(data[0]).to.have.property('originalTitle');
                    expect(data[0]).to.have.property('release');
                    expect(data[0]).to.have.property('year');
                    expect(data[0]).to.have.property('popularity');
                    expect(data[0]).to.have.property('voteAverage');
                    expect(data[0]).to.have.property('votes');
                    expect(data[0]).to.have.property('isAdult');
                    expect(data[0]).to.have.property('video');
                    expect(data[0]).to.have.property('poster');
                    expect(data[0]).to.have.property('backdrop');
                    done();
                }).catch(function(err) {
                    if (err) {
                        return done(err);
                    }
                    expect(err).to.not.exist; // jshint ignore:line
                    expect(err).to.be.an.instanceof(Error);
                    done();
                });
        });
        it('should return a array of top rated movies using callback', function(done) {
            themoviedb.topRatedMovies(function(err, data) {
                if (err) {
                    return done(err);
                }
                expect(err).to.not.exist; // jshint ignore:line
                expect(data).to.exist; // jshint ignore:line
                expect(data).to.not.empty; // jshint ignore:line
                expect(data).to.be.an.instanceof(Array);
                expect(data[0]).to.have.property('id');
                expect(data[0]).to.have.property('title');
                expect(data[0]).to.have.property('originalTitle');
                expect(data[0]).to.have.property('release');
                expect(data[0]).to.have.property('year');
                expect(data[0]).to.have.property('popularity');
                expect(data[0]).to.have.property('voteAverage');
                expect(data[0]).to.have.property('votes');
                expect(data[0]).to.have.property('isAdult');
                expect(data[0]).to.have.property('video');
                expect(data[0]).to.have.property('poster');
                expect(data[0]).to.have.property('backdrop');
                done();
            });
        });
    });
    describe('#getMovie()', function() {
        it('should return a not found error using promise', function(done) {
            themoviedb.getMovie(0)
                .then(function(data) {
                    expect(data).to.not.exist; // jshint ignore:line
                    done();
                }).catch(function(err) {
                    expect(err).to.exist; // jshint ignore:line
                    expect(err).to.be.an.instanceof(Error);
                    done();
                });
        });
        it('should return a not found error using callback', function(done) {
            themoviedb.getMovie(0, function(err, data) {
                expect(err).to.exist; // jshint ignore:line
                expect(data).to.not.exist; // jshint ignore:line
                expect(err).to.be.an.instanceof(Error);
                done();
            });
        });
        it('should return the movie data using promise', function(done) {
            themoviedb.getMovie(122917)
                .then(function(data) {
                    expect(data).to.exist; // jshint ignore:line
                    expect(data).to.not.empty; // jshint ignore:line
                    expect(data).to.be.an('object');
                    expect(data).to.have.property('id');
                    expect(data).to.have.property('imdbId');
                    expect(data).to.have.property('title');
                    expect(data).to.have.property('originalTitle');
                    expect(data).to.have.property('description');
                    expect(data).to.have.property('overview');
                    expect(data).to.have.property('release');
                    expect(data).to.have.property('year');
                    expect(data).to.have.property('duration');
                    expect(data).to.have.property('popularity');
                    expect(data).to.have.property('voteAverage');
                    expect(data).to.have.property('votes');
                    expect(data).to.have.property('isAdult');
                    expect(data).to.have.property('video');
                    expect(data).to.have.property('budget');
                    expect(data).to.have.property('revenue');
                    expect(data).to.have.property('status');
                    expect(data).to.have.property('poster');
                    expect(data).to.have.property('backdrop');
                    expect(data).to.have.property('genres');
                    expect(data).to.have.property('spokenLanguages');
                    expect(data).to.have.property('productionCompanies');
                    expect(data).to.have.property('productionCountries');
                    expect(data).to.have.property('belongsToCollection');
                    expect(data).to.have.property('credits');
                    expect(data.credits).to.have.property('cast');
                    expect(data.credits).to.have.property('crew');
                    expect(data).to.have.property('videos');
                    expect(data).to.have.property('images');
                    expect(data.images).to.have.property('backdrops');
                    expect(data.images).to.have.property('posters');
                    expect(data).to.have.property('rating');
                    expect(data.credits).to.be.an('object');
                    expect(data.credits.cast).to.be.an.instanceof(Array);
                    expect(data.credits.crew).to.be.an.instanceof(Array);
                    expect(data.videos).to.be.an.instanceof(Array);
                    expect(data.images).to.be.an('object');
                    expect(data.images.backdrops).to.be.an.instanceof(Array);
                    expect(data.images.posters).to.be.an.instanceof(Array);
                    expect(data.rating).to.be.a('string');
                    done();
                }).catch(function(err) {
                    if (err) {
                        return done(err);
                    }
                    expect(err).to.not.exist; // jshint ignore:line
                    expect(err).to.be.an.instanceof(Error);
                    done();
                });
        });
        it('should return the movie data using callback', function(done) {
            themoviedb.getMovie(122917, function(err, data) {
                expect(err).to.not.exist; // jshint ignore:line
                expect(data).to.exist; // jshint ignore:line
                expect(data).to.not.empty; // jshint ignore:line
                expect(data).to.be.an('object');
                expect(data).to.have.property('id');
                expect(data).to.have.property('imdbId');
                expect(data).to.have.property('title');
                expect(data).to.have.property('originalTitle');
                expect(data).to.have.property('description');
                expect(data).to.have.property('overview');
                expect(data).to.have.property('release');
                expect(data).to.have.property('year');
                expect(data).to.have.property('duration');
                expect(data).to.have.property('popularity');
                expect(data).to.have.property('voteAverage');
                expect(data).to.have.property('votes');
                expect(data).to.have.property('isAdult');
                expect(data).to.have.property('video');
                expect(data).to.have.property('budget');
                expect(data).to.have.property('revenue');
                expect(data).to.have.property('status');
                expect(data).to.have.property('poster');
                expect(data).to.have.property('backdrop');
                expect(data).to.have.property('genres');
                expect(data).to.have.property('spokenLanguages');
                expect(data).to.have.property('productionCompanies');
                expect(data).to.have.property('productionCountries');
                expect(data).to.have.property('belongsToCollection');
                expect(data).to.have.property('credits');
                expect(data.credits).to.have.property('cast');
                expect(data.credits).to.have.property('crew');
                expect(data).to.have.property('videos');
                expect(data).to.have.property('images');
                expect(data.images).to.have.property('backdrops');
                expect(data.images).to.have.property('posters');
                expect(data).to.have.property('rating');
                expect(data.credits).to.be.an('object');
                expect(data.credits.cast).to.be.an.instanceof(Array);
                expect(data.credits.crew).to.be.an.instanceof(Array);
                expect(data.videos).to.be.an.instanceof(Array);
                expect(data.images).to.be.an('object');
                expect(data.images.backdrops).to.be.an.instanceof(Array);
                expect(data.images.posters).to.be.an.instanceof(Array);
                expect(data.rating).to.be.a('string');
                done();
            });
        });
    });
    describe('#getSimilarMovies()', function() {
        it('should return a empty array using promise', function(done) {
            themoviedb.getSimilarMovies(0)
                .then(function(data) {
                    expect(data).to.not.exist; // jshint ignore:line
                    done();
                }).catch(function(err) {
                    expect(err).to.exist; // jshint ignore:line
                    expect(err).to.be.an.instanceof(Error);
                    done();
                });
        });
        it('should return a empty array using callback', function(done) {
            themoviedb.getSimilarMovies(0, function(err, data) {
                expect(err).to.exist; // jshint ignore:line
                expect(data).to.not.exist; // jshint ignore:line
                expect(err).to.be.an.instanceof(Error);
                done();
            });
        });
        it('should return a array of similar movies using promise', function(done) {
            themoviedb.getSimilarMovies(122917)
                .then(function(data) {
                    expect(data).to.exist; // jshint ignore:line
                    expect(data).to.not.empty; // jshint ignore:line
                    expect(data).to.be.an.instanceof(Array);
                    expect(data[0]).to.have.property('id');
                    expect(data[0]).to.have.property('title');
                    expect(data[0]).to.have.property('originalTitle');
                    expect(data[0]).to.have.property('release');
                    expect(data[0]).to.have.property('year');
                    expect(data[0]).to.have.property('popularity');
                    expect(data[0]).to.have.property('voteAverage');
                    expect(data[0]).to.have.property('votes');
                    expect(data[0]).to.have.property('isAdult');
                    expect(data[0]).to.have.property('video');
                    expect(data[0]).to.have.property('poster');
                    expect(data[0]).to.have.property('backdrop');
                    done();
                }).catch(function(err) {
                    if (err) {
                        return done(err);
                    }
                    expect(err).to.not.exist; // jshint ignore:line
                    expect(err).to.be.an.instanceof(Error);
                    done();
                });
        });
        it('should return a array of similar movies using callback', function(done) {
            themoviedb.getSimilarMovies(122917, function(err, data) {
                if (err) {
                    return done(err);
                }
                expect(err).to.not.exist; // jshint ignore:line
                expect(data).to.exist; // jshint ignore:line
                expect(data).to.not.empty; // jshint ignore:line
                expect(data).to.be.an.instanceof(Array);
                expect(data[0]).to.have.property('id');
                expect(data[0]).to.have.property('title');
                expect(data[0]).to.have.property('originalTitle');
                expect(data[0]).to.have.property('release');
                expect(data[0]).to.have.property('year');
                expect(data[0]).to.have.property('popularity');
                expect(data[0]).to.have.property('voteAverage');
                expect(data[0]).to.have.property('votes');
                expect(data[0]).to.have.property('isAdult');
                expect(data[0]).to.have.property('video');
                expect(data[0]).to.have.property('poster');
                expect(data[0]).to.have.property('backdrop');
                done();
            });
        });
    });
    describe('#getCreditsOfMovie()', function() {
        it('should return a not found error using promise', function(done) {
            themoviedb.getCreditsOfMovie(0)
                .then(function(data) {
                    expect(data).to.not.exist; // jshint ignore:line
                    done();
                }).catch(function(err) {
                    expect(err).to.exist; // jshint ignore:line
                    expect(err).to.be.an.instanceof(Error);
                    done();
                });
        });
        it('should return a not found error using callback', function(done) {
            themoviedb.getCreditsOfMovie(0, function(err, data) {
                expect(err).to.exist; // jshint ignore:line
                expect(data).to.not.exist; // jshint ignore:line
                expect(err).to.be.an.instanceof(Error);
                done();
            });
        });
        it('should return the movie credits cast using promise', function(done) {
            themoviedb.getCreditsOfMovie(122917)
                .then(function(data) {
                    expect(data).to.exist; // jshint ignore:line
                    expect(data).to.not.empty; // jshint ignore:line
                    expect(data).to.be.an('object');
                    expect(data.cast).to.be.an.instanceof(Array);
                    expect(data.cast[0]).to.have.property('id');
                    expect(data.cast[0]).to.have.property('castId');
                    expect(data.cast[0]).to.have.property('creditId');
                    expect(data.cast[0]).to.have.property('character');
                    expect(data.cast[0]).to.have.property('name');
                    expect(data.cast[0]).to.have.property('order');
                    expect(data.cast[0]).to.have.property('profilePicture');
                    done();
                }).catch(function(err) {
                    if (err) {
                        return done(err);
                    }
                    expect(err).to.not.exist; // jshint ignore:line
                    expect(err).to.be.an.instanceof(Error);
                    done();
                });
        });
        it('should return the movie credits cast using callback', function(done) {
            themoviedb.getCreditsOfMovie(122917, function(err, data) {
                expect(err).to.not.exist; // jshint ignore:line
                expect(data).to.exist; // jshint ignore:line
                expect(data).to.be.an('object');
                expect(data.cast).to.be.an.instanceof(Array);
                expect(data.cast[0]).to.not.empty; // jshint ignore:line
                expect(data.cast[0]).to.have.property('id');
                expect(data.cast[0]).to.have.property('castId');
                expect(data.cast[0]).to.have.property('creditId');
                expect(data.cast[0]).to.have.property('character');
                expect(data.cast[0]).to.have.property('name');
                expect(data.cast[0]).to.have.property('order');
                expect(data.cast[0]).to.have.property('profilePicture');
                done();
            });
        });
        it('should return the movie credits crew using promise', function(done) {
            themoviedb.getCreditsOfMovie(122917)
                .then(function(data) {
                    expect(data).to.exist; // jshint ignore:line
                    expect(data).to.not.empty; // jshint ignore:line
                    expect(data).to.be.an('object');
                    expect(data.crew).to.be.an.instanceof(Array);
                    expect(data.crew[0]).to.have.property('id');
                    expect(data.crew[0]).to.have.property('creditId');
                    expect(data.crew[0]).to.have.property('name');
                    expect(data.crew[0]).to.have.property('department');
                    expect(data.crew[0]).to.have.property('job');
                    expect(data.crew[0]).to.have.property('profilePicture');
                    done();
                }).catch(function(err) {
                    if (err) {
                        return done(err);
                    }
                    expect(err).to.not.exist; // jshint ignore:line
                    expect(err).to.be.an.instanceof(Error);
                    done();
                });
        });
        it('should return the movie credits crew using callback', function(done) {
            themoviedb.getCreditsOfMovie(122917, function(err, data) {
                expect(err).to.not.exist; // jshint ignore:line
                expect(data).to.exist; // jshint ignore:line
                expect(data).to.be.an('object');
                expect(data.crew).to.be.an.instanceof(Array);
                expect(data.crew[0]).to.not.empty; // jshint ignore:line
                expect(data.crew[0]).to.have.property('id');
                expect(data.crew[0]).to.have.property('creditId');
                expect(data.crew[0]).to.have.property('name');
                expect(data.crew[0]).to.have.property('department');
                expect(data.crew[0]).to.have.property('job');
                expect(data.crew[0]).to.have.property('profilePicture');
                done();
            });
        });
    });
    describe('#getVideosOfMovie()', function() {
        it('should return a not found error using promise', function(done) {
            themoviedb.getVideosOfMovie(0)
                .then(function(data) {
                    expect(data).to.not.exist; // jshint ignore:line
                    done();
                }).catch(function(err) {
                    expect(err).to.exist; // jshint ignore:line
                    expect(err).to.be.an.instanceof(Error);
                    done();
                });
        });
        it('should return a not found error using callback', function(done) {
            themoviedb.getVideosOfMovie(0, function(err, data) {
                expect(err).to.exist; // jshint ignore:line
                expect(data).to.not.exist; // jshint ignore:line
                expect(err).to.be.an.instanceof(Error);
                done();
            });
        });
        it('should return the movie videos using promise', function(done) {
            themoviedb.getVideosOfMovie(122917)
                .then(function(data) {
                    expect(data).to.exist; // jshint ignore:line
                    expect(data).to.not.empty; // jshint ignore:line
                    expect(data).to.be.an('object');
                    expect(data.videos).to.be.an.instanceof(Array);
                    expect(data.videos[0]).to.not.empty; // jshint ignore:line
                    expect(data.videos[0]).to.have.property('id');
                    expect(data.videos[0]).to.have.property('name');
                    expect(data.videos[0]).to.have.property('size');
                    expect(data.videos[0]).to.have.property('iso_639_1');
                    expect(data.videos[0]).to.have.property('url');
                    done();
                }).catch(function(err) {
                    if (err) {
                        return done(err);
                    }
                    expect(err).to.not.exist; // jshint ignore:line
                    expect(err).to.be.an.instanceof(Error);
                    done();
                });
        });
        it('should return the movie videos using callback', function(done) {
            themoviedb.getVideosOfMovie(122917, function(err, data) {
                expect(err).to.not.exist; // jshint ignore:line
                expect(data).to.exist; // jshint ignore:line
                expect(data).to.be.an('object');
                expect(data.videos).to.be.an.instanceof(Array);
                expect(data.videos[0]).to.not.empty; // jshint ignore:line
                expect(data.videos[0]).to.have.property('id');
                expect(data.videos[0]).to.have.property('name');
                expect(data.videos[0]).to.have.property('size');
                expect(data.videos[0]).to.have.property('iso_639_1');
                expect(data.videos[0]).to.have.property('url');
                done();
            });
        });
    });
    describe('#getImagesOfMovie()', function() {
        it('should return a not found error using promise', function(done) {
            themoviedb.getImagesOfMovie(0)
                .then(function(data) {
                    expect(data).to.not.exist; // jshint ignore:line
                    done();
                }).catch(function(err) {
                    expect(err).to.exist; // jshint ignore:line
                    expect(err).to.be.an.instanceof(Error);
                    done();
                });
        });
        it('should return a not found error using callback', function(done) {
            themoviedb.getImagesOfMovie(0, function(err, data) {
                expect(err).to.exist; // jshint ignore:line
                expect(data).to.not.exist; // jshint ignore:line
                expect(err).to.be.an.instanceof(Error);
                done();
            });
        });
        it('should return the movie images backdrops using promise', function(done) {
            themoviedb.getImagesOfMovie(122917)
                .then(function(data) {
                    expect(data).to.exist; // jshint ignore:line
                    expect(data).to.not.empty; // jshint ignore:line
                    expect(data).to.be.an('object');
                    expect(data.backdrops).to.be.an.instanceof(Array);
                    expect(data.backdrops[0]).to.have.property('width');
                    expect(data.backdrops[0]).to.have.property('height');
                    expect(data.backdrops[0]).to.have.property('voteAverage');
                    expect(data.backdrops[0]).to.have.property('votes');
                    expect(data.backdrops[0]).to.have.property('aspectRatio');
                    expect(data.backdrops[0]).to.have.property('iso_639_1');
                    expect(data.backdrops[0]).to.have.property('url');
                    done();
                }).catch(function(err) {
                    if (err) {
                        return done(err);
                    }
                    expect(err).to.not.exist; // jshint ignore:line
                    expect(err).to.be.an.instanceof(Error);
                    done();
                });
        });
        it('should return the movie images backdrops using callback', function(done) {
            themoviedb.getImagesOfMovie(122917, function(err, data) {
                expect(err).to.not.exist; // jshint ignore:line
                expect(data).to.exist; // jshint ignore:line
                expect(data).to.not.empty; // jshint ignore:line
                expect(data).to.be.an('object');
                expect(data.backdrops).to.be.an.instanceof(Array);
                expect(data.backdrops[0]).to.have.property('width');
                expect(data.backdrops[0]).to.have.property('height');
                expect(data.backdrops[0]).to.have.property('voteAverage');
                expect(data.backdrops[0]).to.have.property('votes');
                expect(data.backdrops[0]).to.have.property('aspectRatio');
                expect(data.backdrops[0]).to.have.property('iso_639_1');
                expect(data.backdrops[0]).to.have.property('url');
                done();
            });
        });
        it('should return the movie images posters using promise', function(done) {
            themoviedb.getImagesOfMovie(122917)
                .then(function(data) {
                    expect(data).to.exist; // jshint ignore:line
                    expect(data).to.not.empty; // jshint ignore:line
                    expect(data).to.be.an('object');
                    expect(data.posters).to.be.an.instanceof(Array);
                    expect(data.posters[0]).to.have.property('width');
                    expect(data.posters[0]).to.have.property('height');
                    expect(data.posters[0]).to.have.property('voteAverage');
                    expect(data.posters[0]).to.have.property('votes');
                    expect(data.posters[0]).to.have.property('aspectRatio');
                    expect(data.posters[0]).to.have.property('iso_639_1');
                    expect(data.posters[0]).to.have.property('url');
                    done();
                }).catch(function(err) {
                    if (err) {
                        return done(err);
                    }
                    expect(err).to.not.exist; // jshint ignore:line
                    expect(err).to.be.an.instanceof(Error);
                    done();
                });
        });
        it('should return the movie images posters using callback', function(done) {
            themoviedb.getImagesOfMovie(122917, function(err, data) {
                expect(err).to.not.exist; // jshint ignore:line
                expect(data).to.exist; // jshint ignore:line
                expect(data).to.be.an('object');
                expect(data.posters).to.be.an.instanceof(Array);
                expect(data.posters[0]).to.not.empty; // jshint ignore:line
                expect(data.posters[0]).to.have.property('width');
                expect(data.posters[0]).to.have.property('height');
                expect(data.posters[0]).to.have.property('voteAverage');
                expect(data.posters[0]).to.have.property('votes');
                expect(data.posters[0]).to.have.property('aspectRatio');
                expect(data.posters[0]).to.have.property('iso_639_1');
                expect(data.posters[0]).to.have.property('url');
                done();
            });
        });
    });
});
