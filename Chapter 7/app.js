// q#1
var city = prompt("Enter the city name").toUpperCase();
if(city === "KARACHI"){
    alert("Welcome to The City of Lights");
}
else{
    alert("Welcome to the " + city);
}
// Q#2
var gender = prompt("Enter your Gender ").toLowerCase();
if(gender === "male"){
    alert("Welcome Sir ")
}
else if(gender === "female"){
    alert("Welcome Ma'am")
}
else{
    alert("Please write correct gender");
}
// Q#3

//q#4
var fuel = +prompt("How much fuel Remains");
if (fuel <= 1){
    alert("Please refill Your fuel")
}
else{
    alert("Your can go more")
}
q#5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (++b === 83){
alert("given condition for variable b is true");
}
else{
    alert("given condition in not true")
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}
// q#7
var secretNumber = 3;
var guess = +prompt("Enter the Secret number");
if(guess === secretNumber){
    alert("Bingo! Correct Answer");
}
else if(guess === secretNumber+1 || guess === secretNumber-1){
    alert("Close to correct Number")
}
//q#8
var num = +prompt("Enter the Number");
if (num%3 === 0 ){
    alert("it is divisible by 3")
}
// Q#9
var num = +prompt("Enter the Number")
if(num%2 === 0 ){
    alert("It is Even Number");
}
else{
    alert("It is Odd number")
}
//q#10
var T = +prompt("Enter the Temprature")
if (T >=40){
    alert("The Weather too hot outSide");
}
else if (T >=30){
    alert("The Weather is hot");
}
else if (T >=20){
    alert("The Weather is Normal");
}
else if (T >=10){
    alert("The Weather is cool");
}
else{
    alert("Namaz e Janaza Ka elan baad main kia jaye ga");
}
//q#11
var firstNum = +prompt("Enter the First number");
var oprater = prompt("Enter The operator")
var secondNum = +prompt("Enter the Second number");
if(oprater === "+"){
    alert(firstNum + secondNum)
}
else if(oprater === "-"){
    alert(firstNum - secondNum)
}
else if(oprater === "*"){
    alert(firstNum * secondNum)
}
else if(oprater === "/"){
    alert(firstNum / secondNum)
}
else{
    alert("Please write correct operator");
}