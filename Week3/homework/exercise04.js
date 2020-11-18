const shoppingCart = ["banans", "milk"]

function addShoppingCard(groceryItem) {


  shoppingCart.push("potato", groceryItem);


  if (shoppingCart.length > 3) {
    shoppingCart.shift()
    console.log(shoppingCart.length);
  }

  console.log("You bought " + shoppingCart.join(", ") + "!")
}

addShoppingCard("apple")
addShoppingCard("pear");
addShoppingCard("tea")




