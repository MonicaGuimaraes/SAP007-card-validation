const validator = { 
   maskify: function(nmber){
     let mask = ""
     for (let ind=0; ind < nmber.length; ind++){
      if (ind >= ((nmber.length)-4)){
        mask = mask + nmber.charAt(ind)
      }else{
        mask= mask + "#"
      }
     }
     return mask //, console.log(mask)
   }

  ,isValid: function(numeroCartao){
    const cardList = Array.from(numeroCartao)
    let cardListRev = cardList.reverse()
    let sum = 0
    for (let i=0; i < cardListRev.length; i++){
      if (i % 2 != 0){
        cardListRev[i] = (Number(cardListRev[i])) * 2
        if(cardListRev[i] > 9){
          cardListRev[i] = cardListRev[i] - 9
          sum = sum + Number(cardListRev[i])
        }else{
          sum = sum + (cardListRev[i])
        }
      }else{
        sum = sum + Number(cardListRev[i])
      }
    }
    if (sum % 10 === 0){
      return numeroCartao = true //, console.log("True")

    }else{
      return numeroCartao = false //, console.log("False")
    }

    // return console.log(cardListRev, sum)
  },

  bank: function(numeroCart){
    let bandeira = ''
    if(numeroCart.charAt(0)==4){
      bandeira = 'Visa'
    }
    if(numeroCart.charAt(0)==3 && numeroCart.charAt(1)==0 && 
      numeroCart.charAt(2)>=0 && numeroCart.charAt(2)<=5){
      bandeira = "Diner's Club / Carte Blanche"
    }
    if(numeroCart.charAt(0)==3 && numeroCart.charAt(1)==4){
      bandeira = "American Express"
    }
    if(numeroCart.charAt(0)==3 && numeroCart.charAt(1)==6){
      bandeira = "Diner's Club / International"
    }
    if(numeroCart.charAt(0)==3 && numeroCart.charAt(1)==7){
      bandeira = "American Express"
    }
  }
}

export default validator;