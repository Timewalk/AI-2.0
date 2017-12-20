Object.defineProperty(Room.prototype, 'sources', {
  configurabe: true,
  get: function() {
    if (_.isUndefined(this.memory.sources)){
      var sources = this.find(FIND_SOURCES);
      this.memory.sources = sources.map(source => source.id);
    }
    if (!_.isObject(this.memory.sources)){
      return undefined;
    }
    return this.memory.sources[this.id] = this.memory.sources[this.id] || {};
  },
  set: function(value){
    if (_.isUndefined(this.memory.sources)){
      this.memory.sources = {};
    }
    if (!_.isObject(this.memory.sources)){
      throw new Error('Could not set source memory');
    }
    this.memory.sources[this.id] = value;
  }
});

Object.defineProperty(Source.prototype, 'freeSpaceCount', {
    get: function () {
        if (this._freeSpaceCount == undefined) {
            if (this.room.memory.freeSpaceCount == undefined) {
                let freeSpaceCount = 0;
                [this.pos.x - 1, this.pos.x, this.pos.x + 1].forEach(x => {
                    [this.pos.y - 1, this.pos.y, this.pos.y + 1].forEach(y => {
                        if (Game.map.getTerrainAt(x, y, this.pos.roomName) != 'wall')
                                freeSpaceCount++;
                            }, this);
                    }, this);
                this.memory.freeSpaceCount = freeSpaceCount;
            }
            this._freeSpaceCount = this.memory.freeSpaceCount;
        }
        return this._freeSpaceCount;
    },
    enumerable: false,
    configurable: true
});



Object.defineProperty(Room.prototype, 'mySpawns', {
  get: function() {
    if (!this._mySpawns) {
      if (!this.memory.mySpawns) {
        this.memory.mySpawns = this.find(FIND_MY_SPAWNS)
          .map(mySpawns => mySpawns.id);
      }
      this._mySpawns = this.memory.mySpawns.map(id => Game.getObjectById(id));
    }
    return this._mySpawns;
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'controllers', {
  get: function() {
    if (!this._controllers) {
      if (!this.memory.controllers) {
        this.memory.controllers = this.find(FIND_MY_STRUCTURES, {
          filter: (s) => {
            return s.structureType == STRUCTURE_CONTROLLER
          }
        }).map(controllers => controllers.id);
      }
      this._controllers = this.memory.controllers.map(id => Game.getObjectById(id));
    }
    return this._controllers;
  },
  enumerable: false,
  configurable: true
});

Object.defineProperty(Room.prototype, 'energyCapped', {
  get: function() {
    if (!this._energyCapped) {
      this._energyCapped = (this.energyAvailable >= this.energyCapacityAvailable);
    }
    return this._energyCapped;
  },
  enumerable: false,
  configurable: true
});


Object.defineProperty(Source.prototype, 'memory', {
    configurable: true,
    get: function() {
        if(_.isUndefined(Memory.Sources)) {
            Memory.mySourcesMemory = {};
        }
        if(!_.isObject(Memory.Sources)) {
            return undefined;
        }
        return Memory.Sources[this.id] =
                Memory.Sources[this.id] || {};
    },
    set: function(value) {
        if(_.isUndefined(Memory.Sources)) {
            Memory.Sources = {};
        }
        if(!_.isObject(Memory.Sources)) {
            throw new Error('Could not set source memory');
        }
        Memory.Sources[this.id] = value;
    }
});

/*
Object.defineProperty(Source.prototype, 'freeSpaceCount', {
    get: function () {
        if (this._freeSpaceCount == undefined) {
            if (this.memory.freeSpaceCount == undefined) {
                let freeSpaceCount = 0;
                [this.pos.x - 1, this.pos.x, this.pos.x + 1].forEach(x => {
                    [this.pos.y - 1, this.pos.y, this.pos.y + 1].forEach(y => {
                        if (Game.map.getTerrainAt(x, y, this.pos.roomName) != 'wall')
                                freeSpaceCount++;
                            }, this);
                    }, this);
                this.memory.freeSpaceCount = freeSpaceCount;
            }
            this._freeSpaceCount = this.memory.freeSpaceCount;
        }
        return this._freeSpaceCount;
    },
    enumerable: false,
    configurable: true
});
*/


var initializeRoomData = {
  run: function() {
    if (Memory.roomData == null) {
      console.log('INITIALIZE ROOM DATA');
      var sources = _.sortBy(Game.spawns.Spawn1.room.find(FIND_SOURCES), s => Game.spawns.Spawn1.pos.getRangeTo(s));
      var emptySource = new Array(sources.length + 1);
      emptySource[sources.length] = 0;

      for (var i in sources) {
        var look = Game.spawns.Spawn1.room.lookAtArea(sources[i].pos.y - 1, sources[i].pos.x - 1, sources[i].pos.y + 1, sources[i].pos.x + 1, true);
        emptySource[i] = 0;

        for (var j in look) {
          switch (look[j].type) {
            case 'terrain':
              if (look[j].terrain != 'wall') {
                emptySource[i]++;
                emptySource[sources.length]++;
              }
              break;
            case 'creep':
              break;
            case 'structure':
              break;
          }
        }
      }
      Memory.roomData = {
        'emptySource': emptySource
      };
    }
  }
};

module.exports = initializeRoomData;
