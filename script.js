const textarea = document.querySelector("#text")
const button = document.querySelector("#btn")

button.addEventListener("click", () => {

   window.speechSynthesis.cancel() //parar qlq fala em andamento antes de iniciar uma nova fala
   const text = textarea.value // pega o valor digitado
   const speaks = new SpeechSynthesisUtterance(text) //objeto que representa o texto que sera falado 
   speaks.lang = 'pt-BR'

   window.speechSynthesis.speak(speaks) // inicia a leitura do texto 

} )