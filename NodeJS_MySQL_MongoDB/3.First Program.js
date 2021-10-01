//Script with command line

//To check version 
//node -v

console.log('Hey');

// When we will run this console in the browser console or command prompt we will get output 'Hey' followed by undefined because this statement is not returning anything.

//To run this script in the terminal 
//node filename

var a=20;
var b=30;
var c=40;
console.log(a+b+c);


//Interview Question
// is the console.log() statement is same in browser and in node js ?
// answer is No because in browser the console.log is the browser function but here in node js internally creates a script in its package.
// we can see this in node js documentation. Therefore console.log is not the part of javascript either its the property of browser or node.