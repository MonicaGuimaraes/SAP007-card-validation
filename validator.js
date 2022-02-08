const validator = { 
   maskify: function(numberCard){
     let mask = ""
     const fourLastNumbers = 4
     for (let ind=0; ind < numberCard.length; ind++){
      if (ind >= (numberCard.length - fourLastNumbers)){
        mask += numberCard.charAt(ind)
      }else{
        mask += "#"
      }
     }
     return mask
   },
   
  isValid: function(numberCard){
    const cardList = Array.from(numberCard)
    let cardListRev = cardList.reverse()
    let sum = 0

    for (let i=0; i < cardListRev.length; i++){
      let digit = Number(cardListRev[i])

      if (i % 2 !== 0){
        digit = digit * 2
        if(digit > 9){
          digit -= 9
        }
      } 
        sum += digit
    }

    if (sum % 10 == 0){
      return true

    }else{
      return false
    }
  }
}

export default validator;