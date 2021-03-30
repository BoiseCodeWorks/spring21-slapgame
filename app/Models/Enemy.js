export default class Enemy {
  constructor(name, imgUrl, hp = Math.floor((Math.random() * 100) + 100)) {
    // order of properties doesn't matter
    this.name = name
    this.health = hp
    this.imgUrl = imgUrl
    this.hits = 0
  }
}