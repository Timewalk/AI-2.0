var sources = _.sortBy(Game.spawns.Spawn1.room.find(FIND_SOURCES), s => Game.spawns.Spawn1.pos.getRangeTo(s));

var actionHarvest = {
  run: function(creep) {
    var target = Game.getObjectById(creep.memory.target);
    // console.log(creep + ' : target : ' + target);
    if (creep.memory.target == null) {
      for (var i = 0; i < sources.length; i++) {
        if (_.filter(Game.creeps, (creep) => creep.memory.target == sources[i].id).length < Memory.roomData.emptySource[i]) {
          target = sources[i];
          creep.memory.target = target.id;
          break;
        }

      }
    }

    switch (creep.harvest(target)) {
      case OK:
        creep.memory.target = target.id;
        console.log(creep + ' : harvest : OK : Harvesting : ' + target);
        if (creep.carry.energy >= creep.carryCapacity) {
          creep.memory.work = 'idle';
          creep.memory.target = null;
        }
        break;
      case ERR_NOT_OWNER:
        console.log(creep + ' : harvest : ERR_NOT_OWNER');
        break;
      case ERR_BUSY:
        console.log(creep + ' : harvest : ERR_BUSY');
        break;
      case ERR_NOT_FOUND:
        console.log(creep + ' : harvest : ERR_NOT_FOUND');
        break;
      case ERR_NOT_ENOUGH_RESOURCES:
        console.log(creep + ' : harvest : ERR_NOT_ENOUGH_RESOURCES');
        break;
      case ERR_INVALID_TARGET:
        console.log(creep + ' : harvest : ERR_INVALID_TARGET : ' + target);
        creep.memory.work = 'idle';
        break;
      case ERR_NOT_IN_RANGE:
        console.log(creep + ' : harvest : ERR_NOT_IN_RANGE : Moving to : ' + target);
        creep.moveTo(target);
        break;
      case ERR_NO_BODYPART:
        console.log(creep + ' : harvest : ERR_NO_BODYPART');
        break;
    }
  }
};

module.exports = actionHarvest;
