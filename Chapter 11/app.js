// q#1
var firstName = prompt("Please type your First Name");
var lastName = prompt("Please type your last name");
var fullName = firstName + " " + lastName;
var d = new Date();
var time = d.getHours();
if(time > 17 && time < 22){
    alert("Good Evening " + fullName);
}
else if(time > 1 && time < 7){
    alert("Good night " + fullName);
}
else if(time > 7 && time <12 ){
    alert("Good morning " +fullName);
}
else{
    alert("Good AfterNoon " + fullName);
}
// q#2
var mobile = prompt("Which is your favourite Mobile");
var strLen = mobile.length
document.write("My favourite Mobile phone is " + mobile + "<br/>" + "Length of String is " + strLen)
// Q#3
var nation = "Pakistani".indexOf("n");

alert(nation)
// Q#4
var string = "Hello World".lastIndexOf("l");
alert(string)
// q#5
var word = "Pakistani".charAt(3);
alert(word);
// Q#6
var city = "HyderAbad";
var newCity = city.replace("Hyder", "Islam")
alert(newCity);
// Q#7
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&")
alert(newMessage)
// Q#8

var string = "472";
var type = typeof(string);
var integer = parseInt(string);


document.write("Value: " + string +"</br>");
document.write(type +"</br>");
document.write("new Value: " + integer +"</br>");
document.write("type of integer is " + typeof(integer) +"</br>")

// q#9
var write = prompt("Enter your character");
document.write("Upper Case: " + write.toUpperCase())
// Q#10
var write = prompt("new text");
document.write("new Text: " + write.charAt(0).toUpperCase() + write.slice(1))
// Q#11
var num = 35.36;
var string = num.toString();
var newSting = string.split(".").join("")
console.log(string);
console.log(newSting);

