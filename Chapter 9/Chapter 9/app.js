// Q#1
var studentName = [];
var studentsName = {};
var arr = ["Ubaid", "qasim", "shahjee"];
var numArr = [1,2,3,4,5,6,7,8,66,44,];
var bool = [true , false];
var mixedArr = ["ubaid", "lives in baldia", 212, true];
var pakEdu = ["Ssc", "HSc", "Bcs", "BS", "Bcom", "Ms", "M.phil", 'pHd'];
alert(length.pakEdu)
document.write("<h1>"+ "Qualification \n" +"</h1>")
document.write(pakEdu[0] +"<br>")
document.write(pakEdu[1] +"<br>")
document.write(pakEdu[2] +"<br>")
document.write(pakEdu[3] +"<br>")
document.write(pakEdu[4] +"<br>")
document.write(pakEdu[5] +"<br>")
document.write(pakEdu[6] +"<br>")
document.write(pakEdu[7] +"<br>")
// q#2
var studentName = ["Ubaid", "Hashim", "Owais"];
var totalScore = 500;
var scores = [499, 498, 497];
var percentage1 = scores[0]/totalScore;
var percentage2 = scores[1]/totalScore;
var percentage3 = scores[2]/totalScore;

document.write("Score of " + studentName[0] +" is " + scores[0] + " Percentage " + percentage1 + " </br>")
document.write("Score of " + studentName[1] +" is " + scores[1] + " Percentage " + percentage2 + " </br>")
document.write("Score of " + studentName[2] +" is " + scores[2] + " Percentage " + percentage3 + " </br>")

// //Q#3
var colorName = ["Yellow ",  "Orange ", "Red ", "White ", "Green ", "Blue ", "Violet "];
document.write(colorName);
var color = prompt("Which color you want to add?");
colorName.unshift(color)
document.write(colorName);
var color = prompt("Which color you want to add?");
colorName.push(color)
document.write(colorName);

colorName.unshift("Pink " , " indigo")
document.write(colorName);

var index = prompt("In which index you want to add your color?")
var desireColor = prompt("Enter your Color");
colorName.splice(index, 0 , desireColor);
document.write(colorName)
var index = prompt("In which index you want to add your color?")
var  how= prompt("Enter your Color");
colorName.splice(index, how );
document.write(colorName);
// Q#4
var scoreOfStudents = [32,322, 432, 233, 153, 256];
scoreOfStudents.sort();
document.write(scoreOfStudents);
// Q#5
var cities = ["Karachi","Quetta", "Lahore", "Islamabad", "Peshawar", "Multan"]
var selectedCities = cities.slice(1,3)

console.log(selectedCities);
var arr = ["This", "is ", "my ", "Cat"];

var arr2 = arr.join(" ");
console.log(arr2)
