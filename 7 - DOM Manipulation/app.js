// DOM: Document Object Model
/* 
target the element 
change the structure
id, class and etc
to javascript */

// Access element using .getElementById()
let elementWithID = document.getElementById("first-div"); //contains that you have in index.html
console.log("Element with ID:", elementWithID);

// Modify the .textContent property
elementWithID.textContent = "Div 1";

//Access elements using .getElementsByClassName()
let elementsWithClass = document.getElementsByClassName("sample-div");
console.log("Elements with Class:", elementsWithClass);

// Modify the .textContent property
elementsWithClass[1].textContent = "Div 2";

//Access elements using .getElementsByTagName
let listItems = document.getElementsByTagName("li");
console.log("List Items:", listItems);

listItems[0].style.color = "Tomato";
listItems[0].style.backgroundColor = "Aqua";

// .querySelector(), only choose the very first one
// Pass: class-name, id, tag
let orderedListItem = document.querySelector(".ordered-list");
console.log("First Ordered List Item:", orderedListItem);

orderedListItem.style.backgroundColor = "Purple";
orderedListItem.style.color = "Pink";

// .querySelectorAll()
// Pass .class-name, id, tag
let headings = document.querySelectorAll("h3");
console.log("Headings:", headings);

// For loop
/* 
1st: Variable Initialization
2nd: Condition Expression
3rd: Increment/Decrement */
console.log(headings.length); //9
for (let i = 0; i < headings.length; i++ ) {
    console.log(headings[i]); //check the heading count
    let heading = headings[i];
    heading.style.backgroundColor = "Crimson";
    heading.style.color = "White";    
}

//there are 2 options, using getElementById or selector
let dayNightIcon = document.getElementById("day-night-icon");
dayNightIcon.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/3688/3688129.png");

// createElement: create the new element
let parentElementDiv = document.querySelector("#parent-element"); //id #
let createdElementDiv = document.createElement("div");
createdElementDiv.textContent = "Child Element"; // add <div> [Child Element] </div>
//need to assist the parent to have the child
parentElementDiv.appendChild(createdElementDiv);

//delete the "Remove this element"
let elementToBeRemoved = document.getElementById("element-to-be-removed");
elementToBeRemoved.remove();

let darkModeBtn = document.getElementById("dark-mode-btn");
darkModeBtn.addEventListener("click", function(){
    let pageContainer = document.getElementById("page-container");
    pageContainer.style.backgroundColor = "black";
    pageContainer.style.color = "white";
    let pageModeText = document.getElementById("page-mode-text");
    pageModeText.textContent = "Dark Mode";
});

//[Exercise] use if else condition for dark to light