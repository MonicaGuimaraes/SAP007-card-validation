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
    if (sum % 10 == 0){
      return numeroCartao = true //, console.log("True")

    }else{
      return numeroCartao = false //, console.log("False")
    }

    // return console.log(cardListRev, sum)
  },

  flag: function(numeroCart){
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
}

export default validator;