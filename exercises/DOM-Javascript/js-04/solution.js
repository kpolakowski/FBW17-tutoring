document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const value = document.querySelector("input#keyword").value;
  searchForText2(value);
});

// HIGHLIGHTING WHOLE PARAGRAPH
const searchForText = value => {
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach(p => p.classList.remove("found"));
  if (value)
    paragraphs.forEach(p => {
      if (p.textContent.includes(value)) {
        p.classList.add("found");
      }
    });
};

//HIGHLIGHTING JUST WORDS
const searchForText2 = value => {
  const paragraphs = document.querySelectorAll("p");

  //UNWRAP
  paragraphs.forEach(p => {
    p.querySelectorAll("span").forEach(span => {
      span.outerHTML = span.innerHTML;
    });
  });

  if (value)
    paragraphs.forEach(p => {
      if (p.textContent.includes(value)) {
        const reg = new RegExp(value, "g");
        p.innerHTML = p.innerHTML.replace(
          reg,
          `<span class="found">${value}</span>`
        );
      }
    });
};
