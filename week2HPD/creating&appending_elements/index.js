var myBody = document.querySelector("body");

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

