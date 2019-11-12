const people = [
  { name: "Karol", age: 12 },
  { name: "Leandro", age: 30 },
  { name: "Robert", age: 30 },
  { name: "Leon", age: 21 },
  { name: "Maria", age: 24 },
  { name: "Martina", age: 20 }
];

const updateFilter = () => {
  const fname = document.querySelector("input#searchedName");
  const fage = document.querySelector("input#minAge");

  const peopleListItems = document.querySelectorAll("ul#people li");
  peopleListItems.forEach(person => person.classList.remove("hidden"));

  people.forEach((person, i) => {
    if (
      !(
        (!fname || person.name.includes(fname.value)) &&
        person.age >= fage.value
      )
    )
      peopleListItems[i].classList.add("hidden");
  });
};

const renderPeople = people => {
  people.forEach(person => {
    const item = document.createElement("li");
    item.textContent = `${person.name} / ${person.age}`;
    document.querySelector("ul#people").appendChild(item);
  });
};

renderPeople(people);

document
  .querySelector("input#searchedName")
  .addEventListener("keyup", updateFilter);
document.querySelector("input#minAge").addEventListener("change", updateFilter);
