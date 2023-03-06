// Q#1
var num1 = 3;
var num2 = 5;
var result = "Sum of " + num1 +" and " + num2 + " is " + (num1 + num2) + "\n";
document.write(result) ;
// Q#2
var num1 = 3;
var num2 = 5;
var result = "Substraction of " + num1 +" and " + num2 + " is " + (num1 - num2);
document.write(result);

// Q#2
var num1 = 3;
var num2 = 5;
var result = "Division of " + num1 +" and " + num2 + " is " + (num1 / num2);
document.write(result);
// Q#2
var num1 = 3;
var num2 = 5;
var result = "Modulus of " + num1 +" and " + num2 + " is " + (num1 % num2);
document.write(result);
// q#3 a
var mathExp;
document.write(mathExp);
// q#3b
mathExp = 5;
// d
mathExp = 5;
document.write(mathExp);
// e
mathExp++;
// f
document.write(mathExp);
// g
mathExp = mathExp + 7;
// h
document.write("Value after addition is " + mathExp);
//i
mathExp--
//j
document.write("value after decrement is " + mathExp);
//k
mathExp = mathExp % 3
//l
document.write("<b>" + "OutPut: " + "</b>" + "The reminder is " + mathExp);
// q#4
var costOne = 600;
var qty = +prompt("How many ticket you want to buy");
var totalCost = qty * costOne;
document.write("Total cost of your Tickets you buyed is " +totalCost+ " PKR")
// Q#5
var start = 4
for (var i = 1; i <= 10; i++  ){
    // var calculation = start * i;
    document.write(start + " X " + i + " = " + start * i +"</br>")
}
// q#6
var celcius = 25;
var farenheit = 70;
var cTf = (25 * (9/5))+32;
document.write("25c is equal to " + cTf + "Faranhiet");
var fTc = (70-32)* (5/9)
document.write("70f is equal to " +fTc + "Celcius");
// Q#7
var itemOnePrice = 650;
var itemTwoPrice = 100;
var item1qty = +prompt("Quantity of Item 1");
var item2qty = +prompt("Quantity of item 2");
var shipping = 100;
var total = (itemOnePrice*item1qty) + (itemTwoPrice*item2qty) +shipping;
document.write("The total cost of your order is " + total);
// q#8
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained/totalMarks)*100;
document.write("<h1>"+ " Marks Obtained "+ "</h1>" + "</br>");
document.write("Total Marks "+ totalMarks + "</br>");
document.write("Marks Obtained "+ marksObtained + "</br>");
document.write("Percentage " + percentage + "</br>");
// Q#9
var dollars = 10;
var saudiRiyals = 25;
var $rate = 285;
var riyalRate = 80;
var totalPkr = (dollars*$rate) + (saudiRiyals*80);
document.write("<h1>" + " Currency Rate"+ "</h1>");
document.write("<h2>"+"Total Currency in Pkr is "+ totalPkr +"</h2>")
// q#10
var add = 6;
add = add + 5;
add = add * 10;
add = add / 2;
document.write(add + "</br>");
// q#11
var currentYear = 2023;
var birthYear = 1991;
var age = currentYear - birthYear;
document.write("Age Calculator: " + "</br>");
document.write("Current Year: " + currentYear+ "</br>");
document.write("Birth Year: " +birthYear+ "</br>");
document.write("Your Age: " +age+ "</br>");
// Q#12
var r = 24;
var pi = 3.142;
var circumference = 2*pi*r;
var areaOfCircle = pi*r*r
document.write("Circumference of Circle : " +circumference+ "</br>");
document.write("Area of Circle : " +areaOfCircle+ "</br>");
// q#13
var snack = "Chocolate Chips";
var currentAge = 15;
var expectedAge = 65;
var perDaySnacks = 3;
var totalDays = (expectedAge-currentAge)*365;
var TotalSnackNeed = totalDays*perDaySnacks;
document.write("You will need " + TotalSnackNeed + "chocolate chip to last of your age")

