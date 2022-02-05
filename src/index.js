import validator from './validator.js'

const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const receberNum = document.getElementById("cardnumber")
const span = document.getElementById("span")
let cardNum
const messageRed = "<br><p>não é válido. Digite novamente.</p>"
const messageGreen = "<br><p>é válido. Continue para as próximas etapas.</p>"
const message = "<p>O número de cartão com final:<br></p>"

function change(){
  if (document.getElementById("resultt").style.display = 'none'){
    document.getElementById("resultt").style.display = 'block'
    document.getElementById("validator").style.display = 'none'
    document.getElementById("information").style.display = 'none'
  }
}
function changerev(){
  if (document.getElementById("resultt").style.display = 'block'){
    document.getElementById("result").textContent = ""
    document.getElementById("resultt").style.display = 'none'
    document.getElementById("validator").style.display = 'block'
    document.getElementById("information").style.display = 'block'  
  }
}

function getcardnumber() {
  if (receberNum.value.length >= 13 && receberNum.value.length <= 16 && Number(receberNum.value)) {
    change()
    document.getElementById("span").textContent = ""
    cardNum = (receberNum.value)
    let cardmask = validator.maskify(cardNum)
    let validatorr = validator.isValid(cardNum)
    if (validatorr) {
      document.getElementById("cardnumber").value = ""
      result.insertAdjacentHTML("afterbegin", message + cardmask + messageGreen) 
    } else {
      document.getElementById("cardnumber").value = ""
      result.insertAdjacentHTML('afterbegin' , message + cardmask + messageRed)
    }
  }else{
    span.textContent = "Digite apenas números. Um cartão deve ter entre 13 a 16 números."
  }
}

button1.addEventListener("click", getcardnumber)
button2.addEventListener("click", changerev)
