# Filtering data

## Part 1

Create a function named `renderPeople` that creates a `list item` for each element in array of people. Content of the item should be the name and age of a person. Each of this item should be appended to list with id `people` that is already in the html.

## Part 2

Create a function named `updateFilter` that checks values provided in inputs.
If `#searchedName` input is empty then don't consider this filter.
If the person name includes value of the `#searchedName` input and age is the same or bigger as the one in `#minAge` input, person should be visible, otherwise not. (For hiding use `Element.classList` property)

## Part 3

For each input, add event listener (text:`keyup`, number:`change`), and as a callback provide them a function created in part 2.
