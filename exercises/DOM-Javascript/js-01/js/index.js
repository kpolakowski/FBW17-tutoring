// SELECTING BY TAG
// SELECT H1
const header = document.getElementsByTagName("h1");
console.log(header);

// SELECTING BY ID
// SELECT PARAGRAPH WITH ID "lorem"
const paragraph = document.getElementById("lorem");
console.log(paragraph);

// SELECTING BY CLASS
// SELECT ELEMENT WITH CLASS "links"
const list = document.getElementsByClassName("links")[0];

// SELECTING BY ATTRIBUTE
// SELECT link elements with attribute "href"
const links = document.querySelectorAll("li[class]");
console.log(links);

// CREATING ELEMENTS & APPENDING TO DOCUMENT ROOT
// CREATE img ELEMENT AND SET IT'S SOURCE TO SOMETHING
// APPEND IT TO THE BODY
const img = document.createElement("img");
img.src = "//unsplash.it/300/300";
document.body.append(img);

// APPENDING ELEMENTS TO OTHER ELEMENTS
// CREATE NEW LIST ITEM AND APPEND IT TO THE UL
const newItem = document.createElement("li");
//newItem.textContent = "<a>Some link</a>";
newItem.innerHTML = "<a href='#'>Some link</a>";
document.querySelector("ul.links").appendChild(newItem);
// <li><a>Some link</a></li>

// ADD NEW LIST ITEM AFTER SECOND ONE
const header2 = document.createElement("h2");
header2.textContent = "Second header";
document.querySelector("p#specific").insertAdjacentElement("afterend", header2);

/* const PI = 3.14;
const arr = [];
//MODIFYING
arr.push(3);
arr.pop();
//REASSIGNING
arr = arr.map(item => item); */

// REMOVING ELEMENTS
//document.querySelector("#wrong").remove();
document.getElementById("wrong").remove();
const users = [
  { username: "Karol", age: 18 },
  { username: "Nic", age: 17 },
  { username: "Ion", age: 16 },
  { username: "Mor", age: 15 }
];

users.forEach(user => {
  let listItem = document.createElement("li");
  //<li>Karol is 18 years old.</li>
  listItem.textContent = `${user.username} is ${user.age} years old`;
  document.querySelector("#people").appendChild(listItem);
  console.log(listItem);
});
