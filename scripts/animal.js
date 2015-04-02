/* global define, console */

define(function() {
  'use strict';

  return {
    breathe: function() {
      console.log('Breathing...');
    },

    doSound: function() {
      console.log(this.sound);
    }
  };

});
