/* global define */
'use strict';

define(function(require) {
  var animal = require('animal');

  var createDog = function() {
    var newDog = Object.create(animal);
    newDog.sound = 'Woof';

    return newDog;
  };

  return createDog;
});