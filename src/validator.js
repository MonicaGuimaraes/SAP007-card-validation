//import {} from './index.js'

const validator = { 
  valid: function(numeroCartao){
    const cardList = Int16Array.from(numeroCartao)
    let cardListRev = cardList.reverse()
    let sum = 0
    let message
    for (let i=0; i < cardListRev.length; i++){
      if (i % 2 != 0){
        cardListRev[i] = cardListRev[i] * 2
        if(cardListRev[i] > 9){
          cardListRev[i] = cardListRev[i] - 9
          sum = sum + Number(cardListRev[i])
        }else{
          sum = sum + Number(cardListRev[i])
        }
      }else{
        sum = sum + Number(cardListRev[i])
      }
    }
    if (sum % 10 === 0){
      message = "Este cartão é válido"
    }else{
      message = "Este cartão não é válido"
    }

    return console.log(cardListRev, sum, message)
  }
}

export default validator;
//   
//  }

  // ...
