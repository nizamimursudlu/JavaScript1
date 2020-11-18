

const numChildren = [1, 2, 3, 4, 5]
const partnerNames = ["Jessika", "Mona", "Marika", "Alice", "Anna"]
const locations = ["Amsterdam", "Paris", "London", "Madrid", "Berlin"]
const jobs = ["super star", "doctor", "vet", "manager", "fireman"]
function tellFortune(numChildren, partnerNames, locations, jobs) {
  let randomNumber = Math.floor(Math.random() * 5)
  let fortunedChildrenfort = numChildren[randomNumber];
  let fortunedPartner = partnerNames[randomNumber];
  let fortunedLocation = locations[randomNumber];
  let fortunedJob = jobs[randomNumber];
  console.log("You will be a " + fortunedJob + " in " + fortunedLocation + ", married to " + fortunedPartner + " with " + fortunedChildrenfort + " kids.")
}
tellFortune(numChildren, partnerNames, locations, jobs)
tellFortune(numChildren, partnerNames, locations, jobs)
tellFortune(numChildren, partnerNames, locations, jobs)