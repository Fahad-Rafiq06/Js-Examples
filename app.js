// ============ Chp 1 : Alert ===============

// alert("Thanks for your input!");

// =========== Chp 2 : Variables For Strings ==============

// var name = "Mark";

// var nationality;
// nationality = "U.S.";


// var lessonAuthor = "Mark";
// var guyWhoKeepsSayingHisOwnName = "Mark";
// var x = "Mark";

// var thanx = "Thanks for your input!"
// alert(thanx);

// ================= Chp 3: Variables for Numbers ===============

// var originalNum = 23;
// var newNum = originalNum + 7;

// var originalNum = 23;
// var numToBeAdded = 7;
// var newNum = originalNum + numToBeAdded;

// ============= Chp 4: Variable Names Legal and Illegal =============

// userResponse
// userResponseTime
// userResponseTimeLimit
// response

// ============= Chp 5: Math expressions:Familiar operators =============

// var num = 10;
// var popularNumber = num + 200;

// var num = 10;
// var anotherNum = 1;
// var popularNumber = num + anotherNum;

// ============= Chp 6: Math expressions:Unfamiliar operators =============

// num++ === num = num + 1;

// var num = 1;
// var newNum = --num;

// ============= Chp 7: Math expressions:Eliminating ambiguity =============


// var totalCost = 1 + 3 * 4;

// var resultOfComputation = (2 * 4) * 4 + 2;

// var totalCost = (1 + 3) * 4;

// resultOfComputation = ((2 * 4) * 4) + 2;

// resultOfComputation = (2 * 4) * (4 + 2);


// ============= Chp 8: Concatenating text strings =============

// var message = "Thanks for your input!";
// alert(message);

// alert("Thanks, " + userName + "!");

// var message = "Thanks, ";
// var userName = "Susan";
// var banger = "!";
// var customMess = message + userName + banger;
// alert(customMess);

// ============= Chp 9: Prompts =============

// var spec = prompt("Your species?", "human");

// var question = "Your species?";
// var defaultAnswer = "human";
// var spec = prompt(question, defaultAnswer);

// ============= Chp 10: if statements =============

// var x = prompt("Where does the Pope live?");
// if (x === "Vatican") {
// alert("Correct!");
// }

// var correctAnswer = "Vatican";
// if (x === correctAnswer) {
// alert("Correct!");
// }

// var correctAnswer = "Vatican";
// if (x === correctAnswer) {
// score++;
// userIQ = "genius";
// alert("Correct!");
// }

// ============= Chp 11: Comparison operators =============

// if (fullName === "Mark" + " " + "Myers") {
//     if (fullName === firstName + " " + "Myers") {
//         if (fullName === firstName + " " + "Myers") {
//             if (fullName === "firstName + " " + lastName) {
//             if (totalCost === 81.50 + 135) {
//                 if (totalCost === materialsCost + 135) {
//                     if (totalCost === materialsCost + laborCost) {
//                         if (x + y === a - b) {
// }

// In the examples below, all the conditions are true.

// if (1 > 0) {
//     if (0 < 1) {
//         if (1 >= 0) {
//             if (1 >= 1) {
//                 if (0 <= 1) {
//                     if (1 <= 1) { }

// ============= Chp 12: if...else and else if statements =============

// var x = prompt("Where does the Pope live?");
// if (x === "Vatican") {
// alert("Correct!");
// }
// if (x !== "Vatican") {
// alert("Wrong answer");
// }

// if (x === "Vatican") {
//     alert("Correct!");
//     }
//     else {
//     alert("Wrong answer");
//     }

// var correctAnswer = "Vatican";
// if (x === correctAnswer) {
// alert("Correct!");
// }
// else {
// score--;
// userIQ = "problematic";
// alert("Incorrect");
// }

// ============= Chp 13: Testing sets of conditions =============

// if (weight > 300 && time < 6) {
//     alert("Come to our tryout!");
// }
// else {
//     alert("Come to our cookout!");
// }

// if (SAT > avg || GPA > 2.5 || sport === "football") {
//     alert("Welcome to Bubba State!");
//     }
//     else {
//     alert("Have you looked into appliance repair?");
//     }

// ============= Chp 14: if statements nested =============
// if ((x === y || a === b) && c === d) {
//     g = h;
// }
// else {
//     e = f;
// }

// if (c === d) {
//     if (x === y) {
//         g = h;
//     }
//     else if (a === b) {
//         g = h;
//     }
//     else {
//         e = f;
//     }
// }
// else {
//     e = f;
// }

// ============= Chp 15: Arrays =============

// var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];

// var mixedArray = [1, "Bob", "Now is", true];

// ============= Chp 16: Arrays: Adding and removing elements =============

// var pets = [];

// pets[0] = "dog";
// pets[1] = "cat";
// pets[2] = "bird";

// pets.push("fish", "ferret");
// pets.pop();

// console.log(pets)

// ============= Chp 17: Arrays: Removing, inserting, and extracting elements =============

// pets.shift();

// pets.unshift("fish", "ferret");

// pets.splice(2, 2, "pig", "duck", "emu");

// pets.splice(2, 2);

// var noPets = pets.slice(2, 4);

// ============= Chp 18: for loops =============

// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//     }
// }

// ============= Chp 19: for loops: Flags, Booleans, array length, and loopus interruptus =============

// var matchFound = "no";
// for (var i = 0; i <= 4; i++);
// if (cityToCheck === cleanestCities[i]) {
//     matchFound = "yes";
//     alert("It's one of the cleanest cities");
// }

// if (matchFound === "no") {
//     alert("It's not on the list");
//     1
// }

// var matchFound = false;
// for (var i = 0; i <= 4; i++);
// if (cityToCheck === cleanestCities[i]) {
// matchFound = true;
// alert("It's one of the cleanest cities");
// }

// if (matchFound === false) {
// alert("It's not on the list");
// 1}

// var matchFound = false;
// for (var i = 0; i <= 4; i++){
// if (cityToCheck === cleanestCities[i]) {
//     matchFound = true;
//     alert("It's one of the cleanest cities");
// break;
// }
// }
// if (matchFound === false) {

//     alert("It's not on the list");

// }

// var numElements = cleanestCities.length;
// var matchFound = false;
// for (var i = 0; i < numElements; i++){
// if (cityToCheck === cleanestCities[i]) {
//     matchFound = true;
//     alert("It's one of the cleanest cities");
//     break;
// }
// }

// if (matchFound === false) {

//     alert("It's not on the list");

// }

// ============= Chp 20: for loops nested =============

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {
//     for (var j = 0; j < lastNames.length; j++) {
//         fullNames.push(firstNames[i] + lastNames[j]);
//     }
// }

// ============= Chp 21: Changing case =============

// var cityToCheck = prompt("Enter your city");
// cityToCheck = cityToCheck.toLowerCase();
// var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//     }
// }

// ============= Chp 22: Strings: Measuring length and extracting parts =============

// var someChars = cityToCheck.slice(2);

// var firstChar = cityToCheck.slice(0, 1);
// var otherChars = cityToCheck.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChars = otherChars.toLowerCase();
// var cappedCity = firstChar + otherChars;

// var month = prompt("Enter a month");
// var charsInMonth = month.length;
// if (charsInMonth > 3) {
// monthAbbrev = month.slice(0, 3);
// }

// ============= Chp 23: Strings: Finding segments =============

// var firstChar = text.indexOf("World War II");

// var firstChar = text.indexOf("World War II");
// if (firstChar !== -1) {
//     text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
// }

// var text = "To be or not to be.";
// var segIndex = text.lastIndexOf("be");

// ============= Chp 24: Strings: Finding a character at a location =============

// var firstChar = firstName.charAt(0)

// var lastChar = name.charAt(name.length - 1);

// for (var i = 0; i < text.length; i++) {
//     if (text.charAt(i) === "!") {
//         alert("Exclamation point found!");
//         break;
//     }
// }

// ============= Chp 25: Strings: Replacing characters =============

// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//         text = text.slice(0, 1) + "the Second World War" + text.slice(i + 12);
//     }
// }

// var firstChar = text.indexOf("World War II");
// if (firstChar !== -1) {
//     text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);

// }

// var newText = text.replace("World War II", "the Second World War");

// text = text.replace("World War II", "the Second World War");

// var newText = text.replace(/World War II/g, "the Second World War");

// ============= Chp 26: Rounding numbers =============

// var numberOfStars = Math.round(scoreAvg);

// scoreAvg = Math.round(scoreAvg);

// var scoreAvg = Math.round(.0678437);

// var scoreAvg = Math.ceil(.000001);

// var scoreAvg = Math.floor(.999999);

// ============= Chp 27: Generating random numbers =============

// var randomNumber = Math.random();

// ============= Chp 28: Converting strings to integers and decimals =============

// var currentAge = prompt("Enter your age.");
// var yearsEligibleToVote = currentAge - 18;

// var result = "200" + 150;

// var currentAge = prompt("Enter your age.");
// var qualifyingAge = parseInt(currentAge) + 1;

// var myInteger = parseInt("1.9999");

// var myFractional = parseFloat("1.9999");

// ============= Chp 29: Converting strings to numbers, numbers to strings =============

// var integerString = "24"
// var num = Number(integerString);

// var floatingNumString = "24.9876";
// var num = Number(floatingNumString);

// var numberAsNumber = 1234;
// var numberAsString = numberAsNumber.toString();

// ============= Chp 30: Controlling the length of decimals =============

// var prettyTotal = total.toFixed(2);

// var currencyTotal = "$" + prettyTotal;

// var str = num.toString();
// if (str.charAt(str.length - 1) === "5") {
//     str = str.slice(0, str.length - 1) + "6";
// }
// num = Number(str);
// prettyNum = num.toFixed(2);

// ============= Chp 31: Getting the current date and time =============

// var dateString = rightNow.toString();

// var rightNow = new Date();
// var theDay = rightNow.getDay();

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];

// ============= Chp 32: Extracting parts of the date and time =============

// var d = new Date();
// var currentMonth = d.getMonth();

// var dayOfMonth = d.getDate();

// var currYr = d.getFullYear();

// var currentHrs = d.getHours();

// var currMins = d.getMinutes();

// var currSecs = d.getSeconds()

// var currMills = d.getMilliseconds();

// var millsSince = d.getTime();

// ============= Chp 33: Specifying a date and time =============

// var today = new Date();
// var doomsday = new Date("June 30, 2035");
// var msToday = today.getTime();
// var msDoomsday = doomsday.getTime();
// var msDiff = msDoomsday - msToday;
// var dDiff = msDiff / (1000 * 60 * 60 * 24);
// dDiff = Math.floor(dDiff);

// var d = new Date("July 21, 1983 13:25:00");

// ============= Chp 34: Changing elements of a date and time =============

// var d = new Date();
// d.setFullYear(2001);

// var d = new Date();
// d.setMonth(11);

// var d = new Date();
// d.setDate(15);

// var d = new Date();
// d.setHours(13);

// var d = new Date();
// d.setMinutes(05);

// var d = new Date();
// d.setSeconds(55);

// var d = new Date();
// d.setMilliseconds(867);

// ============= Chp 35: Functions =============

// function tellTime() {
//     var now = new Date();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();
//     alert("Current time: " + theHr + ":" + theMin);
// }

// tellTime();

// ============= Chp 36: Functions: Passing them data =============

// function greetUser() {
//     alert("Hello, there.");
// }

// greetUser("Hello, there.");

// function greetUser(greeting) {
//     alert(greeting);
//     }

//     var whatever = "Hello, there.";
// greetUser(whatever);

// ============= Chp 37: Functions: Passing data back from them =============

// function calcTot(merchTot) {
//     var orderTot;
//     if (merchTot >= 100) {
//         orderTot = merchTot;
//     }
//     else if (merchTot < 50.01) {
//         orderTot = merchTot + 5;
//     }
//     else {
//         orderTot = merchTot + 5 + (.03 * (merchTot - 50));
//     }
//     return orderTot;
// }

// var totalToCharge = calcTot(79.99);

// var totalToCharge = 85.00;

// var totalToCharge = merchTotal;

// var totalToCharge = merchTotal + ship + tax;

// var totalToCharge = calcTot(79.99);

// ============= Chp 38: Functions: Local vs. global variables =============

// Global Variable: 
// var theSum;
// addNumbers();

// function addNumbers() {
//     theSum = 2 + 2;
//     }

// Local Variable:
// function addNumbers() {
//     var theSum = 2 + 2;
//     }

// ============= Chp 39: switch statements:How to start them =============

// switch (dayOfWk) {
//     case "Sat":
//         alert("Whoopee");
//         break;
//     case "Sun":
//         alert("Whoopee");
//         break;
//     case "Fri":
//         alert("TGIF!");
//         break;
//     default:
//         alert("Shoot me now!");
// }

// ============= Chp 40: switch statements:How to complete them =============

// switch (dayOfWk) {
//     case "Sat":
//         alert("Whoopee");
//         break;
//     case "Sun":
//         alert("Whoopee");
//         break;
//     case "Fri":
//         alert("TGIF!");
//         break;
//     default:
//         alert("Shoot me now!");
// }

// Completing switch statement:
// default :
// alert("Shoot me now!");
// }

// ============= Chp 41: while loops =============

// var i = 0;
// while (i <= 3) {
// alert(i);
// i++;
// }

// ============= Chp 42: do...while loops =============

// var i = 0;
// do {
//     alert(i);
//     i++;
// } while (i <= 3);

// var i = 0;
// do {
//     alert(i);
//     i++;
// } while (i < 0);

// ============= Chp 44: Commenting =============

// This is a comment, ignored by the browser

/* Commenting more than
    One line together. 
*/

// ============= Chp 45: Events: link =============

// function popup(message) {
//     alert(message);
//     }

// ============= Chp 46: Events: Button =============

// Output is in HTML File

// ============= Chp 47: Events: Mouse =============

// Output is in HTML File

// ============= Chp 48: Events: Fields =============

// Output is in HTML File

// ============= Chp 49: Reading field values =============

// function checkAddress(fieldId) {
//     if (document.getElementById(fieldId).value === "") {
//         alert("Email address required.");
//     }
// }

// function checkAddress(fieldId) {
//     var val = document.getElementById(fieldId).value;
//     if (val === "") {
//         alert("Email address required.");
//     }
// }

// ============= Chp 50: Setting field values =============

// function fillCity() {
//     var cityName;
//     var zipEntered = document.getElementById("zip").value;
//     switch (zipEntered) {
//         case "60608":
//             cityName = "Chicago";
//             break;
//         case "68114":
//             cityName = "Omaha";
//             break;
//         case "53212":
//             cityName = "Milwaukee";
//     }
//     document.getElementById("city").value = cityName;
// }

// ============= Chp 51: Reading and setting paragraph text =============

// function expandLoris() {
//     var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety ofdistinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have severaladaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time.Slow lorises have a toxic bite, a rare trait among mammals.";
//     document.getElementById("slowLoris").innerHTML = expandedParagraph;
// }

// function placeAList() {
//     var listToPlace = "<ol><li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li></ol>";
//     document.getElementById("lorisList").innerHTML = listToPlace;
// }

// function peekAtContent() {
//     var whatsThere = document.getElementById("content").innerHTML;
// }

// ============= Chp 52: Manipulating images and text =============

// function makeInvisible() {
//     document.getElementById("ugly").className = "hidden";
//     }

// ============= Chp 53: Swapping images =============

// function swapPic() {
//     document.getElementById("before").src = "after-pic.jpg";
// }

// function swapPic(eId, newPic) {
//     document.getElementById(eId).src = newPic;
// }

// ============= Chp 54: Swapping images and setting classes =============

// function swapPic() {
//     document.getElementById("before").src = "after-pic.jpg";
// }

// function swapPic() {
//     var pic = document.getElementById("before");
//     pic.src = "after-pic.jpg";
// }

// function getAddress() {
//     var link = document.getElementById("link1");
//     var address = link.href;
// }

// ============= Chp 55: Setting styles =============

// function makeBig() {
//     document.getElementById("p1").style.fontSize = "2em";
//     }

//     document.getElementById("pic99").style.cssFloat = "left";

//     document.getElementById("div9").style.visibility = "hidden";

//     document.getElementById("mainPic").style.margin = "0 10px 0 10px;";

//     var m = document.getComputedStyle("mainPic").margin;

// ============= Chp 56: Target all elements by tag name =============

// var par = document.getElementsByTagName("p");

// var textInMiddleParagraph = par[1].innerHTML;

// par[1].innerHTML = "This SUV is too big.";

// for (var i = 0; i < par.length; i++) {
//     par[i].style.fontFamily = "Verdana, Geneva, sans-serif";
// }

// ============= Chp 57: Target some elements by tag name =============

// var e = document.getElementByID("rules");
// var paragraphs = e.getElementsByTagName("p");

// document.getElementsByTagName("p");

// e.getElementsByTagName("p");

// var t = document.getElementById("table9");
// var cells = t.getElementsByTagName("td");
// for (var i = 0; i < cells.length; i++) {
// cells[i].style.backgroundColor = "pink";
// }

// ============= Chp 58: The DOM =============

// 1st level: document
// 2nd level: <html>
// 3rd level: <head>
// 4th level: <title>
// 5th level: Simple document
// </title>
// </head>
// 3rd level <body>
// 4th level <p>
// 5th level There's not much to this.
// </p>
// </body>
// </html>


// 1st level: document
// 2nd level: <html>
// 3rd level: <head>
// 4th level: <title>
// 5th level: Simple document
// </title>
// </head>
// 3rd level <body>
// 4th level <div>
// 5th level <p>
// 6th level There's not much to this.
// </p>
// 5th level <p>
// 6th level Nor to this.
// </p>
// </div>
// </body
// </html>

// ============= Chp 59: The DOM: Parents and children =============

// 1st level: document
// 2nd level: <html>
// 3rd level: <head>
// 4th level: <title>
// 5th level: Simple document
// </title>
// </head>
// 3rd level <body>
// 4th level <div>
// 5th level <p>
// 6th level There's not much to this.
// </p>
// 5th level <p>
// 6th level Nor to this.
// </p>
// </div>
// </body>
// </html>

// ============= Chp 60: The DOM: Finding children =============

// var eField = document.getElementById("email");
// var eField = document.getElementsByTagName("p");
// var contents = p[2].innerHTML;

// var d = document.getElementById("div3");
// var p = d.getElementsByTagName("p");
// var contents = p[2].innerHTML;

// var p = document.getElementsByTagName("p");
// var contents = p[4].innerHTML;

// var div = document.getElementById("ny");
// var p = div.getElementsByTagName("p");
// var contents = p[1].innerHTML;

// var p = document.childNodes[0].childNodes[1].childNodes[1].childNodes[1];
// var contents = p.innerHTML;

// var d = document.getElementById("ny");
// var p = d.childNodes[1];
// var contents = p.innerHTML;

// ============= Chp 60: The DOM: Junk artifacts and nodeType =============

// Output is in HTML File

// ============= Chp 62: The DOM: More ways to target elements =============

// var targetNode = parentNode.childNodes[0];

// var targetNode = parentNode.firstChild;

// var targetNode = parentNode.childNodes[2];

// var targetNode = parentNode.childNodes[2];

// var kidNode = document.getElementById("div2");
// var pNode = kidNode.parentNode;

// var firstEl = document.getElementById("div1");
// secondEl = firstEl.nextSibling;

// var firstEl = document.getElementById("div1");
// secondEl = firstEl.nextSibling;

// ============= Chp 63: The DOM: Getting a target's name =============

// var nType = targetNode.nodeType;

// var parent = document.getElementById("div1");
// var target = parent.firstChild;
// nName = target.nodeName;

// var parent = document.getElementById("div1");
// var target = parent.firstChild;
// nName = target.nodeName;

// ============= Chp 64: The DOM: Counting elements =============

// var liElements = getElementsByTagName("li");

// var howManyLi = liElements.length;

// for (var i = 0; i < howManyLi; i++) {
//     if (liElements[i].innerHTML === "") {
//     liElements[i].innerHTML = "coming soon";
//     }
//     }
   
// ============= Chp 65: The DOM: Attributes =============

// var target = document.getElementById("p1");
// var hasClass = target.hasAttribute("class");

// var target = document.getElementById("p1");
// var hasClass = target.hasAttribute("class");

// var target = document.getElementById("p1");
// var hasClass = target.hasAttribute("class");

// ============= Chp 66: The DOM: Attribute names and value =============

// var list = document.getElementById("p1").attributes;

// var numOfItems = list.length;

// var numOfItems = document.getItemById("p1").attributes.length;

// ============= Chp 67: The DOM: Adding nodes =============

// var nodeToAdd = document.createElement("p");

// var imgNodeToAdd = document.createElement("img");

// nodeToAdd.setAttribute("class", "regular");

// imgNodeToAdd.setAttribute("border", "1");

// var newTxt = document.createTextNode("Hello!");

// nodeToAdd.appendChild(newTxt);

// ============= Chp 68: The DOM: Inserting nodes =============

// var parentDiv = document.getElementById("div1");
// var newParagraph = document.createElement("p");
// var t = document.createTextNode("Hello world!");
// newParagraph.appendChild(t);
// parentDiv.appendChild(newParagraph);

// var parentDiv = document.getElementById("div1");
// var newParagraph = document.createElement("p");
// var t = document.createTextNode("Hello world!");
// newParagraph.appendChild(t);
// paragraph1 = parentDiv.firstChild;
// parentDiv.insertBefore(newParagraph, paragraph1);

// var target = parentDiv.childNodes[1];
// parentDiv.insertBefore(newE, target.nextSibling);

// var parentDiv = document.getElementById("div1");
// var nodeToRemove = parentDiv.childNodes[2];
// parentDiv.removeChild(nodeToRemove);
