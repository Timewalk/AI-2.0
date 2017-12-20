var actionBuild = {
  run: function(creep) {
    var constructionSites = Game.spawns.Spawn1.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
    var target = null;
    if (constructionSites != null){
      target = constructionSites;
      creep.memory.target = target.id;
    } else {
      target = null;
      creep.memory.target = null;
      creep.memory.work = 'idle';
    }
    switch (creep.build(target)) {
      case OK:
        console.log(creep + ' : build : OK : Building : ' + target );
        break;
      case ERR_NOT_OWNER:
        console.log(creep + ' : build : ERR_NOT_OWNER');
        break;
      case ERR_BUSY:
        console.log(creep + ' : build : ERR_BUSY');
        break;
      case ERR_NOT_FOUND:
        console.log(creep + ' : build : ERR_NOT_FOUND');
        break;
      case ERR_NOT_ENOUGH_RESOURCES:
        console.log(creep + ' : build : ERR_NOT_ENOUGH_RESOURCES');
        creep.memory.work = 'idle';
        break;
      case ERR_INVALID_TARGET:
        console.log(creep + ' : build : ERR_INVALID_TARGET');
        creep.memory.work = 'idle';
        break;
      case ERR_NOT_IN_RANGE:
        console.log(creep + ' : build : ERR_NOT_IN_RANGE : Moving to : ' + target);
        creep.moveTo(target);
        break;
      case ERR_NO_BODYPART:
        console.log(creep + ' : build : ERR_NO_BODYPART');
        break;
    }
  }
};

module.exports = actionBuild;
