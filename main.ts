radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == ID) {
        Tienes_pato = true
        basic.showIcon(IconNames.Duck)
    } else {
        Tienes_pato = false
    }
})
input.onGesture(Gesture.Shake, function () {
    if (Tienes_pato) {
        Enviar_a = randint(1, Jugadores)
        if (Enviar_a != ID) {
            Tienes_pato = false
            basic.clearScreen()
            radio.sendNumber(Enviar_a)
        }
    }
})
let Enviar_a = 0
let Tienes_pato = false
let ID = 0
let Jugadores = 0
radio.setGroup(42)
Jugadores = 3
// Cambiar cada jugador por un ID distinto
ID = 1
basic.showNumber(ID)
if (ID == 1) {
    Tienes_pato = true
} else {
    Tienes_pato = false
}
