/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('action.move');
 * mod.thing == 'a thing'; // true
 */
const pathStyle1 = {
  visualizePathStyle: {
    stroke: '#ffaa00'
  }
};

var actionMove = {
  run: function(creep, dest) {
    creep.moveTo(dest, pathStyle1);
  }
};

module.exports = actionMove;