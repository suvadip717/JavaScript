const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (val) {
  console.log(val); // js ruby java python cpp
});

coding.forEach((item) => {
  console.log(item); // js ruby java python cpp
});

function printme(item) {
  console.log(item); // js ruby java python cpp
}

coding.forEach(printme);

coding.forEach((value, index, arr) => {
  console.log(value, index, arr);
});
/*
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
  {
    languageName: "kotlin",
    languageFileName: "kt",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);       // javascript java python kotlin
});
