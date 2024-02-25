// ********************************** Switch *****************************

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const monthN = 3

switch (monthN) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;

    default:
        console.log("Default case match")
        break;
}

const monthS = "April"

switch (monthS) {
    case "January":
        console.log("January")
        break;
    case "February":
        console.log("February")
        break;
    case "March":
        console.log("March")
        break;
    case "April":
        console.log("April")
        break;

    default:
        console.log("Default case match")
        break;
}