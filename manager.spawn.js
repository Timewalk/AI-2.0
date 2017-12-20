var spawnBody = require('spawn.body');

 const GCreepMemory = { memory: { role: 'generic', work: 'spawn' } };
 const ACreepMemory = { memory: { role: 'attack', work: 'spawn' } };
 const dryRun = { dryRun: true };

 var managerSpawn = {
   run: function() {

     var roomEnergyCap = Game.spawns.Spawn1.room.energyCapacityAvailable;
     var roomEnergyAvailable = Game.spawns.Spawn1.room.energyAvailable;
     console.log('roomEnergyAvailable : '+ roomEnergyAvailable + ' : roomEnergyCap : ' +roomEnergyCap );

     // Clear out dead creeps
     for (var creep in Memory.creeps) {
       if (!Game.creeps[creep]) {
         delete Memory.creeps[creep];
         console.log('Cleared: DEAD CREEP = ' + creep);
       }
     }



     if (roomEnergyAvailable >= roomEnergyCap || roomEnergyAvailable >= 300) {

       var genericCreeps = _.filter(Game.creeps, (creep) => creep.memory.role == 'generic');
       var attackCreeps = _.filter(Game.creeps, (creep) => creep.memory.role == 'attack');


       if (attackCreeps.length < Memory.roomData.enemies.length * 3  && false) {
         if (Game.spawns['Spawn1'].spawnCreep(spawnBody.run('melee'), 'melee_' + Game.time, ACreepMemory) == 0) {

         }
       } else if (genericCreeps.length < (Memory.roomData.emptySource[Memory.roomData.emptySource.length - 1]) * 1.5) {
         //console.log(Game.spawns['Spawn1'].spawnCreep(GCreepBody, 'gCreep' + Game.time, dryRun));

         if (Game.spawns['Spawn1'].spawnCreep(spawnBody.run('generic'), 'generic_' + Game.time, GCreepMemory) == 0) {

         }
         else{
           console.log('failed spawn');
         }
       }
     }
   }
 };

 module.exports = managerSpawn;
