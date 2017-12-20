var sources = _.sortBy(Game.spawns.Spawn1.room.find(FIND_SOURCES), s => Game.spawns.Spawn1.pos.getRangeTo(s));
var enemies = _.sortBy(Game.spawns.Spawn1.room.find(FIND_HOSTILE_CREEPS), e => Game.spawns.Spawn1.pos.getRangeTo(e));
var extensions = _.sortBy(Game.spawns.Spawn1.room.find(FIND_MY_STRUCTURES, { filter: { structureType: STRUCTURE_EXTENSION } }));


var actionIdle = {
  run: function(creep) {
    console.log(creep + ' : idle');
    creep.memory.target = null;

    var creepRole = creep.memory.role;
    var creepHaulingEnergy = (_.sum(creep.carry) > 0);
    var buildTarget = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
    var roomEnergyFull = (Game.spawns.Spawn1.room.energyAvailable >= Game.spawns.Spawn1.room.energyCapacityAvailable);
    var droppedResource = (creep.room.find(FIND_DROPPED_RESOURCES).length > 0);
    var canHarvest = (_.filter(Game.creeps, (creep) => creep.memory.work == 'harvest').length < Memory.roomData.emptySource[Memory.roomData.emptySource.length - 1]);
    var safeMode = Game.spawns.Spawn1.room.controller.safeMode;
    var enemyFound = Memory.roomData.enemies[0] != null;
    /*
    console.log('       Memory.roomData.emptySource[Memory.roomData.emptySource.length - 1] : ' + Memory.roomData.emptySource[Memory.roomData.emptySource.length - 1]);
    console.log('       creep.room.find(FIND_DROPPED_RESOURCES) : ' + creep.room.find(FIND_DROPPED_RESOURCES));
    console.log('       creepRole : ' + (creepRole));
    console.log('       creepHaulingEnergy : ' + (creepHaulingEnergy));
    console.log('       buildTarget : ' + (buildTarget));
    console.log('       roomEnergyFull : ' + (roomEnergyFull));
    console.log('       droppedResource : ' + (droppedResource));
    console.log('       canHarvest : ' + (canHarvest));
    console.log('       safeMode : ' + (safeMode));
    console.log('       enemyFound : ' + (enemyFound));
    */
    switch (creepRole) {
      case 'generic':
        switch (creepHaulingEnergy) {
          case true:
            if (!roomEnergyFull) {creep.memory.work = 'transfer';}
            else if (buildTarget != null) {creep.memory.work = 'build';}
            else if (roomEnergyFull) {creep.memory.work = 'upgradeController';}
            break;
          case false:
            if (canHarvest) {creep.memory.work = 'harvest';}
            else if (droppedResource) {creep.memory.work = 'pickup';}
            break;
        }
        break;
      case 'attack':
        if (enemyFound) {creep.memory.work = 'attack';}
        else if (!enemyFound) {creep.memory.work = 'idle';}
        break;
    }

  }
};

module.exports = actionIdle;
