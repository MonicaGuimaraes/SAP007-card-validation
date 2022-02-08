import validator from './validator.js'

const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const receiveNum = document.getElementById("input-number")
const span = document.getElementById("span")
const result = document.getElementById("result-article")

let cardNum
const messageRed = "<br><p>não é válido. Digite novamente.</p>"
const messageGreen = "<br><p>é válido. Continue para as próximas etapas.</p>"
const message = "<p>O número de cartão com final:<br></p>"

function changePageResult(){
  document.getElementById("result").style.display = 'none'
  if (document.getElementById("result").style.display == 'none'){
    document.getElementById("result").style.display = 'block'
    document.getElementById("validator").style.display = 'none'
    document.getElementById("information").style.display = 'none'
  }
}
function changePageToInitial(){
  document.getElementById("result").style.display = 'block'
  if (document.getElementById("result").style.display == 'block'){
    document.getElementById("result-article").textContent = ""
    document.getElementById("result").style.display = 'none'
    document.getElementById("validator").style.display = 'block'
    document.getElementById("information").style.display = 'block'  
  }
}

function flag(numbersCard){
  let flagCard = ''
  if(numbersCard.charAt(0)==4){
    flagCard = ' Visa'
    return flagCard
  }
  if(numbersCard.charAt(0)==3){
    if(numbersCard.charAt(0)==3 && numbersCard.charAt(1)==4){
      flagCard = " American Express"
      return flagCard
    }else if(numbersCard.charAt(1)==6){
      flagCard = " Diner's Club / International"
      return flagCard
    }
    else if(numbersCard.charAt(1)==7){
      flagCard = " American Express"
      return flagCard
    }
    else if(numbersCard.charAt(1)==8){
      flagCard = " Diner's Club / Carte Blanche"
      return flagCard
    }else if(numbersCard.charAt(1)==0 && numbersCard.charAt(2)>=0 && 
    numbersCard.charAt(2)<=5){
      flagCard = " Diner's Club / Carte Blanche"
      return flagCard
    }else{
      flagCard = " JBC"
      return flagCard
    }
  }  
  if(numbersCard.charAt(0)==5 && numbersCard.charAt(1)>=1 && 
  numbersCard.charAt(1)<=5){
    flagCard = " MasterCard"
    return flagCard
  }
  if(numbersCard.charAt(0)==6 && numbersCard.charAt(1)==0 && 
  numbersCard.charAt(2)==1 && numbersCard.charAt(3)==1){
    flagCard = " Discover"
    return flagCard
  }
  if( numbersCard.charAt(0)==1 && numbersCard.charAt(1)==8 &&
   numbersCard.charAt(2)==0 && numbersCard.charAt(3)==0){
    flagCard = " JCB"
    return flagCard
  }
  if( numbersCard.charAt(0)==2){
    if(numbersCard.charAt(1)==1){
      if(numbersCard.charAt(2)==3 && numbersCard.charAt(3)==1){
        flagCard = ' JCB'
        return flagCard
      }else if(numbersCard.charAt(2)==4 && numbersCard.charAt(3)==9){
        flagCard = " Diner's Club / enRoute"
        return flagCard
      }
    }else if(numbersCard.charAt(1)==0 && numbersCard.charAt(2)==1 && 
    numbersCard.charAt(3)==4){
      flagCard = " Diner's Club / enRoute"
      return flagCard
    }
  }
  if(numbersCard.charAt(0)==6 && numbersCard.charAt(1)==0 && numbersCard.charAt(2)==6 &&
  numbersCard.charAt(3)==2){
    flagCard = " HiperCard"
    return flagCard
  }
  flagCard = " sem bandeira"
  return flagCard
}

function getCardNumber() {
  if (receiveNum.value.length >= 13 && receiveNum.value.length <= 16 && Number(receiveNum.value)) {
    changePageResult()
    document.getElementById("span").textContent = ""
    cardNum = (receiveNum.value)
    let cardMask = validator.maskify(cardNum)
    let validatorBoolean = validator.isValid(cardNum)
    let flagStr = flag(cardNum)
    if (validatorBoolean) {
      result.insertAdjacentHTML("afterbegin", message + cardMask + flagStr + messageGreen) 
    } else {
      result.insertAdjacentHTML('afterbegin' , message + cardMask + messageRed)
    }
    receiveNum.value = ""
  }else{
    span.textContent = "Digite apenas números. Um cartão deve ter entre 13 a 16 números."
  }
}

button1.addEventListener("click", getCardNumber)
button2.addEventListener("click", changePageToInitial)
