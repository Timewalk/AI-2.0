var actionSpawn = {
  run: function(creep) {
    if (!creep.spawning) {
      creep.memory.work = 'idle';
    } else {
      console.log(creep + ' : spawn : BODY : [' + creep.body + ']');
    }
  }
};


module.exports = actionSpawn;
