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

describe('TheMovieDb module', function() {
    describe('#constructor', function() {
        it('should be a function', function() {
            expect(TheMovieDb).to.be.a('function');
        });
    });
    describe('#instance', function() {
        it('should be a object', function() {
            expect(themoviedb).to.be.a('object');
        });
    });
});
