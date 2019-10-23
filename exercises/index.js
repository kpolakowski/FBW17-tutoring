const movies = [
  { title: "Hobbit", duration: 120, category: "Fantasy" },
  { title: "Saw", duration: 100, category: "Horror" },
  { title: "Ali G", duration: 110, category: "Comedy" },
  { title: "Interestellar", duration: 160, category: "Sci-fi" },
  { title: "Borat", duration: 90, category: "Comedy" },
  { title: "Saw 2", duration: 100, category: "Horror" },
  { title: "Alien", duration: 110, category: "Sci-fi" },
  { title: "Rush Hours", duration: 85, category: "Comedy" },
  { title: "Lord of the rings", duration: 180, category: "Fantasy" }
];

// transform provided array into an object with categories as property names and array with movies objects from each category (without category property) as value

const result = movies.reduce((categorized, movie) => {
  const currentCategory = movie.category;

  if (!categorized[currentCategory]) {
    categorized[currentCategory] = [];
  }
  categorized[currentCategory].push(movie);
  return categorized;
}, {});
console.log(result);

/* EXPECTED RESULT:
{
    "Fantasy":[
        { title: "Hobbit", duration: 120},
        { title: "Lord of the rings", duration: 180}...
    ],...

} */

// display all movies on our website
// each category should be in separate question
// each section should contain h2 element with category name and unordered list with all movie titles sorted by duration time ascending ( put duration after title to see if script works )

for (let category in result) {
  console.log(category);
  console.log(result[category]);
  const section = document.createElement("section");
  const header = document.createElement("h2");
  header.textContent = category;
  const movieList = document.createElement("ul");

  result[category]
    .sort((movieA, movieB) => {
      return movieB.duration - movieA.duration; // Sort from the longest to the shortest for each category.
    })
    .forEach(movie => {
      console.log(movie);
      const movieItem = document.createElement("li");
      movieItem.textContent = `${movie.title} (${movie.duration} minutes)`;
      movieList.appendChild(movieItem);
    });

  //Rendering
  section.appendChild(header);
  section.appendChild(movieList);
  document.body.appendChild(section);
}
