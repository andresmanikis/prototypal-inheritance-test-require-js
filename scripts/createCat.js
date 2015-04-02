/* global define */
'use strict';

define(function(require) {
  var animal = require('animal');

  var createCat = function() {
    var newCat = Object.create(animal);
    newCat.sound = 'Meow';

    return newCat;
  };

  return createCat;
});