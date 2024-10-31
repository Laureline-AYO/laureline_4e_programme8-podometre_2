input.onButtonPressed(Button.A, function () {
    basic.showNumber(pas)
})
input.onButtonPressed(Button.AB, function () {
    pas = 0
    basic.showNumber(pas)
})
input.onButtonPressed(Button.B, function () {
    if (pas >= 8000) {
        basic.showString("Bravo !")
    } else {
        basic.showString("Marchez encore !")
    }
})
let pas = 0
pas = 0
basic.showNumber(pas)
basic.forever(function () {
    if (input.isGesture(Gesture.Shake) || input.isGesture(Gesture.LogoDown)) {
        pas += 1
    }
})
