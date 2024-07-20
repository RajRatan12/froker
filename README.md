# froker - Assignment

Live Frontend - https://froker.netlify.app/

Live Backend - https://froker-qs1y.onrender.com/

Code - https://github.com/RajRatan12/froker

For Pictures and More documents - https://drive.google.com/file/d/1x8bmmr1RfYUp0Z3vsZLgsK3k2n47d7LM/view?usp=sharing

Technology Stack used: React, Express.js, Node.js, and MongoDB.

Frontend - 
Components Description - 

BlogList component - 
1) The BlogList component displays blog posts with pagination. Blog data is fetched from a backend service using fetchBlogs.
2) Blog posts are shown in a responsive grid, each with an image, author, date, title, snippet, and "Read More" link.
3) Navigation between pages is provided using the Pagination component.

BlogPost component -
1) When the postId changes, the window is scrolled to the top using the useEffect hook.
2) If the post is not found, a "Post not found" message is displayed.
3) The blog post's image and title are displayed with a breadcrumb navigation and read time information.
4) Social media sharing buttons for Twitter, Facebook, and WhatsApp are provided for users to share the post easily.

BlogService component - 
1) The code demonstrates the implementation of two asynchronous functions, fetchBlogs and fetchBlogById, which utilize Axios to make HTTP GET requests to an API endpoint for fetching blog data.
2) The fetchBlogs function is designed to retrieve a paginated list of blogs from the server, accepting optional parameters for page number and limit, and returning the server's response data.
3) The fetchBlogById function is used to fetch a specific blog post by its unique ID, returning the corresponding data from the server. Both functions handle the API URL configuration through a constant variable, API_URL.

RecentPost components -
1) useState manages the current page and posts per page to control pagination.
2) Posts are sliced and mapped to JSX elements, displaying based on the current page.
3) pageCount calculates the total number of pages, and changePage updates the current page on selection.
4) The RecentPosts component renders the post grid, header, pagination controls, and subscription section, adapting based on the current route.

Home components -
1) The Header component has been included to provide site-wide navigation. A fixed position at the top of the page ensures easy access.
2) An introductory section has been added, displaying the blog's title "FROKER BLOG" and a brief description of its content. Center alignment and prominent typography have been used for emphasis.
3) The RecentPosts component has been integrated to list recent blog entries. Pagination and subscription options are supported, enhancing the user's browsing experience.

Backend -

Models - 
1) A schema, BlogSchema, has been defined using Mongoose to structure the blog data. The schema outlines the fields and their data types, such as image, author, date, title, snippet, description, readTime, and likes.
2) Default values and data types have been specified within the schema. For instance, the likes field has been set to default to 0 and is defined as a Number type. This ensures data consistency and integrity.
3) The schema has been converted into a Mongoose model using mongoose.model('Blog', BlogSchema). This model allows for interaction with the MongoDB database, enabling operations such as creating, reading, updating, and deleting blog entries.

BlogRoutes -
1) A Mongoose schema, BlogSchema, was defined to structure blog data with fields such as image, author, date, title, snippet, description, readTime, and likes.
2) Each field's data type was specified, with default values assigned where needed. For instance, the likes field was set to default to 0.
3) The schema was converted into a Mongoose model using mongoose.model('Blog', BlogSchema), enabling database operations like creating, reading, updating, and deleting blog entries.

Routes - 
Get all blogs with pagination - '/api/blogs'
Get a single blog by ID - '/api/blogs/:id'
Like a blog post - '/api/blogs/:id/like'
Unlike a blog post - '/api/blogs/:id/unlike' 











