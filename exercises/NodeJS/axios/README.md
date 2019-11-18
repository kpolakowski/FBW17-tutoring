# Fetching data from APIs - Exercise #1


## Task 
- Use the axios package to fetch posts
    - fetch the posts from this URL: "https://jsonplaceholder.typicode.com/posts"
- Loop through the received posts
    - console.log the title

## Bonus Task #1

- Setup an HTTP server
    - provide a route /posts
    - move your existing code for fetching the posts into that route
    - on successful data fetching
        - store the received posts in an array "arrPosts"
        - display the post titles as an HTML list (one LI tag for each post)

## Bonus Task #2

- update your route /posts
    - on following calls to the route /posts we do not want to fetch the posts
    again from the API! We already have the data
    - check if the data is already present in our array (= if array is not empty)
    	- If so: Do not fetch the data again

## Bonus Task #3

- Create another route /post
    - use the "url" library to parse the URL parameters
    - fetch a parameter id 
    - grab the post with this ID from our posts array
    - display the id, title and the post body
    - display a link "Back to posts" which sends us back to the route /posts

- Update your /posts route
    - Each post title should become an HTML link
        - like so: `<li><a>Post title</a></li>`
        - the link should be dynamic. It should point to route /post/?id=\<id-of-the-post\>
            - this way we can jump to our post detail view 


