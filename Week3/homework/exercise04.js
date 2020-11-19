const shoppingCart = ["banans", "milk"]

function addShoppingCard(groceryItem) {

  shoppingCart.push("potato", groceryItem);

  for (i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart.length > 3) {
      shoppingCart.shift()
    }
  }
  console.log("You bought " + shoppingCart.join(", ") + "!")
}

addShoppingCard("apple")
addShoppingCard("pear");
addShoppingCard("tea")




