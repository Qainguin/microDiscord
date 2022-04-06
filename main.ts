enum RadioMessage {
    message1 = 49434
}
input.onPinPressed(TouchPin.P0, function () {
    radio.setGroup(2)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        . . . . .
        . . . . .
        `)
})
// message +1
input.onButtonPressed(Button.A, function () {
    messageContainer += 1
    if (messageContainer == 1) {
        stringContainer = "Hello!"
        basic.showString("Hello!")
    } else if (messageContainer == 2) {
        stringContainer = "Where r u?"
        basic.showString("Where r u?")
    } else if (messageContainer == 3) {
        stringContainer = "BRB"
        basic.showString("BRB")
    } else if (messageContainer == 4) {
        stringContainer = "WYD?"
        basic.showString("WYD?")
    } else {
    	
    }
})
input.onPinPressed(TouchPin.P2, function () {
    radio.setGroup(1)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
// sends string
input.onButtonPressed(Button.AB, function () {
    radio.sendString(stringContainer)
})
// shows string on other device
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
// message -1
input.onButtonPressed(Button.B, function () {
    messageContainer += -1
    if (messageContainer == 1) {
        stringContainer = "Hello!"
        basic.showString("Hello!")
    } else if (messageContainer == 2) {
        stringContainer = "Where r u?"
        basic.showString("Where r u?")
    } else if (messageContainer == 3) {
        stringContainer = "BRB"
        basic.showString("BRB")
    } else if (messageContainer == 4) {
        stringContainer = "WYD?"
        basic.showString("WYD?")
    } else {
    	
    }
})
input.onPinPressed(TouchPin.P1, function () {
    radio.setGroup(3)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
})
let stringContainer = ""
let messageContainer = 0
radio.setGroup(1)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
// makes it so that if messageContainer is less than 0 it will become 0
basic.forever(function () {
    if (messageContainer < 0) {
        messageContainer = 0
    }
})
