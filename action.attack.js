var actionAttack = {
  run: function(creep) {
    if (Memory.roomData.enemies.length > 0) {
      creep.memory.target = Memory.roomData.enemies[0].id;
    } else {
      creep.memory.target = null;
      creep.memory.work = 'idle';
      return;
    }
    var target = Game.getObjectById(creep.memory.target);
    // console.log(target.body.hitsMax);
    switch (creep.attack(target)) {
      case OK:
        console.log(creep + ' : attack : ' + target + ' : OK');

        break;
      case ERR_NOT_OWNER:
        console.log(creep + ' : attack : ' + target + ' : ERR_NOT_OWNER');
        break;
      case ERR_BUSY:
        console.log(creep + ' : attack : ' + target + ' : ERR_BUSY');
        break;
      case ERR_INVALID_TARGET:
        console.log(creep + ' : attack : ' + target + ' : ERR_INVALID_TARGET');
        creep.memory.work = 'idle';
        break;
      case ERR_NOT_IN_RANGE:
        console.log(creep + ' : attack : ' + target + ' : ERR_NOT_IN_RANGE');
        creep.moveTo(target);
        break;
      case ERR_NO_BODYPART:
        console.log(creep + ' : attack : ' + target + ' : ERR_NO_BODYPART');
        creep.memory.work = 'idle';
        break;
    }
  }
};

module.exports = actionAttack;
