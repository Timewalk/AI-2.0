 var actionPickup = {
   run: function(creep) {
     var droppedResource = creep.room.find(FIND_DROPPED_RESOURCES);
     //console.log('droppedResource : ' + droppedResource);

     var target = null;
     if (droppedResource.length > 0) {
       target = droppedResource[0];
       creep.memory.target = target.id;
     } else {
       creep.memory.work = 'idle';
       creep.memory.target = null;
     }

     switch (creep.pickup(target)) {
       case OK:
         console.log(creep + ' : pickup : OK');
         creep.memory.work = 'idle';
         break;
       case ERR_NOT_OWNER:
         console.log(creep + ' : pickup : ERR_NOT_OWNER');
         break;
       case ERR_BUSY:
         console.log(creep + ' : pickup : ERR_BUSY');
         break;
       case ERR_INVALID_TARGET:
         console.log(creep + ' : pickup : ERR_INVALID_TARGET : ' + target);
         creep.memory.work = 'idle';
         break;
       case ERR_FULL:
         console.log(creep + ' : pickup : ERR_FULL');
         creep.memory.work = 'idle';
         break;
       case ERR_NOT_IN_RANGE:
         console.log(creep + ' : pickup : ERR_NOT_IN_RANGE : Moving to : ' + target);
         creep.moveTo(target);
         break;
     }
   }
 };

 module.exports = actionPickup;
