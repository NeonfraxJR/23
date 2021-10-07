let x = 0
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    radio.setGroup(1)
    x = 1 * 6
    x = x + 7
    x = x / 4
    radio.sendNumber(x)
    basic.showString("Hello!")
    basic.showString("Hello!")
})
input.onButtonPressed(Button.B, function () {
	
})
