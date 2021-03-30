import { ProxyState } from '../AppState.js'
import { gameService } from '../Services/GameService.js'

/** Renders Enemy to the page */
function _draw() {
  let enemy = ProxyState.enemy
  // NOTE whenever a event needs to trigger a controller action
  // the whole path of app.controllerName.methodName must be provided
  document.getElementById('enemy').innerHTML = `
    <div class="card">
      <img class="card-img-top" src="${enemy.imgUrl}" alt="" style="width: 50vw">
      <div class="card-body">
        <h4 class="card-title">${enemy.name}</h4>
        <p class="card-text">Health: ${enemy.health}</p>
        <button class="btn btn-danger" onclick="app.gameController.slap()">Slap</button>
      </div>
    </div>
  `
}

export default class GameController {
  constructor() {
    // NOTE at the start of creating a controller register all the listeners for that controller
    // NOTE ProxyState.on takes the name of the property to watch, and method to run when it changes
    // this method should not be envoked only passed
    ProxyState.on('enemy', _draw)
    // then call any immediate function calls
    _draw()
  }


  slap() {
    // when creating a method for another class write the method name then ctr+. and select delcare method
    gameService.slap()
  }
}