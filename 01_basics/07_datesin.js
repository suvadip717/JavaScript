//Dates

let myDate = new Date()
console.log(typeof myDate)
console.log(myDate.toString()) //data and time
console.log(myDate.toDateString()) //data
console.log(myDate.toTimeString()) //time
console.log(myDate.toISOString()) //date in an ISO
console.log(myDate.toJSON()) //date in an ISO
console.log(myDate.toLocaleString()) //Date and time in local timezone format
console.log(myDate.toLocaleTimeString()) //local time

let myCreatedDate = new Date(2004, 5, 22)
console.log(myCreatedDate.toString())   //Tue Jun 22 2004 

console.log((new Date(2000, 4, 23, 6, 8, 2)).toString()) // 5/23/2000, 6:08:02 AM
console.log((new Date(2000, 4, 23, 6, 8, 2)).toLocaleString()) // 5/23/2000, 6:08:02 AM

console.log((new Date('2024-12-22')).toLocaleString())  //12/22/2024

//Time
let myTimeStamps = Date.now()
console.log(myTimeStamps)   //1707931812950
console.log(Math.floor(Date.now()/1000)) //1707931930

let newDate = new Date()
console.log(newDate)    //2024-02-14T17:35:17.873Z
console.log(newDate.getTime()) //1707932117873
console.log(newDate.getMonth()) //1
console.log(newDate.getFullYear()) //2024

newDate.toLocaleString('default',{
    weekday: 'long',
})