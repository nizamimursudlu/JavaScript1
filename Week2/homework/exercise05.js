const drinkTypes = ['cola', 'lemonade', 'water'];
const drinkTray = [];
for (let i = 0; i < 5; i++) {
  drinkTray.push(drinkTypes[Math.floor(Math.random() * 3)])
}
console.log("Hey guys, I brought a " + drinkTray[0] + "," + drinkTray[1] + "," + drinkTray[2] + "," + drinkTray[3] + "," + drinkTray[4] + "!")
