import validator from './validator.js'


// const numberNo = document.getElementById("noNumber")
const button1 = document.getElementById("button1")
const receberNum = document.getElementById("cardnumber")
const span = document.getElementById("span")
const result = document.getElementById("result")
// function press(event){
//   console.log("oi")
//   var x = event.charCode
//   if (x >= 48 && x <= 57) {
//     return true
//   }else{
//     return false
//   }
// }

// receberNum.addEventListener("keydown", press)

let cardNum
function getcardnumber() {
  if (receberNum.value.length >= 13 && receberNum.value.length <= 16 && Number(receberNum.value)) {
    document.getElementById("span").textContent = ""
    cardNum = (receberNum.value)
    let cardmask = validator.maskify(cardNum)
    let validatorr = validator.isValid(cardNum)
    if (validatorr) {
      document.getElementById("cardnumber").value = ""
      result.textContent = "O número de cartão com final: " + cardmask + " é válido. Continue para as próximas etapas."
    } else {
      document.getElementById("cardnumber").value = ""
      result.textContent = "O número de cartão com final: " + cardmask + " não é válido. Digite novamente."
    }
  }else{
    span.textContent = "Digite apenas números. Um cartão deve ter entre 13 a 16 números."
  }
}

button1.addEventListener("click", getcardnumber)



// #1c0021 #240047 #1c3166  #00a9d4 #40ffdc
