let Horse = function(name) {
    this.name = name
    this.position = 0
}

Horse.prototype.trot = function() {
    this.position += 0.5
}

Horse.prototype.gallup = function() {
    this.position += 1.5
}

export default Horse