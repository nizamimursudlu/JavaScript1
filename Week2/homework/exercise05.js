const drinkTypes = ['cola', 'lemonade', 'water'];
const drinkTray = [];
for (let i = 0; i < 5; i++) {
  for (let drinkNum = 0; drinkNum < 3; drinkNum++)
    drinkTray.push(drinkTypes[drinkNum])
  if (drinkNum = 3) { drinkNum = 0 }
}
console.log("Hey guys, I brought a " + drinkTray[0] + "," + drinkTray[1] + "," + drinkTray[2] + "," + drinkTray[3] + "," + drinkTray[4] + "!")
