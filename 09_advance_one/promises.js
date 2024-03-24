// Ppromise One
const promiseOne = new Promise(function (resolve, reject) {
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

// Promise Two
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async resolve 2");
});

// Promise three
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Ajoy", email: "ajoy12@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// Promise Four
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true; // true or false using for checking function's work
    if (!error) {
      resolve({ username: "Sanker", password: "34323" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolve or rejected");
  });

// Promise Five
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Sundar", password: "34323" });
    } else {
      reject("ERROR: Sundar tell the truth");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();


// check a API
async function getAllusers(){
    try {
        const response = await fetch('https://dummy.restapiexample.com/api/v1/employees')
    
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("E: ", error)
    }
}

getAllusers()

// Check a API in different way
fetch("https://api.github.com/users/suvadip717")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log("E:", error)
})