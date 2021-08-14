input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    radio.sendString("R")
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        `)
    radio.sendString("BOUTONA")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    radio.sendString("D")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    radio.sendString("G")
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    radio.sendString("AB")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # . .
        . # . # .
        . # # # .
        `)
    radio.sendString("BOUTONB")
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    radio.sendString("SECOUE")
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    radio.sendString("A")
})
radio.onReceivedValue(function (name, value) {
    if (name == "vitesse") {
        basic.showString("" + (value))
    }
})
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
	
})
