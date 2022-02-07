import validator from './validator.js'

const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const receberNum = document.getElementById("cardnumber")
const span = document.getElementById("span")
const result = document.getElementById("result")
let cardNum
const messageRed = "<br><p>não é válido. Digite novamente.</p>"
const messageGreen = "<br><p>é válido. Continue para as próximas etapas.</p>"
const message = "<p>O número de cartão com final:<br></p>"

function change(){
  document.getElementById("resultt").style.display = 'none'
  if (document.getElementById("resultt").style.display == 'none'){
    document.getElementById("resultt").style.display = 'block'
    document.getElementById("validator").style.display = 'none'
    document.getElementById("information").style.display = 'none'
  }
}
function changerev(){
  document.getElementById("resultt").style.display = 'block'
  if (document.getElementById("resultt").style.display == 'block'){
    document.getElementById("result").textContent = ""
    document.getElementById("resultt").style.display = 'none'
    document.getElementById("validator").style.display = 'block'
    document.getElementById("information").style.display = 'block'  
  }
}

function flag(numeroCart){
  let bandeira = ''
  if(numeroCart.charAt(0)==4){
    bandeira = ' Visa'
    return bandeira
  }
  if(numeroCart.charAt(0)==3){
    if(numeroCart.charAt(0)==3 && numeroCart.charAt(1)==4){
      bandeira = " American Express"
      return bandeira
    }else if(numeroCart.charAt(1)==6){
      bandeira = " Diner's Club / International"
      return bandeira
    }
    else if(numeroCart.charAt(1)==7){
      bandeira = " American Express"
      return bandeira
    }
    else if(numeroCart.charAt(1)==8){
      bandeira = " Diner's Club / Carte Blanche"
      return bandeira
    }else if(numeroCart.charAt(1)==0 && numeroCart.charAt(2)>=0 && 
    numeroCart.charAt(2)<=5){
      bandeira = " Diner's Club / Carte Blanche"
      return bandeira
    }else{
      bandeira = " JBC"
      return bandeira
    }
  }  
  if(numeroCart.charAt(0)==5 && numeroCart.charAt(1)>=1 && 
  numeroCart.charAt(1)<=5){
    bandeira = " MasterCard"
    return bandeira
  }
  if(numeroCart.charAt(0)==6 && numeroCart.charAt(1)==0 && 
  numeroCart.charAt(2)==1 && numeroCart.charAt(3)==1){
    bandeira = " Discover"
    return bandeira
  }
  if( numeroCart.charAt(0)==1 && numeroCart.charAt(1)==8 &&
   numeroCart.charAt(2)==0 && numeroCart.charAt(3)==0){
    bandeira = " JCB"
    return bandeira
  }
  if( numeroCart.charAt(0)==2){
    if(numeroCart.charAt(1)==1){
      if(numeroCart.charAt(2)==3 && numeroCart.charAt(3)==1){
        bandeira = ' JCB'
        return bandeira
      }else if(numeroCart.charAt(2)==4 && numeroCart.charAt(3)==9){
        bandeira = " Diner's Club / enRoute"
        return bandeira
      }
    }else if(numeroCart.charAt(1)==0 && numeroCart.charAt(2)==1 && 
    numeroCart.charAt(3)==4){
      bandeira = " Diner's Club / enRoute"
      return bandeira
    }
  }
  if(numeroCart.charAt(0)==6 && numeroCart.charAt(1)==0 && numeroCart.charAt(2)==6 &&
  numeroCart.charAt(3)==2){
    bandeira = " HiperCard"
    return bandeira
  }
  bandeira = " sem bandeira"
  return bandeira
}

function getcardnumber() {
  if (receberNum.value.length >= 13 && receberNum.value.length <= 16 && Number(receberNum.value)) {
    change()
    document.getElementById("span").textContent = ""
    cardNum = (receberNum.value)
    let cardmask = validator.maskify(cardNum)
    let validatorr = validator.isValid(cardNum)
    let bandeiraa = flag(cardNum)
    if (validatorr) {
      document.getElementById("cardnumber").value = ""
      result.insertAdjacentHTML("afterbegin", message + cardmask + bandeiraa + messageGreen) 
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
