let NewTemp = 0
let temp = 0
basic.forever(function () {
    NewTemp = input.temperature()
    NewTemp = NewTemp - 20
    if (NewTemp != temp) {
        temp = NewTemp
        for (let x = 0; x <= 4; x++) {
            for (let y = 0; y <= 4; y++) {
                led.unplot(x, y)
            }
        }
        for (let x = 0; x <= 4; x++) {
            for (let y = 0; y <= 4; y++) {
                if (4 - y < Math.floor(temp / 5)) {
                    led.plot(x, y)
                }
                if (4 - y == Math.floor(temp / 5) && x < temp % 5) {
                    led.plot(x, y)
                }
            }
        }
    }
})
