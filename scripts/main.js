/* global define, console */
define(function(require) {
  'use strict';
  var createCat = require('createCat');
  var createDog = require('createDog');

  var cat = createCat();
  var dog = createDog();
  
  cat.breathe();
  cat.doSound();
  console.log(Object.getPrototypeOf(cat) === require('animal'));

  dog.breathe();
  dog.doSound();
  console.log(Object.getPrototypeOf(dog) === require('animal'));

  console.log('Same prototype: ' +
    (Object.getPrototypeOf(cat) === Object.getPrototypeOf(dog)));
});