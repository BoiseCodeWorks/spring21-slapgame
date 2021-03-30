import { ProxyState } from "../AppState.js"

class GameService {
  slap() {
    // NOTE the observer does not see nested value changes in complex types (objects, arrays)
    ProxyState.enemy.health--
    console.log(ProxyState.enemy.health)

    // force and update by setting the value to itself
    ProxyState.enemy = ProxyState.enemy
  }

}

export const gameService = new GameService()