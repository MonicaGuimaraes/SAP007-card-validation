import validator from './validator.js'



const button1 = document.getElementById("button1")
const receberNum = document.getElementById("cardnumber")
let cardNum

function getcardnumber(){
   cardNum = receberNum.value
   validator.valid(cardNum)
 }
button1.addEventListener("click", getcardnumber)





//tamanho = cardNum.length
//listNumberCard = Array.from(cardnumber) 
//console.log(listNumberCard, tamanho)
//for (var numberss = "" in listNumberCard)*/
