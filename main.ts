enum RadioMessage {
    message1 = 49434
}
// message -1
input.onButtonPressed(Button.A, function () {
    messageContainer += 1
    messagePicker()
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
    messagePicker()
})
function messagePicker () {
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
    } else if (messageContainer == 5) {
        stringContainer = "NTHG Much"
        basic.showString("NTHG Much")
    } else if (messageContainer == 6) {
        stringContainer = "Wrking"
        basic.showString("Wrking")
    } else if (messageContainer == 7) {
        stringContainer = "At School"
        basic.showString("At School")
    } else if (messageContainer == 8) {
        stringContainer = "Come Here"
        basic.showString("Come Here")
    } else if (messageContainer == 9) {
        stringContainer = "U Good?"
        basic.showString("U Good?")
    } else if (messageContainer == 10) {
        stringContainer = "Yeah"
        basic.showString("Yeah")
    } else if (messageContainer == 11) {
        stringContainer = "Not really"
        basic.showString("Not really")
    } else if (messageContainer == 12) {
        stringContainer = "Good Night"
        basic.showString("Good Night")
    } else if (messageContainer > 12) {
        messageContainer = 0
    }
}
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
    } else if (messageContainer > 12) {
        messageContainer = 0
    }
})
