'use strict';

module.exports = function () {

  var _xp = 0;
  var _level = 1;

  function curve (currentLevel) {
    return currentLevel;
  }

  function calculateLevel(xp) {
    _xp += xp;

    while((_xp/60) >= curve(_level)) {
      _level++;
    }

    return 1;
  }

  return {

    increment : function(xp) {
      return calculateLevel(xp);
    },


    level : function(level) {
      if(level === undefined) {
        return _level;
      }

      _level = level;
      return _level;
    },


    xp : function(xp) {
      if(xp === undefined) {
        return _xp;
      }

      _xp = xp;
      return _xp;
    },

  };

};
