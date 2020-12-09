let hour = 0
let minute = 0
let second = 0

input.onButtonPressed(Button.A, function () {
    hour = hour + 1
    if (hour >= 24){
        hour = 0
    }
})

input.onButtonPressed(Button.B, function () {
    minute = minute + 1
    if (minute >= 60){
        minute = 0
    }
})

input.onButtonPressed(Button.AB , function () {
    let output = ""
    if (hour < 10){
        output = "0"
    }
    output = output + hour.toString() + ":"
    if (minute < 10){
        output = output + "0"
    }
    output = output + minute.toString() + "."

    if (second < 10){
        output = output + "0"
    }
    output = output + second.toString() + "."
    basic.showString(output + "      ")
})

basic.forever(function () {
    second = second + 1
    if (second >= 60){
        minute = minute + 1
        second = 0
    }
    if (minute >= 60){
        hour = hour + 1
        minute = 0
    }
    if (hour >= 24){
        hour = 0
    }
    control.waitMicros(1000*1000)

    pins.analogWritePin(AnalogPin.P0, Math.floor((1023/23)*hour))
    pins.analogWritePin(AnalogPin.P1, Math.floor((1023/60)*minute))
    pins.analogWritePin(AnalogPin.P2, Math.floor((1023/60)*second))
})
