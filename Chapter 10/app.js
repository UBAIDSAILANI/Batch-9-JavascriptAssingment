// q#1
document.write("<h1>" + " Empty Array " + "</h1>")
var arr = [[],[],[]];
// q#2
document.write("<h1>" + " ARRAY TO MATRIX " + "</h1>")

arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for (var i=0; i <arr.length; i++ ){
    for(var j=0; j < arr[i].length; j++){
        
        var arr2 = arr[i][j]
        document.write(arr2)
    }
    document.write("<br/>")
}
// q#3
document.write("<h1>" + " Counting " + "</h1>")

var counting =[];
for (var i=0; i <= 9; i++){
    document.write(counting.push(i))
    document.write("<br/>")
}
// Q#4
// document.write("<h1>" + " Table " + "</h1>")

// var table = +prompt("Enter the table");
// var till = +prompt("Enter the Length");

// for(var i=1; i <= till; i++){
//     document.write(table + " X " + i + " = " + table*i +" <br/>")
// }
// q#5
document.write("<h1>" + " Print Items " + "</h1>")
var fruits = ["Apple ", "Banana", "Mango", "Orange", "Strawberry"];
for(var i=0; i < fruits.length; i++){
    document.write(fruits[i] + "</br>");
    // for(var j=0; j<fruits.length; j++)
    document.write("Element at Index " + i + " is " + fruits[i] +"</br>")
}
// q#6
document.write("<h1>" + " Counting: " + "</h1>")
var newCounting = [];
for (var i=1; i <= 15; i++){
 
    document.write(newCounting.push(i));
}
//q#7
document.write("<h1>" + " Reverse: " + "</h1>")
var newCounting = [];
for (var i=0; i <= 10; i++){
    var rever= document.write(newCounting.push(i));
  document.write(newCounting.reverse())   
}
var even = [1,2,3,4,5,6,7,8];
if (even%2 === 0){
    
    
}