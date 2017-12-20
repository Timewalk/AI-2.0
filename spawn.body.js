// MOVE : 50
// WORK : 100
// CARRY : 50
// ATTACK : 80
// RANGED_ATTACK : 150
// HEAL : 250
// CLAIM : 600
// TOUGH : 10

var spawnBody = {
    run: function(type) {
      var bodyType;
      var energyCapacityAvailable = Game.spawns.Spawn1.room.energyCapacityAvailable;
      //energyCapacityAvailable = 300;
      switch (300) {
        case 300 :
          switch (type) {
            case 'generic':
              bodyType = [WORK, MOVE, CARRY, MOVE]; // 250 + 50
              break;
            case 'hauler':
              bodyType = [CARRY, MOVE, CARRY, MOVE, CARRY, MOVE]; // 300 + 0
              break;
            case 'worker':
              bodyType = [WORK, MOVE, CARRY, MOVE]; // 250 + 50
              break;
            case 'melee':
              bodyType = [ATTACK, MOVE, ATTACK, MOVE]; // 260 + 40
              break;
            case 'healer':
              bodyType = [HEAL, MOVE]; // 300 + 0
              break;
            case 'range':
              bodyType = [TOUGH, MOVE, RANGED_ATTACK, MOVE]; // 260 + 40
              break;
            case 'harvester':
              bodyType = [WORK, WORK, CARRY, MOVE]; // 300 + 0
              break;
            default:
              bodyType = [WORK, MOVE, CARRY, MOVE]; // 250 + 50
          }
          break;
        case 350 :
        switch (type) {
          case 'generic':
            bodyType = [WORK, MOVE, CARRY, MOVE, CARRY, MOVE]; // 350 + 0
            break;
          case 'hauler':
            bodyType = [CARRY, MOVE, CARRY, MOVE, CARRY, MOVE]; // 300 + 50
            break;
          case 'worker':
            bodyType = [WORK, MOVE, CARRY, MOVE, CARRY, MOVE]; // 350 + 0
            break;
          case 'melee':
            bodyType = [TOUGH, MOVE, ATTACK, MOVE, ATTACK, MOVE]; // 320 + 30
            break;
          case 'healer':
            bodyType = [HEAL, MOVE]; // 300 + 50
            break;
          case 'range':
            bodyType = [RANGED_ATTACK, RANGED_ATTACK, MOVE]; // 350 + 0
            break;
          case 'harvester':
            bodyType = [WORK, WORK, CARRY, MOVE]; // 300 + 50
            break;
          default:
            bodyType = [WORK, MOVE, CARRY, MOVE, CARRY, MOVE]; //350 + 0
        }
        break;
        case 400:
        switch (type) {
          case 'generic':
            bodyType = [WORK, MOVE, WORK, MOVE, CARRY, MOVE]; // 400 + 0
            break;
          case 'hauler':
            bodyType = [CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE]; // 400 + 0
            break;
          case 'worker':
            bodyType = [WORK, MOVE, WORK, MOVE, CARRY, MOVE]; // 400 + 0
            break;
          case 'melee':
            bodyType = [ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE]; // 390 + 10
            break;
          case 'healer':
            bodyType = [HEAL, MOVE, TOUGH, MOVE]; // 360 + 40
            break;
          case 'range':
            bodyType = [RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE]; // 400 + 0
            break;
          case 'harvester':
            bodyType = [WORK, WORK, WORK, CARRY, MOVE]; // 400 + 0
            break;
          default:
            bodyType = [WORK, MOVE, WORK, MOVE, CARRY, MOVE]; // 350 + 50
        }
        break;
        case 450:
        switch (type) {
          case 'generic':
            bodyType = [WORK, MOVE, WORK, MOVE, CARRY, MOVE]; // 400 + 50
            break;
          case 'hauler':
            bodyType = [CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE]; // 400 + 50
            break;
          case 'worker':
            bodyType = [WORK, MOVE, WORK, MOVE, CARRY, MOVE, CARRY, MOVE]; // 450 + 0
            break;
          case 'melee':
            bodyType = [ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE]; // 390 + 10
            break;
          case 'healer':
            bodyType = [HEAL, MOVE, TOUGH, MOVE]; // 360 + 40
            break;
          case 'range':
            bodyType = [RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE]; // 400 + 0
            break;
          case 'harvester':
            bodyType = [WORK, WORK, WORK, CARRY, MOVE]; // 400 + 0
            break;
          default:
            bodyType = [WORK, MOVE, WORK, MOVE, CARRY, MOVE]; // 400 + 50
        }
        break;
        case 500:
        switch (type) {
          case 'generic':
            bodyType = [WORK, MOVE, WORK, MOVE, CARRY, MOVE, CARRY, MOVE]; // 500
            break;
          case 'hauler':
            bodyType = [CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE]; // 500
            break;
          case 'worker':
            bodyType = [WORK, MOVE, WORK, MOVE, CARRY, MOVE, CARRY, MOVE]; // 500
            break;
          case 'melee':
            bodyType = [TOUGH, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE]; // 450 + 50
            break;
          case 'healer':
            bodyType = [TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, HEAL, MOVE]; // 480 + 20
            break;
          case 'range':
            bodyType = [TOUGH, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE]; // 460
            break;
          case 'harvester':
            bodyType = [WORK, WORK, WORK, WORK, CARRY, MOVE]; // 500
            break;
          default:
            bodyType = [WORK, MOVE, WORK, MOVE, CARRY, MOVE, CARRY, MOVE]; // 500
        }
        break;
        case 550:
        switch (type) {
          case 'generic':
            bodyType = [WORK, MOVE, WORK, MOVE, WORK, MOVE, CARRY, MOVE]; // 550
            break;
          case 'hauler':
            bodyType = [CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE]; // 500
            break;
          case 'worker':
            bodyType = [WORK, MOVE, WORK, MOVE, WORK, MOVE, CARRY, MOVE]; // 550
            break;
          case 'melee':
            bodyType = [ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE]; // 520
            break;
          case 'healer':
            bodyType = [HEAL, HEAL, MOVE]; // 550
            break;
          case 'range':
            bodyType = [RANGED_ATTACK, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE]; // 550
            break;
          case 'harvester':
            bodyType = [WORK, WORK, WORK, WORK, CARRY, MOVE]; // 500
            break;
          default:
            bodyType = [WORK, MOVE, WORK, MOVE, WORK, MOVE, CARRY, MOVE]; // 550
        }
        break;
        case 600:
        switch (type) {
          case 'generic':
            bodyType = [WORK, MOVE, WORK, MOVE, WORK, MOVE, CARRY, MOVE]; // 550
            break;
          case 'hauler':
            bodyType = [CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE]; // 600
            break;
          case 'worker':
            bodyType = [WORK, MOVE, WORK, MOVE, WORK, MOVE, CARRY, MOVE]; // 550
            break;
          case 'melee':
            bodyType = [ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE]; // 520
            break;
          case 'healer':
            bodyType = [HEAL, MOVE, HEAL, MOVE]; // 600
            break;
          case 'range':
            bodyType = [RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE]; // 600
            break;
          case 'harvester':
            bodyType = [WORK, WORK, WORK, WORK, WORK, CARRY, MOVE]; // 600
            break;
          default:
            bodyType = [WORK, MOVE, WORK, MOVE, WORK, MOVE, CARRY, MOVE]; // 550
        }
        break;
        case 650:
        switch (type) {
          case 'generic':
            bodyType = [WORK, MOVE, WORK, MOVE, WORK, MOVE, CARRY, MOVE, CARRY, MOVE]; // 650
            break;
          case 'hauler':
            bodyType = [CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE]; // 600
            break;
          case 'worker':
            bodyType = [WORK, MOVE, WORK, MOVE, WORK, MOVE, CARRY, MOVE, CARRY, MOVE]; // 650
            break;
          case 'melee':
            bodyType = [ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE]; // 650
            break;
          case 'healer':
            bodyType = [HEAL, MOVE, HEAL, MOVE]; // 600
            break;
          case 'range':
            bodyType = [RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE]; // 600
            break;
          case 'harvester':
            bodyType = [WORK, WORK, WORK, WORK, WORK, CARRY, MOVE]; // 600
            break;
          default:
            bodyType = [WORK, MOVE, WORK, MOVE, WORK, MOVE, CARRY, MOVE, CARRY, MOVE]; // 650
        }
        break;
        case 700:
        switch (type) {
          case 'generic':
            bodyType = [WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, CARRY, MOVE]; // 700
            break;
          case 'hauler':
            bodyType = [CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE]; // 700
            break;
          case 'worker':
            bodyType = [WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, CARRY, MOVE]; // 700
            break;
          case 'melee':
            bodyType = [ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE]; // 650
            break;
          case 'healer':
            bodyType = [HEAL, MOVE, HEAL, MOVE]; // 600
            break;
          case 'range':
            bodyType = [RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE]; // 600
            break;
          case 'harvester':
            bodyType = [WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE]; // 700
            break;
          default:
            bodyType = [WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, CARRY, MOVE]; // 700
        }
        break;
        case 750:
        switch (type) {
          case 'generic':
            bodyType = [WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, CARRY, MOVE]; // 700
            break;
          case 'hauler':
            bodyType = [CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE]; // 700
            break;
          case 'worker':
            bodyType = [WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, CARRY, MOVE]; // 700
            break;
          case 'melee':
            bodyType = [ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE]; // 650
            break;
          case 'healer':
            bodyType = [HEAL, MOVE, HEAL, MOVE]; // 600
            break;
          case 'range':
            bodyType = [RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE]; // 600
            break;
          case 'harvester':
            bodyType = [WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE]; // 700
            break;
          default:
            bodyType = [WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, CARRY, MOVE]; // 700
        }
        break;
        case 800:
        switch (type) {
          case 'generic':
            bodyType = [WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, CARRY, MOVE, CARRY, MOVE]; // 800
            break;
          case 'hauler':
            bodyType = [CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE]; // 700
            break;
          case 'worker':
            bodyType = [WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, CARRY, MOVE, CARRY, MOVE]; // 800
            break;
          case 'melee':
            bodyType = [ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE]; // 780
            break;
          case 'healer':
            bodyType = [HEAL, MOVE, HEAL, MOVE]; // 600
            break;
          case 'range':
            bodyType = [RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE]; // 800
            break;
          case 'harvester':
            bodyType = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE]; // 800
            break;
          default:
            bodyType = [WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, CARRY, MOVE, CARRY, MOVE]; // 800
        }
        break;
        default :
        switch (type) {
          case 'generic':
            bodyType = [WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, CARRY, MOVE, CARRY, MOVE]; // 800
            break;
          case 'hauler':
            bodyType = [CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE]; // 700
            break;
          case 'worker':
            bodyType = [WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, CARRY, MOVE, CARRY, MOVE]; // 800
            break;
          case 'melee':
            bodyType = [ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE]; // 780
            break;
          case 'healer':
            bodyType = [HEAL, MOVE, HEAL, MOVE]; // 600
            break;
          case 'range':
            bodyType = [RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE]; // 800
            break;
          case 'harvester':
            bodyType = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE]; // 800
            break;
          default:
            bodyType = [WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, CARRY, MOVE, CARRY, MOVE]; // 800
        }
        break;
      }
      console.log('energyCapacityAvailable : ' + energyCapacityAvailable);
      console.log('bodyType : ' + bodyType);
      return bodyType;
    }
  };

    module.exports = spawnBody;
