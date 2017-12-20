const actionMove = require('action.move');
const actionHarvest = require('action.harvest');
const actionSpawn = require('action.spawn');
const actionIdle = require('action.idle');
const actionTransfer = require('action.transfer');
const actionPickup = require('action.pickup');
const actionBuild = require('action.build');
const actionAttack = require('action.attack');
const actionUpgradeController = require('action.upgradeController');


var managerCreep = {
  run: function() {
    for (var i in Game.creeps) {
      var creep = Game.creeps[i];
      switch (creep.memory.work) {
        case 'spawn':
          actionSpawn.run(creep);
          break;
        case 'idle':
          actionIdle.run(creep);
          break;
        case 'harvest':
          actionHarvest.run(creep);
          break;
        case 'transfer':
          actionTransfer.run(creep, RESOURCE_ENERGY);
          break;
        case 'pickup':
          actionPickup.run(creep, creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES));
          break;
        case 'build':
          actionBuild.run(creep);
          break;
        case 'attack':
          actionAttack.run(creep);
          break;
        case 'upgradeController':
          actionUpgradeController.run(creep);
          break;
      }


    }

  }
};


module.exports = managerCreep;
