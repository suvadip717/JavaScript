const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
  console.log(item); // js ruby java python cpp
  return item;
});

console.log(values); // undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNums = myNums.filter((num) => num > 4);
const newNums = myNums.filter((num) => {
  return num > 4;
});
console.log(newNums); // [ 5, 6, 7, 8, 9 ]

const newNumArray = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNumArray.push(num);
  }
});
console.log(newNumArray); // [ 5, 6, 7, 8, 9 ]

const Books = [
  { title: "Book1", genre: "history", publish: 1989, edition: 2004 },
  { title: "Book2", genre: "science", publish: 1979, edition: 2010 },
  { title: "Book3", genre: "Fiction", publish: 1992, edition: 2014 },
  { title: "Book4", genre: "Geography", publish: 1999, edition: 2017 },
  { title: "Book5", genre: "Story", publish: 2002, edition: 2020 },
  { title: "Book6", genre: "history", publish: 1994, edition: 2019 },
  { title: "Book7", genre: "English", publish: 2010, edition: 2023 },
  { title: "Book8", genre: "Fiction", publish: 1995, edition: 2022 },
  { title: "Book9", genre: "science", publish: 2000, edition: 2018 },
  { title: "Book10", genre: "Non-Fiction", publish: 2008, edition: 2020 },
];

let userBook = Books.filter((bk) => bk.genre === "history");
console.log(userBook)
/*
[
  { title: 'Book1', genre: 'history', publish: 1989, edition: 2004 },
  { title: 'Book6', genre: 'history', publish: 1994, edition: 2019 }
]
*/
userBook = Books.filter((bk) => {
  return bk.publish > 2000 && bk.edition === 2020;
});
console.log(userBook);
/*
[
  { title: 'Book5', genre: 'Story', publish: 2002, edition: 2020 },
  {
    title: 'Book10',
    genre: 'Non-Fiction',
    publish: 2008,
    edition: 2020
  }
]
*/