// 1. way to print in javascript
	//alert("hello");
	// document.write("this is doc write");

// 2. javascript console api
	// console.log("hello world");
	// console.warn("this is worning");
	// console.error("this is error");

// 3. javascript variable
	//	what are container? variable to contain data value
 var number1= 56;
 var number2 = 50;
 // console.log(number1+number2);

 // 4.data types in javascript.

 //numbers 
 var num1 = 22;
 var num2 = 56.47;

 //strings
 var str1 = "hello";
 var str2 = 'world';

 //objects
 var marks={
 	ravi:55,
 	aman:44,
 	azim:65.77
 }
 // console.log(marks);

 //Booleans

 var a = true;
 var b = false;
 // console.log(a,b);

  // var und = "undefined";
  // console.log(und);
//und and null are not equal
  var und;
  // console.log(und);

var n ="null";
// console.log(n);

/*
 there are two types of data types in javascript
 1.premitive data types: undefined, null, numbers, boolean, string, symbol
 2.refrence data types: arrays and objecyts
*/

var arr = [1,2,3,"red",5];
// console.log(arr);

//operator in javascript
//arithematic operators

var a = 100;
var b = 10;

// console.log("the value of a+b is",a+b);
// console.log("the value of a-b is",a-b);
// console.log("the value of a*b is",a*b);
// console.log("the value of a/b is",a/b);

// assingment operators
var c = b;
// console.log(c);
// c += 2; c+2;
// c -= 2; c-2;
// c *= 2; c*2;
// c /= 2; c/2;

//comaprison operator
 var x = 45;
 var y = 56;

 // console.log(x == y);
 // console.log(x >= y);
 // console.log(x <= y);
 // console.log(x < y);
 // console.log(x > y);

 //logical operators
 	//1.logical AND
 // console.log(true && true);
 // console.log(true && false);
 // console.log(false && false);
 // console.log(false && true);

 	//2. logical OR
 // console.log(true || true);
 // console.log(true || false);
 // console.log(false || false);
 // console.log(false || true);

 	//3.logical NOT(its makes t to false and vise versa)
 	// console.log(!true);
 	// console.log(!false);
 //Function in javascript
function avg(a,b){
	c = (a + b)/2;
	return c;
}
 // DRY = Do not repeat yourself 
c1 = avg(10,6);
c2 = avg(6,8);
// console.log(c1,c2);

//conditnals in javascript
	//if-else statement
var age =21;
// if (age > 8) {
// 	console.log("you are not a kid");
// }
// else{
// 	console.log("you are a kid");
// }


// overriding variable
/*
age =31;
// if-else ladder
if(age > 34){
	console.log("you are a kid");
}
else if(age > 22){
	console.log("you are not a kid");
}
else if(age > 40){
	console.log("bacche nahi ho");
}
else if(age > 56){
	console.log("tum bacche nahi ho");
}
else{
	console.log("you are a kid");
}
console.log("end of ladder");
*/

var arr = [1,2,3,4,5,6,7,8,9,0];
// console.log(arr);
/*for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

arr.forEach(function (element) {
	console.log(element);
})*/
// const a = 0; it can,t be changed

//loops
//while loop
/*var j = 5;
while(j<arr.length){
	console.log(arr[j]);
	j++; 
}*/

// do-while loop
// hepls to run atleast once

/*do{
	console.log(arr[j]);
	j++;
}while(j < arr.length);*/

//break and continue
/*for (var i = 0; i < arr.length; i++) {
	if (i==2) {
		// break;
		continue;
	}
	console.log(arr[i])
}*/

//array methods
// var myArr = ["fan","room",55,null,true];
// console.log(myArr.length);
// myArr.pop();
// myArr.push("rehan");
// myArr.shift();
// myArr.unshift("rehan");
// console.log(myArr.unshift("rehan"));
// myArr.toString();
// myArr.sort();
// console.log(myArr);

//string method in javaScript
var mylovelystring = "it is good";
// console.log(mylovelystring.length);
// console.log(mylovelystring.indexOf("it"));
// console.log(mylovelystring.indexOf("good"));
// console.log(mylovelystring.slice(1,3));
// d = mylovelystring.replace("it","he");
// console.log(d,mylovelystring);

var myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());
// console.log(myDate.getHours());

//DOM Manipulation
var elem = document.getElementById("click");
// console.log(elem);

var elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background = "pink";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text_success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);
tn = document.getElementsByTagName('div');
// console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "This is created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('p');
createdElement2.innerText = "This is created bold";
tn[0].replaceChild(createdElement2,createdElement);
// removeChild(element); --->removes an element

//selecting using query
sel = document.querySelector('.container');
// console.log(sel);
sel = document.querySelectorAll('.container');
// console.log(sel);

function clicked(){
	// console.log('the button was clicked')
}
window.onload = function(){
	// console.log('document was loaded');
}

// events in javaScript
firstcontainer.addEventListener('click',function(){
	document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked</b> "
	// console.log("we have clicked");
})

// firstcontainer.addEventListener('mouseover',function(){
// 	console.log("mouse on container");
// })

// firstcontainer.addEventListener('mouseout',function(){
// 	console.log("mouse out of container");
// })

// firstcontainer.addEventListener('mouseup',function(){
// 	console.log("mouse up when clicked on container");
// })

// firstcontainer.addEventListener('mousedown',function(){
// 	console.log("mouse down when clicked on container");
// })

//arrow function
// function summ (a,b){
// 	return a+b;
// }

//summ = (a,b)=>{
	// return a+b;
// }

logkaro = ()=>{
	document.querySelectorAll('.container')[1].innerHTML = "<b> we have settimeout fired</b>";
	console.log("i am your log");
}
//setTimeout and setinterval
//  clr =  setTimeout(logkaro, 2000);
// clr = setinterval(logkaro, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancle setInterval/setTimeout

// javaScript localStorage
//localStorage.setItem('name',"rehan");
// localStorage
// localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear();

// JSON

// obj = {name: "rehan",length: 1 ,a:{this: "that"}};
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);
// parsed = JSON.parse({"name":"rehan","length":1,"a":{"this":"that"}});
// console.log(parsed);

//Backtics - templet litrels
a = 55;
console.log(`this is my ${a}`)