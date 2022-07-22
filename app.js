
const PREZZO_AL_CHILOMETRO = 0.21
const SCONTO_PERCENTUALE_MINORENNI = 0.2
const SCONTO_PERCENTUALE_ANZIANI = 0.4

const inputDistanceElement = document.querySelector('input[name="distance"]')
const inputNameElement = document.querySelector('input[name="name"]')
const selectEtaElement = document.querySelector('select[name="eta"]')
console.log(inputDistanceElement, inputNameElement, selectEtaElement)
// utente compila il form
// nome. distanza, kilometri, seleziona fascia età

//recuperare pulsante dal dom
const submitElement = document.querySelector('input[type="submit"]')
console.log("submit")

//listener che ascolta l'evento "click"
submitElement.addEventListener('click', function () {
    console.log('click su submitElement')

    // console.log(
    //     inputDistanceElement.value,
    //     inputNameElement.value,
    //     selectEtaElement.value
    // )

   // recuperare il valore dall'input dei km
   const distance = inputDistanceElement.value 
   //recuperare il valore della fascia di età dalla select
   const eta = selectEtaElement.value
   //recuperare il valore del nome
   const name = inputNameElement.value

   //CALCOLO PREZZO DEL BIGLIETTO - prezzo base
   const basePrice = distance * PREZZO_AL_CHILOMETRO
   console.log(basePrice)

   let sconto = 0

  //CALCOLO DELLO SCONTO
  if ( eta === '1' ) {
     console.log('utente minorenne')
     sconto = basePrice * SCONTO_PERCENTUALE_MINORENNI
  }

  if ( eta === '2' ) {
    console.log('utente maggiorenne')
    sconto = 0
  }

 if ( eta === '3' ) {
    console.log('utente over65')
    sconto = basePrice * SCONTO_PERCENTUALE_ANZIANI
  }
})