const managerSpawn = require('manager.spawn');
const managerCreep = require('manager.creep');
const initializeRoomData = require('initialize.roomData');

initializeRoomData.run();

module.exports.loop = function() {
  console.log('--- Main ---');

  console.log(Game.rooms.sim.sources);
  console.log(Game.rooms.sim.freeSpaceCount);


  var enemies = _.sortBy(Game.spawns.Spawn1.room.find(FIND_HOSTILE_CREEPS), e => Game.spawns.Spawn1.pos.getRangeTo(e));
  if (enemies != null) {
    Memory.roomData.enemies = enemies;
    Game.spawns.Spawn1.room.controller.activateSafeMode();
  }
  managerSpawn.run();
  managerCreep.run();
};
