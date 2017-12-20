var actionUpgradeController = {
  run: function(creep) {

    var target = Game.spawns.Spawn1.room.controller;
    creep.memory.target = target.id;
    switch (creep.upgradeController(target)) {
      case OK:
        console.log(creep + ' : upgradeController : OK');
        if (creep.carry.energy <= 0) {
          creep.memory.work = 'idle';
        }
        break;
      case ERR_NOT_OWNER:
        console.log(creep + ' : upgradeController : ERR_NOT_OWNER');
        break;
      case ERR_BUSY:
        console.log(creep + ' : upgradeController : ERR_BUSY');
        break;
      case ERR_NOT_ENOUGH_RESOURCES:
        console.log(creep + ' : upgradeController : ERR_NOT_ENOUGH_RESOURCES');
        creep.memory.work = 'idle';
        break;
      case ERR_INVALID_TARGET:
        console.log(creep + ' : upgradeController : ERR_INVALID_TARGET');
        creep.memory.work = 'idle';
        break;
      case ERR_NOT_IN_RANGE:
        console.log(creep + ' : upgradeController : ERR_NOT_IN_RANGE');
        creep.moveTo(target);
        break;
      case ERR_NO_BODYPART:
        console.log(creep + ' : upgradeController : ERR_NO_BODYPART');
        break;
    }
  }
};

module.exports = actionUpgradeController;
