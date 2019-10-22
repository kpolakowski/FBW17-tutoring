// SELECTING BY TAG
// SELECT H1
const header = document.getElementsByTagName("h1");
console.log(header);

// SELECTING BY ID
// SELECT PARAGRAPH WITH ID "lorem"
const paragraphLorem = document.getElementById("lorem");
console.log(paragraphLorem);

// SELECTING BY CLASS
// SELECT ELEMENT WITH CLASS "links"
const list = document.getElementsByClassName("links");
console.log(list);

// SELECTING BY ATTRIBUTE
// SELECT link elements with attribute "href"
const links = document.querySelectorAll("ul.links a[href]");
console.log(links);

// CREATING ELEMENTS & APPENDING TO DOCUMENT ROOT
// CREATE img ELEMENT AND SET IT'S SOURCE TO SOMETHING
// APPEND IT TO THE BODY
const img = document.createElement("img");
img.src = "//unsplash.it/300/300";
document.body.appendChild(img);

// APPENDING ELEMENTS TO OTHER ELEMENTS
// CREATE NEW LIST ITEM AND APPEND IT TO THE UL
const newItem = document.createElement("li");
newItem.textContent = "New element";
list[0].appendChild(newItem);

// ADD NEW LIST ITEM AFTER SECOND ONE
const newItem2 = document.createElement("li");
newItem2.textContent = "New element 2";
list[0]
  .querySelector("li:nth-child(2)")
  .insertAdjacentElement("afterend", newItem2);
// REMOVING ELEMENTS
const wrong = document.getElementById("wrong");
wrong.remove();
