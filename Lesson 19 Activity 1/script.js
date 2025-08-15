// alert("Hello World")
// console.log("This is a simple script running in the browser.")

// var name = prompt("Please enter your name:")
// console.log("User's name is: " + name)

// var isTrue = confirm("Hi" + name + "\n Are u a Developer ?")

// if (isTrue) {
//     console.log("User is a Developer")
// }
// else {
//     console.log("User is not a Developer")
// }

// let x = 1;
// let y = 2;
// let z = x + y;
// console.log("The sum of x and y is: " + z);

// let str = "Hello, World!";
// console.log("String length is: " + str.length);
// let arr = [1, 2, 3, 4, 5];
// console.log("Array length is: " + arr);

// let x = "Anubhav Lal";
// let y = 1;
// console.log("The sum of X+Y is:" + (x + y));
// console.log("The type is:"+ typeof(x+y))

// const obj = {
//     "name": "Anubhav Lal",
//     "age" : 36,
//     "mobile num" : 9560058067
// }

// console.log("The Object Details are: 1.)Name: "+obj.name + " 2.) Age: " + obj.age + " 3.)Mobile Num: " + obj["mobile num"])
// obj["course"] = "Java Script"
// console.log(obj.course);

let a = prompt("Enter Age: ", "21");
let age = Number.parseInt(a);

// console.log("Age of Person",(age>10 && age<20) ? "Lies in range":"Doesnot Lie in Range");

switch (age) {
    case 1:
        console.log("Not a Valid Age");
        break;

    case 2:
        console.log("You are a Toddler");
        break;

    case 3:
        console.log("You can drive after some time");
        break;

    case 4:
        console.log("You can Drive");
        break;

    // default:
    //     console.log("Try Giving proper age")

}


