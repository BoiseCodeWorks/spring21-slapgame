import GameController from "./Controllers/GameController.js";
import ValuesController from "./Controllers/ValuesController.js";


// Entry point into the application
// starts up all of our controllers
// connects the app to the dom
console.log(1)
class App {
  valuesController = new ValuesController()
  gameController = new GameController()
}

window["app"] = new App();
