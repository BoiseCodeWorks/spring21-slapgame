import Enemy from "./Models/Enemy.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

// all data for entire application exits within this object
class AppState extends EventEmitter {
  // NOTE the below is called JSDoc's it improves intellesense (it is not required)
  /** @type {Value[]} */
  values = []
  // The below adds intellesense for this property to be used as type Enemy
  /** @type {Enemy} */
  enemy = new Enemy('Red Dragon', 'https://art.pixilart.com/c68fd1494f04b9b.gif')

  // with multiple attacks
  // enemy = new Enemy('Red Dragon', 'https://art.pixilart.com/c68fd1494f04b9b.gif', 0, 1, 2)
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    // trigger listeners
    target.emit(prop, value)
    return true
  }
})




// state = {
//   currentTransaction: 0,
//   snacks: [new Snack(1, 'cheetos', '....')],
//   lastVended: null
// }


// class snack {
//   id: 13323
//   price= price
//   name= name
//   imgUrl= imgUrl
// }