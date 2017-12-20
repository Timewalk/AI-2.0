 var actionTransfer = {
   run: function(creep, resource) {

     var target = null;
     var extensions = Game.spawns.Spawn1.room.find(FIND_MY_STRUCTURES, {
       filter: {
         structureType: STRUCTURE_EXTENSION
       }
     });

     if (extensions != null) {
       for (var i = 0; i < extensions.length; i++) {
         var extensionNotFull = (extensions[i].energy < extensions[i].energyCapacity);
         if (extensionNotFull) {
           target = extensions[i];
           break;
         }
       }
     }
     if (target == null) {
       target = Game.spawns.Spawn1;
     }
     if (target.energy >= target.energyCapacity) {
       creep.memory.work = 'idle';
     }

     creep.memory.target = target.id;
     switch (creep.transfer(target, resource)) {
       case OK:
         console.log(creep + ' : transfer : OK');
         creep.memory.work = 'idle';
         break;
       case ERR_NOT_OWNER:
         console.log(creep + ' : transfer : ERR_NOT_OWNER');
         break;
       case ERR_BUSY:
         console.log(creep + ' : transfer : ERR_BUSY');
         break;
       case ERR_NOT_FOUND:
         console.log(creep + ' : transfer : ERR_NOT_FOUND');
         break;
       case ERR_NOT_ENOUGH_RESOURCES:
         console.log(creep + ' : transfer : ERR_NOT_ENOUGH_RESOURCES');
         creep.memory.work = 'idle';
         break;
       case ERR_INVALID_TARGET:
         console.log(creep + ' : transfer : ERR_INVALID_TARGET : ' + target);
         break;
       case ERR_NOT_IN_RANGE:
         console.log(creep + ' : transfer : ERR_NOT_IN_RANGE : Moving to : ' + target);
         creep.moveTo(target);
         break;
       case ERR_NO_BODYPART:
         console.log(creep + ' : transfer : ERR_NO_BODYPART');
         break;
       default:
         console.log(creep + ' : transfer : ERR_DEFAULT : ' + target + ' : ' + resource);
         creep.memory.work = 'idle';
         break;
     }
   }
 };

 module.exports = actionTransfer;
