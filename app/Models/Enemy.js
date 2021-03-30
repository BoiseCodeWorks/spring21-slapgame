export default class Enemy {
  constructor(name, imgUrl, hp = Math.floor((Math.random() * 100) + 100)) {
    // order of properties doesn't matter
    this.name = name
    this.health = hp
    this.imgUrl = imgUrl
    this.hits = 0
  }
}

// NOTE Now with custom attack values!
// export default class Enemy {
//   constructor(name, imgUrl, slap = 1, punch = 5, kick = 10, hp = Math.floor((Math.random() * 100) + 100)) {
//     // order of properties doesn't matter
//     this.name = name
//     this.health = hp
//     this.imgUrl = imgUrl
//     this.hits = 0
//     this.attacks = {
//       slap: slap,
//       punch: punch,
//       kick: kick
//     }
//   }
// }