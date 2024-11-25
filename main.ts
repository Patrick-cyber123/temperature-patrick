let currenttemperature = 0
basic.forever(function () {
    currenttemperature = input.temperature()
    basic.showNumber(currenttemperature)
    basic.pause(1000)
    basic.clearScreen()
})
