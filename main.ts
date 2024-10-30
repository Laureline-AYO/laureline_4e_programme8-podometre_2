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
input.onGesture(Gesture.Shake, function () {
    pas += 1
})
input.onGesture(Gesture.LogoDown, function () {
    pas += 1
})
let pas = 0
pas = 0
basic.showNumber(pas)
