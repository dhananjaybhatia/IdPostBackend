ID Post Authorization Backend

This project implements a simple user authorization and post creation system using Node.js, Express and Mongoose. The application allows users to create posts, with posts being associated with specific users.

Features

User Authentication: Users can be created, and posts are associated with the user.
Post Creation: Each user can create posts, and posts are tied to their respective user accounts.
MongoDB Integration: User and post data is stored in MongoDB using Mongoose models.
Password Handling: Though not fully implemented here, you can easily add bcrypt to hash and verify passwords for authentication.
Environment Variables: The project uses dotenv to load environment variables like port configurations.
Tech Stack

Node.js: JavaScript runtime environment.
Express.js: Web framework for Node.js.
MongoDB & Mongoose: NoSQL database and ODM for data modeling.
dotenv: For loading environment variables.
