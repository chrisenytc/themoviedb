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

describe('TheMovieDb tv shows', function() {
    describe('#searchTVShows()', function() {
        it('should return a empty array using promise', function(done) {
            themoviedb.searchTVShows('Testing this action')
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
            themoviedb.searchTVShows('Testing this action', function(err, data) {
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
        it('should return a array of tv shows using promise', function(done) {
            themoviedb.searchTVShows('The Flash')
                .then(function(data) {
                    expect(data).to.exist; // jshint ignore:line
                    expect(data).to.not.empty; // jshint ignore:line
                    expect(data).to.be.an.instanceof(Array);
                    expect(data[0]).to.have.property('id');
                    expect(data[0]).to.have.property('name');
                    expect(data[0]).to.have.property('originalName');
                    expect(data[0]).to.have.property('firstAirDate');
                    expect(data[0]).to.have.property('year');
                    expect(data[0]).to.have.property('originCountry');
                    expect(data[0]).to.have.property('popularity');
                    expect(data[0]).to.have.property('voteAverage');
                    expect(data[0]).to.have.property('votes');
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
        it('should return a array of tv shows using callback', function(done) {
            themoviedb.searchTVShows('The Flash', function(err, data) {
                if (err) {
                    return done(err);
                }
                expect(err).to.not.exist; // jshint ignore:line
                expect(data).to.exist; // jshint ignore:line
                expect(data).to.not.empty; // jshint ignore:line
                expect(data).to.be.an.instanceof(Array);
                expect(data[0]).to.have.property('id');
                expect(data[0]).to.have.property('name');
                expect(data[0]).to.have.property('originalName');
                expect(data[0]).to.have.property('firstAirDate');
                expect(data[0]).to.have.property('year');
                expect(data[0]).to.have.property('originCountry');
                expect(data[0]).to.have.property('popularity');
                expect(data[0]).to.have.property('voteAverage');
                expect(data[0]).to.have.property('votes');
                expect(data[0]).to.have.property('poster');
                expect(data[0]).to.have.property('backdrop');
                done();
            });
        });
    });
    describe('#popularTVShows()', function() {
        it('should return a array of popular tv shows using promise', function(done) {
            themoviedb.popularTVShows()
                .then(function(data) {
                    expect(data).to.exist; // jshint ignore:line
                    expect(data).to.not.empty; // jshint ignore:line
                    expect(data).to.be.an.instanceof(Array);
                    expect(data[0]).to.have.property('id');
                    expect(data[0]).to.have.property('name');
                    expect(data[0]).to.have.property('originalName');
                    expect(data[0]).to.have.property('firstAirDate');
                    expect(data[0]).to.have.property('year');
                    expect(data[0]).to.have.property('originCountry');
                    expect(data[0]).to.have.property('popularity');
                    expect(data[0]).to.have.property('voteAverage');
                    expect(data[0]).to.have.property('votes');
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
        it('should return a array of popular tv shows using callback', function(done) {
            themoviedb.popularTVShows(function(err, data) {
                if (err) {
                    return done(err);
                }
                expect(err).to.not.exist; // jshint ignore:line
                expect(data).to.exist; // jshint ignore:line
                expect(data).to.not.empty; // jshint ignore:line
                expect(data).to.be.an.instanceof(Array);
                expect(data[0]).to.have.property('id');
                expect(data[0]).to.have.property('name');
                expect(data[0]).to.have.property('originalName');
                expect(data[0]).to.have.property('firstAirDate');
                expect(data[0]).to.have.property('year');
                expect(data[0]).to.have.property('originCountry');
                expect(data[0]).to.have.property('popularity');
                expect(data[0]).to.have.property('voteAverage');
                expect(data[0]).to.have.property('votes');
                expect(data[0]).to.have.property('poster');
                expect(data[0]).to.have.property('backdrop');
                done();
            });
        });
    });
    describe('#onTheAirTVShows()', function() {
        it('should return a array of on the air tv shows using promise', function(done) {
            themoviedb.onTheAirTVShows()
                .then(function(data) {
                    expect(data).to.exist; // jshint ignore:line
                    expect(data).to.not.empty; // jshint ignore:line
                    expect(data).to.be.an.instanceof(Array);
                    expect(data[0]).to.have.property('id');
                    expect(data[0]).to.have.property('name');
                    expect(data[0]).to.have.property('originalName');
                    expect(data[0]).to.have.property('firstAirDate');
                    expect(data[0]).to.have.property('year');
                    expect(data[0]).to.have.property('originCountry');
                    expect(data[0]).to.have.property('popularity');
                    expect(data[0]).to.have.property('voteAverage');
                    expect(data[0]).to.have.property('votes');
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
        it('should return a array of on the air tv shows using callback', function(done) {
            themoviedb.onTheAirTVShows(function(err, data) {
                if (err) {
                    return done(err);
                }
                expect(err).to.not.exist; // jshint ignore:line
                expect(data).to.exist; // jshint ignore:line
                expect(data).to.not.empty; // jshint ignore:line
                expect(data).to.be.an.instanceof(Array);
                expect(data[0]).to.have.property('id');
                expect(data[0]).to.have.property('name');
                expect(data[0]).to.have.property('originalName');
                expect(data[0]).to.have.property('firstAirDate');
                expect(data[0]).to.have.property('year');
                expect(data[0]).to.have.property('originCountry');
                expect(data[0]).to.have.property('popularity');
                expect(data[0]).to.have.property('voteAverage');
                expect(data[0]).to.have.property('votes');
                expect(data[0]).to.have.property('poster');
                expect(data[0]).to.have.property('backdrop');
                done();
            });
        });
    });
    describe('#airingTodayTVShows()', function() {
        it('should return a array of airing today shows using promise', function(done) {
            themoviedb.airingTodayTVShows()
                .then(function(data) {
                    expect(data).to.exist; // jshint ignore:line
                    expect(data).to.not.empty; // jshint ignore:line
                    expect(data).to.be.an.instanceof(Array);
                    expect(data[0]).to.have.property('id');
                    expect(data[0]).to.have.property('name');
                    expect(data[0]).to.have.property('originalName');
                    expect(data[0]).to.have.property('firstAirDate');
                    expect(data[0]).to.have.property('year');
                    expect(data[0]).to.have.property('originCountry');
                    expect(data[0]).to.have.property('popularity');
                    expect(data[0]).to.have.property('voteAverage');
                    expect(data[0]).to.have.property('votes');
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
        it('should return a array of airing today tv shows using callback', function(done) {
            themoviedb.airingTodayTVShows(function(err, data) {
                if (err) {
                    return done(err);
                }
                expect(err).to.not.exist; // jshint ignore:line
                expect(data).to.exist; // jshint ignore:line
                expect(data).to.not.empty; // jshint ignore:line
                expect(data).to.be.an.instanceof(Array);
                expect(data[0]).to.have.property('id');
                expect(data[0]).to.have.property('name');
                expect(data[0]).to.have.property('originalName');
                expect(data[0]).to.have.property('firstAirDate');
                expect(data[0]).to.have.property('year');
                expect(data[0]).to.have.property('originCountry');
                expect(data[0]).to.have.property('popularity');
                expect(data[0]).to.have.property('voteAverage');
                expect(data[0]).to.have.property('votes');
                expect(data[0]).to.have.property('poster');
                expect(data[0]).to.have.property('backdrop');
                done();
            });
        });
    });
    describe('#topRatedTVShows()', function() {
        it('should return a array of top rated shows using promise', function(done) {
            themoviedb.topRatedTVShows()
                .then(function(data) {
                    expect(data).to.exist; // jshint ignore:line
                    expect(data).to.not.empty; // jshint ignore:line
                    expect(data).to.be.an.instanceof(Array);
                    expect(data[0]).to.have.property('id');
                    expect(data[0]).to.have.property('name');
                    expect(data[0]).to.have.property('originalName');
                    expect(data[0]).to.have.property('firstAirDate');
                    expect(data[0]).to.have.property('year');
                    expect(data[0]).to.have.property('originCountry');
                    expect(data[0]).to.have.property('popularity');
                    expect(data[0]).to.have.property('voteAverage');
                    expect(data[0]).to.have.property('votes');
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
        it('should return a array of top rated tv shows using callback', function(done) {
            themoviedb.topRatedTVShows(function(err, data) {
                if (err) {
                    return done(err);
                }
                expect(err).to.not.exist; // jshint ignore:line
                expect(data).to.exist; // jshint ignore:line
                expect(data).to.not.empty; // jshint ignore:line
                expect(data).to.be.an.instanceof(Array);
                expect(data[0]).to.have.property('id');
                expect(data[0]).to.have.property('name');
                expect(data[0]).to.have.property('originalName');
                expect(data[0]).to.have.property('firstAirDate');
                expect(data[0]).to.have.property('year');
                expect(data[0]).to.have.property('originCountry');
                expect(data[0]).to.have.property('popularity');
                expect(data[0]).to.have.property('voteAverage');
                expect(data[0]).to.have.property('votes');
                expect(data[0]).to.have.property('poster');
                expect(data[0]).to.have.property('backdrop');
                done();
            });
        });
    });
    describe('#getTVShow()', function() {
        it('should return a not found error using promise', function(done) {
            themoviedb.getTVShow(0)
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
            themoviedb.getTVShow(0, function(err, data) {
                expect(err).to.exist; // jshint ignore:line
                expect(data).to.not.exist; // jshint ignore:line
                expect(err).to.be.an.instanceof(Error);
                done();
            });
        });
        it('should return the tv show data using promise', function(done) {
            themoviedb.getTVShow(60735)
                .then(function(data) {
                    expect(data).to.exist; // jshint ignore:line
                    expect(data).to.not.empty; // jshint ignore:line
                    expect(data).to.be.an('object');
                    expect(data).to.have.property('id');
                    expect(data).to.have.property('name');
                    expect(data).to.have.property('originalName');
                    expect(data).to.have.property('overview');
                    expect(data).to.have.property('firstAirDate');
                    expect(data).to.have.property('lastAirDate');
                    expect(data).to.have.property('year');
                    expect(data).to.have.property('duration');
                    expect(data).to.have.property('inProduction');
                    expect(data).to.have.property('numberOfSeasons');
                    expect(data).to.have.property('numberOfEpisodes');
                    expect(data).to.have.property('originCountry');
                    expect(data).to.have.property('voteAverage');
                    expect(data).to.have.property('votes');
                    expect(data).to.have.property('status');
                    expect(data).to.have.property('type');
                    expect(data).to.have.property('productionCompanies');
                    expect(data).to.have.property('poster');
                    expect(data).to.have.property('backdrop');
                    expect(data).to.have.property('genres');
                    expect(data).to.have.property('languages');
                    expect(data).to.have.property('originalLanguage');
                    expect(data).to.have.property('createdBy');
                    expect(data).to.have.property('seasons');
                    expect(data).to.have.property('externalIds');
                    expect(data).to.have.property('credits');
                    expect(data.credits).to.have.property('cast');
                    expect(data.credits).to.have.property('crew');
                    expect(data).to.have.property('videos');
                    expect(data).to.have.property('images');
                    expect(data.images).to.have.property('backdrops');
                    expect(data.images).to.have.property('posters');
                    expect(data).to.have.property('rating');
                    expect(data.createdBy).to.be.an.instanceof(Array);
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
        it('should return the tv show data using callback', function(done) {
            themoviedb.getTVShow(60735, function(err, data) {
                expect(err).to.not.exist; // jshint ignore:line
                expect(data).to.exist; // jshint ignore:line
                expect(data).to.not.empty; // jshint ignore:line
                expect(data).to.have.property('id');
                expect(data).to.have.property('name');
                expect(data).to.have.property('originalName');
                expect(data).to.have.property('overview');
                expect(data).to.have.property('firstAirDate');
                expect(data).to.have.property('lastAirDate');
                expect(data).to.have.property('year');
                expect(data).to.have.property('duration');
                expect(data).to.have.property('inProduction');
                expect(data).to.have.property('numberOfSeasons');
                expect(data).to.have.property('numberOfEpisodes');
                expect(data).to.have.property('originCountry');
                expect(data).to.have.property('voteAverage');
                expect(data).to.have.property('votes');
                expect(data).to.have.property('status');
                expect(data).to.have.property('type');
                expect(data).to.have.property('productionCompanies');
                expect(data).to.have.property('poster');
                expect(data).to.have.property('backdrop');
                expect(data).to.have.property('genres');
                expect(data).to.have.property('languages');
                expect(data).to.have.property('originalLanguage');
                expect(data).to.have.property('createdBy');
                expect(data).to.have.property('seasons');
                expect(data).to.have.property('externalIds');
                expect(data).to.have.property('credits');
                expect(data.credits).to.have.property('cast');
                expect(data.credits).to.have.property('crew');
                expect(data).to.have.property('videos');
                expect(data).to.have.property('images');
                expect(data.images).to.have.property('backdrops');
                expect(data.images).to.have.property('posters');
                expect(data).to.have.property('rating');
                expect(data.createdBy).to.be.an.instanceof(Array);
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
    describe('#getSeasonOfTVShow()', function() {
        it('should return a not found error using promise', function(done) {
            themoviedb.getSeasonOfTVShow(0, 1)
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
            themoviedb.getSeasonOfTVShow(0, 1, function(err, data) {
                expect(err).to.exist; // jshint ignore:line
                expect(data).to.not.exist; // jshint ignore:line
                expect(err).to.be.an.instanceof(Error);
                done();
            });
        });
        it('should return the season data of the tv show using promise', function(done) {
            themoviedb.getSeasonOfTVShow(60735, 1)
                .then(function(data) {
                    expect(data).to.exist; // jshint ignore:line
                    expect(data).to.not.empty; // jshint ignore:line
                    expect(data).to.be.an('object');
                    expect(data).to.have.property('id');
                    expect(data).to.have.property('name');
                    expect(data).to.have.property('overview');
                    expect(data).to.have.property('airDate');
                    expect(data).to.have.property('season');
                    expect(data).to.have.property('poster');
                    expect(data.episodes).to.be.an.instanceof(Array);
                    expect(data.episodes[0]).to.have.property('id');
                    expect(data.episodes[0]).to.have.property('name');
                    expect(data.episodes[0]).to.have.property('overview');
                    expect(data.episodes[0]).to.have.property('airDate');
                    expect(data.episodes[0]).to.have.property('season');
                    expect(data.episodes[0]).to.have.property('productionCode');
                    expect(data.episodes[0]).to.have.property('voteAverage');
                    expect(data.episodes[0]).to.have.property('votes');
                    expect(data.episodes[0]).to.have.property('still');
                    expect(data.episodes[0]).to.have.property('crew');
                    expect(data.episodes[0]).to.have.property('guestStars');
                    expect(data.episodes[0].crew).to.be.an.instanceof(Array);
                    expect(data.episodes[0].guestStars).to.be.an.instanceof(Array);
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
        it('should return the season data of the tv show using callback', function(done) {
            themoviedb.getSeasonOfTVShow(60735, 1, function(err, data) {
                expect(err).to.not.exist; // jshint ignore:line
                expect(data).to.exist; // jshint ignore:line
                expect(data).to.not.empty; // jshint ignore:line
                expect(data).to.be.an('object');
                expect(data).to.have.property('id');
                expect(data).to.have.property('name');
                expect(data).to.have.property('overview');
                expect(data).to.have.property('airDate');
                expect(data).to.have.property('season');
                expect(data).to.have.property('poster');
                expect(data.episodes).to.be.an.instanceof(Array);
                expect(data.episodes[0]).to.have.property('id');
                expect(data.episodes[0]).to.have.property('name');
                expect(data.episodes[0]).to.have.property('overview');
                expect(data.episodes[0]).to.have.property('airDate');
                expect(data.episodes[0]).to.have.property('season');
                expect(data.episodes[0]).to.have.property('productionCode');
                expect(data.episodes[0]).to.have.property('voteAverage');
                expect(data.episodes[0]).to.have.property('votes');
                expect(data.episodes[0]).to.have.property('still');
                expect(data.episodes[0]).to.have.property('crew');
                expect(data.episodes[0]).to.have.property('guestStars');
                expect(data.episodes[0].crew).to.be.an.instanceof(Array);
                expect(data.episodes[0].guestStars).to.be.an.instanceof(Array);
                done();
            });
        });
    });
    describe('#getEpisodeOfTVShow()', function() {
        it('should return a not found error using promise', function(done) {
            themoviedb.getEpisodeOfTVShow(0, 1, 1)
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
            themoviedb.getEpisodeOfTVShow(0, 1, 1, function(err, data) {
                expect(err).to.exist; // jshint ignore:line
                expect(data).to.not.exist; // jshint ignore:line
                expect(err).to.be.an.instanceof(Error);
                done();
            });
        });
        it('should return the episode data of the tv show using promise', function(done) {
            themoviedb.getEpisodeOfTVShow(60735, 1, 1)
                .then(function(data) {
                    expect(data).to.exist; // jshint ignore:line
                    expect(data).to.not.empty; // jshint ignore:line
                    expect(data).to.be.an('object');
                    expect(data).to.have.property('id');
                    expect(data).to.have.property('name');
                    expect(data).to.have.property('overview');
                    expect(data).to.have.property('airDate');
                    expect(data).to.have.property('season');
                    expect(data).to.have.property('episode');
                    expect(data).to.have.property('productionCode');
                    expect(data).to.have.property('voteAverage');
                    expect(data).to.have.property('votes');
                    expect(data).to.have.property('still');
                    expect(data).to.have.property('guestStars');
                    expect(data).to.have.property('crew');
                    expect(data.crew).to.be.an.instanceof(Array);
                    expect(data.guestStars).to.be.an.instanceof(Array);
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
        it('should return the episode data of the tv show using callback', function(done) {
            themoviedb.getEpisodeOfTVShow(60735, 1, 1, function(err, data) {
                expect(err).to.not.exist; // jshint ignore:line
                expect(data).to.exist; // jshint ignore:line
                expect(data).to.not.empty; // jshint ignore:line
                expect(data).to.be.an('object');
                expect(data).to.have.property('id');
                expect(data).to.have.property('name');
                expect(data).to.have.property('overview');
                expect(data).to.have.property('airDate');
                expect(data).to.have.property('season');
                expect(data).to.have.property('episode');
                expect(data).to.have.property('productionCode');
                expect(data).to.have.property('voteAverage');
                expect(data).to.have.property('votes');
                expect(data).to.have.property('still');
                expect(data).to.have.property('guestStars');
                expect(data).to.have.property('crew');
                expect(data.crew).to.be.an.instanceof(Array);
                expect(data.guestStars).to.be.an.instanceof(Array);
                done();
            });
        });
    });
    describe('#getSimilarTVShows()', function() {
        it('should return a empty array using promise', function(done) {
            themoviedb.getSimilarTVShows(0)
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
            themoviedb.getSimilarTVShows(0, function(err, data) {
                expect(err).to.exist; // jshint ignore:line
                expect(data).to.not.exist; // jshint ignore:line
                expect(err).to.be.an.instanceof(Error);
                done();
            });
        });
        it('should return a array of similar tv shows using promise', function(done) {
            themoviedb.getSimilarTVShows(60735)
                .then(function(data) {
                    expect(data).to.exist; // jshint ignore:line
                    expect(data).to.not.empty; // jshint ignore:line
                    expect(data).to.be.an.instanceof(Array);
                    expect(data[0]).to.have.property('id');
                    expect(data[0]).to.have.property('name');
                    expect(data[0]).to.have.property('originalName');
                    expect(data[0]).to.have.property('firstAirDate');
                    expect(data[0]).to.have.property('year');
                    expect(data[0]).to.have.property('originCountry');
                    expect(data[0]).to.have.property('popularity');
                    expect(data[0]).to.have.property('voteAverage');
                    expect(data[0]).to.have.property('votes');
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
        it('should return a array of similar tv shows using callback', function(done) {
            themoviedb.getSimilarTVShows(60735, function(err, data) {
                if (err) {
                    return done(err);
                }
                expect(err).to.not.exist; // jshint ignore:line
                expect(data).to.exist; // jshint ignore:line
                expect(data).to.not.empty; // jshint ignore:line
                expect(data).to.be.an.instanceof(Array);
                expect(data[0]).to.have.property('id');
                expect(data[0]).to.have.property('name');
                expect(data[0]).to.have.property('originalName');
                expect(data[0]).to.have.property('firstAirDate');
                expect(data[0]).to.have.property('year');
                expect(data[0]).to.have.property('originCountry');
                expect(data[0]).to.have.property('popularity');
                expect(data[0]).to.have.property('voteAverage');
                expect(data[0]).to.have.property('votes');
                expect(data[0]).to.have.property('poster');
                expect(data[0]).to.have.property('backdrop');
                done();
            });
        });
    });
    describe('#getCreditsOfTVShow()', function() {
        it('should return a not found error using promise', function(done) {
            themoviedb.getCreditsOfTVShow(0)
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
            themoviedb.getCreditsOfTVShow(0, function(err, data) {
                expect(err).to.exist; // jshint ignore:line
                expect(data).to.not.exist; // jshint ignore:line
                expect(err).to.be.an.instanceof(Error);
                done();
            });
        });
        it('should return the tv show credits cast using promise', function(done) {
            themoviedb.getCreditsOfTVShow(60735)
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
        it('should return the tv show credits cast using callback', function(done) {
            themoviedb.getCreditsOfTVShow(60735, function(err, data) {
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
        it('should return the tv show credits crew using promise', function(done) {
            themoviedb.getCreditsOfTVShow(60735)
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
        it('should return the tv show credits crew using callback', function(done) {
            themoviedb.getCreditsOfTVShow(60735, function(err, data) {
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
    describe('#getVideosOfTVShow()', function() {
        it('should return a not found error using promise', function(done) {
            themoviedb.getVideosOfTVShow(0)
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
            themoviedb.getVideosOfTVShow(0, function(err, data) {
                expect(err).to.exist; // jshint ignore:line
                expect(data).to.not.exist; // jshint ignore:line
                expect(err).to.be.an.instanceof(Error);
                done();
            });
        });
        it('should return the tv show videos using promise', function(done) {
            themoviedb.getVideosOfTVShow(60735)
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
        it('should return the tv show videos using callback', function(done) {
            themoviedb.getVideosOfTVShow(60735, function(err, data) {
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
    describe('#getImagesOfTVShow()', function() {
        it('should return a not found error using promise', function(done) {
            themoviedb.getImagesOfTVShow(0)
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
            themoviedb.getImagesOfTVShow(0, function(err, data) {
                expect(err).to.exist; // jshint ignore:line
                expect(data).to.not.exist; // jshint ignore:line
                expect(err).to.be.an.instanceof(Error);
                done();
            });
        });
        it('should return the tv show images backdrops using promise', function(done) {
            themoviedb.getImagesOfTVShow(60735)
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
        it('should return the tv show images backdrops using callback', function(done) {
            themoviedb.getImagesOfTVShow(60735, function(err, data) {
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
        it('should return the tv show images posters using promise', function(done) {
            themoviedb.getImagesOfTVShow(60735)
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
        it('should return the tv show images posters using callback', function(done) {
            themoviedb.getImagesOfTVShow(60735, function(err, data) {
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
