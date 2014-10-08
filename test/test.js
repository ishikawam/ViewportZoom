// mocha

var assert = require('assert');

var ViewportZoom = require('../ViewportZoom.js');

describe('main', function() {

    it('default, 320/980 zoom', function(){
        assert.equal(320/980, ViewportZoom.get(320));
    });

    it('default ipad, 768/980 zoom', function(){
        assert.equal(768/980, ViewportZoom.get(768));
    });

    it('width=999', function() {
        assert.equal(0.5, ViewportZoom.get(320, 'width=640'));
    });

    it('width=999px', function() {
        assert.equal(1, ViewportZoom.get(320, 'width=320px'));
    });

    it('width minimum 64', function() {
        assert.equal(5, ViewportZoom.get(320, 'width=20px'));
    });

    it('width maximum 1280', function() {
        assert.equal(1/4, ViewportZoom.get(320, 'width=20000px'));
    });

    it('width=0, actually width=64 by minimum limit', function() {
        assert.equal(5, ViewportZoom.get(320, 'width=0'));
    });

    it('minus width, actually width=64 by minimum limit', function() {
        assert.equal(5, ViewportZoom.get(320, 'width=-30px'));
    });

    it('invalid content', function() {
        assert.equal(320/980, ViewportZoom.get(320, 'width=-30p'));
    });

    it('invalid content', function() {
        assert.equal(320/980, ViewportZoom.get(320, 'width=-30p'));
    });

    it('ok, space', function(){
        assert.equal(1, ViewportZoom.get(320, 'width = 320 px'));
    });

    it('change default auto-resize width', function(){
        assert.equal(320/960, ViewportZoom.get(320, null, 960));
    });

    it('change minimum width', function(){
        assert.equal(10, ViewportZoom.get(320, 'width=0', null, 32));
    });

    it('chagnge maximum width', function(){
        assert.equal(1/3, ViewportZoom.get(320, 'width=2000', null, 32, 960));
    });

    it('initial-scale', function(){
        assert.equal(1, ViewportZoom.get(320, 'width=2000, initial-scale=1'));
    });

    it('ok, space and px. initial-scale', function(){
        assert.equal(1, ViewportZoom.get(320, 'width=200px, initial-scale = 1'));
    });

    it('width=device-width', function(){
        assert.equal(1, ViewportZoom.get(320, 'width=device-width'));
    });

    it('over minimum-scale for initial-scale', function(){
        assert.equal(0.8, ViewportZoom.get(320, 'width=device-width, initial-scale=1, minimum-scale=0.8'));
    });

    it('minimum-scale', function(){
        assert.equal(1, ViewportZoom.get(320, 'width=device-width, initial-scale=1, minimum-scale=1.2'));
    });

    it('over maximum-scale for initial-scale', function(){
        assert.equal(1.2, ViewportZoom.get(320, 'width=device-width, initial-scale=1, maximum-scale=1.2'));
    });

    it('maximum-scale', function(){
        assert.equal(1, ViewportZoom.get(320, 'width=device-width, initial-scale=1, maximum-scale=0.8'));
    });

    it('minimum-scale vs maximum-scale', function(){
        assert.equal(0.8, ViewportZoom.get(320, 'width=device-width, initial-scale=1, minimum-scale=0.8, maximum-scale=1.2'));
    });

    it('minimum-scale vs maximum-scale', function(){
        assert.equal(0.8, ViewportZoom.get(320, 'width = 0 px, initial-scale = 1.6, minimum-scale = 0.8, maximum-scale = 1.2'));
    });
});
