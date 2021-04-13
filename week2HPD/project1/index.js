var myBody = document.querySelector("body");

var navbar = document.createElement("nav");
myBody.append(navbar)

var a1 = document.createElement("a");
a1.textContent = "Home";
a1.href= ""
myBody.append(a1);

var a2 = document.createElement("a");
a2.textContent = "About";
a2.href= ""
myBody.append(a2);

var a3 = document.createElement("a");
a3.textContent = "Menu";
a3.href= ""
myBody.append(a3);

var a4 = document.createElement("a");
a4.textContent = "Photos";
a4.href= ""
myBody.append(a4);



var h1 = document.createElement("h1");
h1.textContent = "Welcome to my JS site";
myBody.append(h1);

var p = document.createElement("p");
p.textContent = "All of this was created with Javascript";
myBody.append(p);

var ol = document.createElement("ol");
var firstLi = document.createElement("li");
var secondLI = document.createElement("li");
var thirdLi = document.createElement("li");
var fourthLi = document.createElement("li");

firstLi.textContent = "This is the first li";
secondLI.textContent = "This is the second li";
thirdLi.textContent = "This is the third li";
fourthLi.textContent = "This is the fourth li";

ol.append(firstLi);
ol.append(secondLI);
ol.append(thirdLi);
ol.append(fourthLi);

myBody.append(ol);

var footer = document.createElement("footer");
footer.textContent = "Hans Dannerhoj";
myBody.append(footer);