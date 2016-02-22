<h1>Cyft blog</h1>

This is a frontend solution for a blog with regular CRUD functionalities. 

<h2>Requirements:</h2>
  1. Load latest entry as index/home page
  2. Load archive list
  3. Allow addition of new articles
  4. Allow deletion of previous articles
  5. Allow modification of previous articles
  6. Include at least one html page, that demostrates the above features
  7. Use only DOM apis and jQuery (strictly for ajax calls). Other frameworks such as angular, backbone, underscore are not permitted.
  
  ### Service API
  A blog post object
  ```
  json
  {
    "id": "97f95f75-0c02-4449-af28-5ec742fdaab0",
    "title": "First Post",
    "text": "Woot, this is my first blog post. I'm really interesting!!!",
    "timestamp": "2015-03-25T12:00:00"
  }

  - id: <string> - unique id for a blog post
  - title: <string> - title of the post
  - text: <string> - post text
  - timestamp: <string> - date and time of post creation, ISO format YYYY-MM-DDTHH:MM:SS
  ```
  
  #### API
  
  Get all blog posts
  ```
  GET   /v1/posts/
  ```
  
  Get blog post by id
  ```
  GET   /v1/posts/<blog_post_id>
  ```
  
  Create post
  ```
  POST  /v1/posts/
  
  Body: {
    "title": ...
    "text": ...
  }
  ```
  
  Update post
  ```
  POST  /v1/posts/<blog_post_id>
  
  Body: {
    "title": ...
    "text": ...
  }
  ```
  
  Delete post
  
  ```
  DELETE  /v1/posts/<blog_post_id>
  ```

<h2>Project milestones</h2>
  1. Building backend API serer using Rails and testing all the CRUD actions (3-4 hours) 
  2. Bootstrap template selection and customization (1 hour)
  3. Writing handlers using jQuery for all element events (2-3 hours)
  4. Testing AJAX calls and rendering return data (2-3 hours)

<h2>Solutions</h2>
This is a single-page frontend solution where all the <div>s are toggled back and forth using Javascript and CSS. View.js contains all the functions needed for changing view state, and the actual click handlers for each link are written in Handler.js. Ajax.js contains all the AJAX calls needed for the CRUD functions and are used in Handler.js as well.

DOM apis and jQuery are used to populate post data. They also assign new <div id> with the actual post ids obtained from the backend, so that "edit" and "delete" buttons can refer to a specific post id and make changes accordingly.

Post data are sorted using Array.prototype.sort() in initIndex method in Handler.js, and latest post is obtained from the first element of the sorted array.

User can "add", "edit" or "delete" a post, and whichever latest post that user entered will be shown on the index/home page.

Test API server is deployed on heroku, frontend is hosted on github.

<h2>Demo link</h2>
http://kuramameng.github.io/blog-cyft/






