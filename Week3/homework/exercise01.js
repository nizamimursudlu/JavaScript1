function giveCompliment() {

  let allCompliments = ["great", "awesome", "cool", "smart", "amazing", "beautiful", "humble", "charming", "nice", "lovely"];
  pickedCompliment = allCompliments[Math.floor(Math.random() * 10)];
  console.log("You are " + pickedCompliment + " Nizami!")
}
giveCompliment()
giveCompliment()
giveCompliment() 