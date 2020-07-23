var agora = new Date()
var hora = agora.getHours()


if (hora < 05 ) {
    console.log("Boa Madrugada")
} else if (hora < 12 ) {
    console.log("Bom dia")
} else if (hora < 18) {
   console.log("Boa tarde")
} else if (hora < 25) {
    console.log("Boa noite")
} 