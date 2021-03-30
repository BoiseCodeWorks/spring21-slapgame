import { ProxyState } from "../AppState.js"

class GameService {
  attack(dmg) {
    ProxyState.enemy.health -= dmg
    if (ProxyState.enemy.health < 0) {
      ProxyState.enemy.health = 0
    }
    ProxyState.enemy = ProxyState.enemy
  }

  // With multi attack object
  // attack(type) {
  //   if (ProxyState.enemy.attacks[type]) {
  //     ProxyState.enemy.health -= ProxyState.enemy.attacks[type]
  //     if (ProxyState.enemy.health < 0) {
  //       ProxyState.enemy.health = 0
  //     }
  //     ProxyState.enemy = ProxyState.enemy
  //   }
  // }

  //#region SECTION old code
  // kick() {
  //   ProxyState.enemy.health -= 10
  //   if (ProxyState.enemy.health < 0) {
  //     ProxyState.enemy.health = 0
  //   }
  //   ProxyState.enemy = ProxyState.enemy
  // }
  // punch() {
  //   ProxyState.enemy.health -= 5

  //   // force and update by setting the value to itself
  //   ProxyState.enemy = ProxyState.enemy
  // }
  // slap() {
  //   // NOTE the observer does not see nested value changes in complex types (objects, arrays)
  //   ProxyState.enemy.health--
  //   console.log(ProxyState.enemy.health)

  //   // force and update by setting the value to itself
  //   ProxyState.enemy = ProxyState.enemy
  // }
  //#endregion

}

export const gameService = new GameService()