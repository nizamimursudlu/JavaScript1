let readingList = [
  {
    Title: "Harry Potter",
    Autor: "J. K. Rolling",
    alreadyRead: true
  },
  {
    Title: "The Lord Of The Rings",
    Autor: "J. R. R. Tolkien",
    alreadyRead: false
  },
  {
    Title: "The Alchemist",
    Autor: "Paulo Coelho",
    alreadyRead: true
  }
]
//for (let key in readingList)
for (let i = 0; i < readingList.length; i++) {

  console.log(readingList[i].Title + " by " + readingList[i].Autor);

  if (readingList[i].alreadyRead === true) {
    console.log("You already read " + readingList[i].Title);
  }

  else { console.log("You still need to read " + readingList[i].Title); }
}

//return eadingList.alreadyRead
