// Q#1
var a = 10;
document.write(a);
a = ++a;
document.write(a);
a = a++;
document.write(a);
a = --a;
document.write(a);
a = a--;
document.write(a);
// q#2
var a = 2
var b = 1;
var result = --a - --b + ++b + b--;
document.write(result);
// q#3
var name= prompt("Please Enter your name");
alert("Good Evening " + name);
// q#4
var table = +prompt("Enter the number", 5);
for (var i=1; i <= 10; i++){
    document.write(table + " X " + i + " = " +table*i + "</br>");
}