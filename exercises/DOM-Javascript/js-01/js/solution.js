/* // SELECTING BY TAG
const header = document.getElementsByTagName("h1");
console.log(header);

// SELECTING BY ID
const paragraphLorem = document.getElementById("lorem");
console.log(paragraphLorem);

// SELECTING BY CLASS
const list = document.getElementsByClassName("links");
console.log(list);

// SELECTING BY ATTRIBUTE
const links = document.querySelectorAll("ul.links a");
console.log(links);

// CREATING ELEMENTS & APPENDING TO DOCUMENT ROOT
const img = document.createElement("img");
img.src = "//unsplash.it/300/300";
document.body.appendChild(img);

// APPENDING ELEMENTS TO OTHER ELEMENTS
const newItem = document.createElement("li");
const textNode = document.createTextNode("New element");
newItem.appendChild(textNode);
list[0].appendChild(newItem);

// REMOVING ELEMENTS
const wrong = document.getElementById("wrong");
wrong.parentNode.removeChild(wrong);
 */
