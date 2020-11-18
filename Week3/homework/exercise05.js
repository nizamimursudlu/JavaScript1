const cartForParty = {
  Beer: 2,
  Chips: 1.50,
  Wine: 2.25,
  Chocolate: 3.15,
  Water: 1.50
}
function calculateTotalPrice() {
  let onlyPrice = Object.values(cartForParty);
  let sum = 0
  for (let i = 0; i < onlyPrice.length; i++) {
    sum += onlyPrice[i]
  }
  console.log("Total: €" + sum)
}
calculateTotalPrice(cartForParty)




//for (i = 0; i < cartForParty.length; i++)
  //  a
//}



