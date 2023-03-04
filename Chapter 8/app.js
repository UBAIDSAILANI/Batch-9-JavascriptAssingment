// Q#1

var ch = prompt("Enter the value");
var index = 0;

var a = ch.charCodeAt(index);
console.log(a);
if (a>=65 && a<=90){
    alert(" is Capital alphabets")
}
else if(a>=97 && a<=122){
    alert("It is small word");
}
else if(a>=48 && a<=57){
alert("Given value is number")
}
else{
    alert("It is a special character.")
}
//q#2
var num1 = +prompt("Enter the nUmber");

var num2 = +prompt("Enter the number2");
var result = num1 + num2;
if(result >= 10){
    alert("It is a greater number");
}
else {
    alert("It is a small number")
}
//q#3
var number = +prompt("Enter the number");
if (number < 0 ){
    alert("it is negative number");
}
else if (number > 0 ){
    alert("It is positive number");
}
else {
    alert("It is zero")
}
// Q#4
var character = prompt("Enter the Number");
var index = 0;
var i = character.charCodeAt(index);
if (i = 65){
    alert(true);
}
else if (i = 69){
    alert(true);
}
else if(i=73){
    alert(true);
}
else if(i = 79){
    alert(true);
}
else if(i = 85){
    alert(true);
}
else{
    alert(false)
}
//Q#5
var password = "Ubaidrehman91";
var putPassword = prompt("Enter the Password");
if (putPassword === password){
    alert("Correct Password");
}
else if (putPassword == "" || " "){
    alert("Enter the Password");
}
else if(putPassword != password ){
alert("Wrong Password");
}
else{
    alert("Insan banja")
}
// Q#6
var greeting;
var hour = 20;
if (hour < 18) {
    greeting = "Good day";
    alert (greeting);
}
else
{greeting = "Good evening";
alert(greeting)}
// q#7
var time = +prompt("Enter the Time" , "--:--")
if (time >= 0000 && time <= 1200){
    alert("Good morning");
}
else if(time>=1200 && time <= 1700){
    alert("Good afternoon")
}