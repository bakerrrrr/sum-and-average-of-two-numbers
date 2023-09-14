scene.setBackgroundColor(3)
let number1 = game.askForNumber("Number 1", 2)
let number2 = game.askForNumber("Number 2", 2)
let sum = number1 + number2
game.splash("Sum:", sum)
game.splash("Average", sum / 2)
game.reset()
